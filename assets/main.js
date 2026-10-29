/* Progressive enhancement: all content, contact links and PDF links work without JavaScript. */
(() => {
  'use strict';
  const nav = document.querySelector('#primary-nav');
  const menu = document.querySelector('.menu-toggle');
  const mobile = window.matchMedia('(max-width: 900px)');
  if (nav && menu) {
    nav.classList.add('enhanced');
    const closeMenu = (restoreFocus = false) => {
      nav.classList.remove('is-open');
      menu.setAttribute('aria-expanded', 'false');
      menu.firstElementChild.textContent = 'Menu';
      if (restoreFocus) menu.focus();
    };
    const syncMenu = () => {
      menu.hidden = !mobile.matches;
      closeMenu();
    };
    syncMenu();
    mobile.addEventListener('change', syncMenu);
    menu.addEventListener('click', () => {
      const open = menu.getAttribute('aria-expanded') !== 'true';
      nav.classList.toggle('is-open', open);
      menu.setAttribute('aria-expanded', String(open));
      menu.firstElementChild.textContent = open ? 'Close' : 'Menu';
    });
    nav.addEventListener('click', (event) => {
      const link = event.target.closest('a');
      if (!link) return;
      closeMenu();
      if (mobile.matches && link.hash) {
        const target = document.getElementById(link.hash.slice(1));
        if (target) {
          target.setAttribute('tabindex', '-1');
          target.focus({ preventScroll: true });
          target.addEventListener('blur', () => target.removeAttribute('tabindex'), { once: true });
        }
      }
    });
    document.addEventListener('keydown', (event) => {
      if (event.key === 'Escape' && nav.classList.contains('is-open')) closeMenu(true);
    });
    document.addEventListener('click', (event) => {
      if (!nav.contains(event.target) && !menu.contains(event.target)) closeMenu();
    });
    if ('IntersectionObserver' in window) {
      const links = [...nav.querySelectorAll('a[href^="#"]')];
      const observer = new IntersectionObserver((entries) => {
        entries.forEach((entry) => {
          if (!entry.isIntersecting) return;
          links.forEach((link) => {
            if (link.hash === `#${entry.target.id}`) link.setAttribute('aria-current', 'location');
            else link.removeAttribute('aria-current');
          });
        });
      }, { rootMargin: '-12% 0px -65% 0px', threshold: 0 });
      document.querySelectorAll('main section[id]').forEach((section) => observer.observe(section));
    }
  }

  const toolbar = document.querySelector('.publication-toolbar');
  const filterButtons = [...document.querySelectorAll('[data-filter]')];
  const publications = [...document.querySelectorAll('.publication')];
  const count = document.querySelector('#publication-count');
  if (toolbar && count && publications.length) {
    toolbar.hidden = false;
    filterButtons.forEach((button) => button.addEventListener('click', () => {
      const filter = button.dataset.filter;
      filterButtons.forEach((item) => item.setAttribute('aria-pressed', String(item === button)));
      let visible = 0;
      publications.forEach((publication) => {
        publication.hidden = filter !== 'all' && publication.dataset.type !== filter;
        if (!publication.hidden) visible += 1;
      });
      count.textContent = `Showing ${visible} publication${visible === 1 ? '' : 's'}`;
    }));
  }

  const copyButton = document.querySelector('.copy-email');
  const copyStatus = document.querySelector('#copy-status');
  if (copyButton && copyStatus && navigator.clipboard && window.isSecureContext) {
    copyButton.hidden = false;
    copyButton.addEventListener('click', async () => {
      try {
        await navigator.clipboard.writeText('p.patil@uos.ac.uk');
        copyStatus.textContent = 'Email address copied.';
      } catch {
        copyStatus.textContent = 'Select the email address above to copy it.';
      }
    });
  }
  const year = document.querySelector('#year');
  if (year) year.textContent = String(new Date().getFullYear());

  // Local media configuration. Image loading is optional, so missing photos
  // never remove the content or show a broken portrait on the landing page.
  const media = window.PORTFOLIO_MEDIA || {};
  const portrait = document.querySelector('#profile-photo');
  if (portrait && media.profile && media.profile.src) {
    const candidate = new Image();
    candidate.onload = () => {
      portrait.src = candidate.src;
      portrait.alt = media.profile.alt || 'Portrait of Pratik Patil';
      portrait.style.objectPosition = media.profile.position || '50% 50%';
    };
    candidate.src = media.profile.src;
  }

  const gallery = document.querySelector('#gallery-grid');
  const emptyGallery = document.querySelector('#gallery-empty');
  const viewer = document.querySelector('#gallery-lightbox');
  const viewerImage = document.querySelector('#lightbox-image');
  const viewerCaption = document.querySelector('#lightbox-caption');
  const previous = document.querySelector('#gallery-previous');
  const next = document.querySelector('#gallery-next');
  const counter = document.querySelector('#gallery-counter');
  const photos = Array.isArray(media.gallery) ? media.gallery.filter(photo => photo && photo.src && photo.alt) : [];
  let currentPhoto = 0;
  const showPhoto = (index) => {
    currentPhoto = (index + photos.length) % photos.length;
    const photo = photos[currentPhoto];
    viewerImage.src = photo.src;
    viewerImage.alt = photo.alt;
    viewerCaption.textContent = photo.caption || '';
    counter.textContent = `${currentPhoto + 1} / ${photos.length}`;
    previous.disabled = photos.length < 2;
    next.disabled = photos.length < 2;
  };
  if (gallery && viewer && photos.length) {
    emptyGallery.hidden = true;
    photos.forEach((photo, index) => {
      const card = document.createElement('figure');
      card.className = 'gallery-card';
      const button = document.createElement('button');
      button.type = 'button';
      button.setAttribute('aria-label', `View photo: ${photo.caption || photo.alt}`);
      button.setAttribute('aria-haspopup', 'dialog');
      const thumbnail = document.createElement('img');
      thumbnail.src = photo.src;
      thumbnail.alt = photo.alt;
      thumbnail.loading = 'lazy';
      thumbnail.width = 800;
      thumbnail.height = 600;
      button.append(thumbnail);
      button.addEventListener('click', () => {
        showPhoto(index);
        viewer.showModal();
      });
      card.append(button);
      if (photo.caption) {
        const caption = document.createElement('figcaption');
        caption.textContent = photo.caption;
        card.append(caption);
      }
      gallery.append(card);
    });
    viewer.querySelector('.lightbox-close').addEventListener('click', () => viewer.close());
    previous.addEventListener('click', () => showPhoto(currentPhoto - 1));
    next.addEventListener('click', () => showPhoto(currentPhoto + 1));
    viewer.addEventListener('click', (event) => {
      if (event.target === viewer) viewer.close();
    });
    viewer.addEventListener('keydown', (event) => {
      if (event.key === 'ArrowRight' || event.key === 'ArrowLeft') {
        event.preventDefault();
        showPhoto(currentPhoto + (event.key === 'ArrowRight' ? 1 : -1));
      }
    });
  }
})();
