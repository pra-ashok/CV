# Pratik Patil — Research portfolio

A responsive, self-contained personal research website for **https://pra-ashok.github.io/resume/**. No build, package installation, API keys or server-side code is required.

## Publish to GitHub Pages

1. Sign in to GitHub and open [pra-ashok/resume](https://github.com/pra-ashok/resume). If it does not exist, create a repository named **resume** under **pra-ashok**. A public repository works with GitHub Free.
2. Unzip the delivery. Upload the **contents** of `pratik-patil-portfolio` to the repository root with **Add file → Upload files**. Keep the `assets` folder and `PratikPatilCV.pdf` alongside `index.html`; do not upload the ZIP itself or an enclosing folder. Include `.nojekyll` if your file picker shows hidden files. This site also works through the default Jekyll branch publishing process if that empty file is omitted.
3. Commit the files to `main` (or the branch you intend to publish).
4. Open **Settings → Pages → Build and deployment**. Set **Source** to **Deploy from a branch**, select **main** and **/(root)**, then **Save**. If you used a different branch, select it instead.
5. Wait for the Pages deployment to finish. The repository's **Actions** tab shows progress and errors. Then visit **https://pra-ashok.github.io/resume/**.
6. Verify **https://pra-ashok.github.io/resume/PratikPatilCV.pdf** and click both **View full CV** and **Download CV** on the site.

If this repository already has a website, retain a copy of its files before replacing them. Existing repository content and settings were not changed as part of this delivery. Repository access could not be confirmed through the connected GitHub account; the site has not been published.

[Official GitHub Pages publishing instructions](https://docs.github.com/en/pages/getting-started-with-github-pages/configuring-a-publishing-source-for-your-github-pages-site) (checked 29 October 2026).

### Optional: publish using Git

For an existing repository, clone it, copy the delivered files into that checkout, inspect the changes, and push. Run the commands from a terminal with Git installed and your GitHub authentication configured:

```sh
git clone https://github.com/pra-ashok/resume.git
cd resume
```

Copy the contents of `pratik-patil-portfolio` into this folder using your file manager, including `assets`, the PDF and `.nojekyll`. Then:

```sh
git status
git add index.html assets PratikPatilCV.pdf .nojekyll README.md
git commit -m "Add personal research portfolio"
git push
```

Enable Pages for the branch you pushed, using the settings above. There is no need to install Node.js or run a build.

## Included files

```text
pratik-patil-portfolio/
├── index.html                    All portfolio content and metadata
├── PratikPatilCV.pdf              Original, unchanged 3-page CV
├── .nojekyll                     Disables Jekyll processing
├── README.md                     Deployment and maintenance guide
├── QA-REPORT.txt                 Checks completed and remaining inputs
└── assets/
    ├── styles.css                Responsive layouts and print styles
    ├── main.js                   Menu, publication filters, copy email
    ├── media.js                  Profile and gallery photo configuration
    ├── profile-initials.svg      Initials avatar until a photo is supplied
    ├── favicon.svg               Browser icon
    ├── molecular-network.svg     Original conceptual illustration
    ├── social-preview.svg        Editable sharing-image source
    └── social-preview.png        Social sharing image (1200 × 630)
```

## Preview locally

Double-click `index.html` for a direct local preview. The page content, styling, navigation anchors and relative PDF links work without a build or JavaScript. Clipboard copying is only offered when the browser supports it in a secure context; email links always work.

For a server preview, open a terminal in `pratik-patil-portfolio` and run:

```sh
python3 -m http.server 8000
```

Open **http://localhost:8000/**. Stop the server with **Ctrl+C**.

## Why the PDF links work

All four CV links use the same relative URL, `PratikPatilCV.pdf`. On the project website that resolves to `/resume/PratikPatilCV.pdf`; it also works on a local server or when opening the HTML file directly. The bundled file is the original CV, not a placeholder. Three links request a download; one opens the PDF in a new tab. Some mobile browsers open PDFs in their viewer and offer Save/Download there.

Keep the exact filename and capitalisation. Do not change the link to `/PratikPatilCV.pdf`, because that would omit `/resume/` on GitHub Pages. Avoid links to `/mnt/data`, `sandbox:`, `file:`, a local computer path or a GitHub `blob` page.

## Content accuracy and editorial notes

Content is based on the supplied `PratikPatilCV.pdf`. Dates, organisations, roles, degree status, skills and research claims are preserved. No performance figures, job offers, collaborators, research outcomes or peer-reviewed publication status were invented.

- The PhD is **in progress**, described as nearing thesis completion in the CV. No completed doctorate is claimed.
- The two 2026 manuscripts labelled **in press** retain that status. No journal, DOI or public download was supplied for them, so none is invented.
- The arXiv URL in the CV is missing its final digit: `2608.0549`. The matching title and authors were verified on [arXiv:2608.05491](https://arxiv.org/abs/2608.05491). The website uses this corrected URL and labels the item as a **preprint**. The PDF has not been altered.
- The 2024 quantum-computing chapter links to the supplied [PubMed record](https://pubmed.ncbi.nlm.nih.gov/37702939/), which matches the title and authors.
- The cybersecurity chapter retains the DOI supplied in the CV: [10.4018/979-8-3693-2715-9.ch014](https://doi.org/10.4018/979-8-3693-2715-9.ch014). The publisher destination could not be independently loaded during delivery; the supplied DOI was not changed.
- The CV describes a 2026 first-prize poster award using both “Research Day” and “3MT” event labels. The site states **first prize for poster presentation at the University of Suffolk, 2026**, retaining the shared claim without treating these as two different awards.
- Ongoing project descriptions remain at the abstract level used in the CV. Molecular and circuit illustrations are conceptual, not experimental figures or simulation outputs.
- “Present” dates and thesis progress reflect the supplied CV. Update these when roles or degree status change.

## Maintain the site

- **Profile and gallery photos:** see the photo setup instructions below. The delivered version uses an initials avatar and an empty gallery because no photographs were supplied.
- **Blogs:** the Blogs section has an honest empty state because no posts were provided. To publish an article, save a standalone HTML page under `blog/` or publish it on your preferred writing platform. Replace `.blog-empty` inside `.blog-list` in `index.html` with one or more article cards using the example below. Use a real title, date, summary and URL, and remove the empty-state message when the first post is live. No article or publication claim has been invented.
- **Text and publications:** edit `index.html`. Research and industry details use native HTML `details` elements. For a new publication, copy one `article.publication` and use `data-type="preprint"`, `"in-press"` or `"chapter"`. Update the initial All count and status text in the toolbar; filtering counts are calculated automatically after selection.
- **CV:** replace `PratikPatilCV.pdf` using the same filename. All four links will continue to work.
- **Colours and layout:** edit the variables at the top of `assets/styles.css`.
- **Email:** update the email links in `index.html` and the clipboard value in `assets/main.js` together.
- **Repository or domain:** relative assets and PDF URLs will continue working. Update the canonical URL, `og:url` and `og:image` in `index.html` to your new published address. Regenerate the sharing image only if desired.

The website uses system fonts, local graphics and no external JavaScript, analytics, cookies or contact-form service. All CV content and blog-section text remain readable with JavaScript disabled. JavaScript adds the collapsible mobile menu, publication filters, active navigation, clipboard copy, footer year and optional photo gallery. A skip link, visible keyboard focus, reduced-motion support and print styles are included.

### Add your profile picture and gallery

1. Create a folder called `photos` inside `assets`, then add your own JPG, PNG or WebP files. A square portrait of at least 400 × 400 pixels works well; the site crops it to a circle. For gallery photographs, about 1600 pixels along the longer edge is usually sufficient. Keep descriptive filenames without spaces.
2. Open `assets/media.js`. Set the profile `src` to your photo's relative path. Add a gallery entry for each image, with a descriptive `alt` and an accurate caption. For example (replace these illustrative filenames and descriptions with your own):

```js
window.PORTFOLIO_MEDIA = {
  profile: {
    src: 'assets/photos/profile.jpg',
    alt: 'Portrait of Pratik Patil',
    position: '50% 50%'
  },
  gallery: [
    {
      src: 'assets/photos/photo-one.jpg',
      alt: 'Describe the actual photograph here',
      caption: 'Your caption, event and date'
    },
    {
      src: 'assets/photos/photo-two.jpg',
      alt: 'Describe the second photograph here',
      caption: 'Your second caption'
    }
  ]
};
```

3. Upload the photos and updated `assets/media.js` to the repository. The initials avatar switches to your portrait and the empty-gallery message is replaced by photo cards. Clicking a card opens a larger image with its caption; use Previous/Next, arrow keys, Close or Escape to browse and exit.

Only add images and captions you want to publish. The gallery setup does not invent conference photographs, identities, events or dates. A failed profile-image load retains the initials avatar. Gallery images must use valid paths and a non-empty `alt` field. The gallery requires JavaScript; the rest of the portfolio and the CV links work without it. For a profile photo that also appears without JavaScript, additionally update the `src` and `alt` on `#profile-photo` in `index.html`.

### Blog article card example

This is an editing example, not a published article. Replace every placeholder before inserting it into `.blog-list`:

```html
<article class="blog-card">
  <p class="eyebrow"><time datetime="YYYY-MM-DD">Publication date</time> · Topic</p>
  <h3><a href="blog/your-article.html">Your article title</a></h3>
  <p>A short, accurate summary of the published article.</p>
  <a class="text-link" href="blog/your-article.html">Read article <span aria-hidden="true">→</span></a>
</article>
```

For a local article page under `blog/`, reference `../assets/styles.css`, `../assets/favicon.svg`, `../PratikPatilCV.pdf` and `../index.html#blogs` from that page. Give the article its own title, description and canonical URL. For an externally hosted article, replace both card URLs with the article's full HTTPS URL.

## Delivery verification

The delivery was checked for local resource paths, internal anchors, PDF integrity and static JavaScript syntax. See the accompanying delivery report for browser viewport and interaction checks. Publication availability and third-party pages may change independently of this site.
