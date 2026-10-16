# Rex Ruan · Personal Website

A bilingual résumé website for Rex Ruan, designed for GitHub Pages. Built with plain HTML, CSS, and JavaScript, with no dependencies or build step.

## Pages

- `index.html`: personal homepage
- `resume.html`: direct résumé link
- `?lang=zh` / `?lang=en`: direct language selection; the switch remembers your choice
- Print / Save PDF: uses the browser print dialog with dedicated A4 styles

## Preview

Run `python3 -m http.server 8080` in this repository, then open http://localhost:8080.

## GitHub Pages

In Settings → Pages, choose **Deploy from a branch**, select **main** and **/(root)**, then save. The site will be available at https://rexruan-home.github.io/ after deployment.

## Editing

- `index.html`: personal homepage; `home.css` and `home.js`: homepage styles and interactions
- `resume.html`: résumé structure and bilingual introductory content
- `app.js`: work experience, projects, and bilingual text
- `style.css`: responsive layout and print styles
- `assets/favicon.svg`: RR monogram

Only the name Rex Ruan and the selected email address appear as personal identity/contact details. Original résumé documents, phone number, and location are excluded. Internal program and station identifiers are generalized. Employer English names are translations and can be replaced with official spellings.

## Visual reference

Homepage layout reference: https://w1llbean.github.io/. The engineering workstation image is reused from that reference for the requested visual reproduction and is presented as an illustrative environment, not a photograph of the site owner’s workplace.

## Navigation

All pages share the same six navigation destinations: Home (`index.html`), Work (`work.html`), Resume (`resume.html`), About (`about.html`), Skills (`skills.html`), and Contact (`contact.html`). Update navigation labels and destinations in `navigation.js`; common header styles live in `navigation.css`. Language choice is preserved across pages.
