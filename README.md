# Student Leadership Toolkit

An interactive, browser-based workspace for student leadership planning, communication, reflection, project tracking, and impact documentation.

Live site: [https://academixottawa.github.io/student-leadership-toolkit/](https://academixottawa.github.io/student-leadership-toolkit/)

Repository: [https://github.com/AcademixOttawa/student-leadership-toolkit](https://github.com/AcademixOttawa/student-leadership-toolkit)

## Demonstration

### Home and Toolkit Overview

![Student Leadership Toolkit home screen](assets/screenshots/home-editorial.png)

### Template Search and Full Resource Modal

Users can search templates, open a full resource, read the long-form content, copy the template text, or download it as a `.txt` file.

![Resource modal demonstration](assets/screenshots/resource-modal-editorial.png)

### Proposal Builder

Students can fill a structured form and generate a complete student initiative proposal draft.

![Proposal builder demonstration](assets/screenshots/proposal-builder-editorial.png)

## Workspace design

The interface uses a persistent sidebar and one focused tool at a time. Home shows actual project, draft, and checklist data, with direct links to continue work. `Cmd/Ctrl+K` opens a keyboard-accessible search across tools and template titles. Existing section URLs still work, including browser Back and Forward.

Lora serif headings and Manrope interface text are self-hosted in `assets/fonts/`, together with their SIL Open Font License files. Warm paper colors, fine rules, and different historical botanical specimens in each page's margins form the visual system. Flower details have slow stem-anchored movement; the home detail also responds gently to a fine pointer. System reduced-motion preferences disable these effects. Artwork provenance is recorded in [assets/ARTWORK.md](assets/ARTWORK.md).

## What This Project Does

The Student Leadership Toolkit helps students:

- Browse and search leadership templates
- Open long-form template resources in a modal
- Copy or download template text
- Build student initiative proposals
- Generate short leadership pitches
- Write structured reflections
- Track event planning progress
- Manage leadership projects
- Record evidence in an impact log
- Generate communication drafts
- Customize terminology for different school contexts
- Save progress locally in the browser

The toolkit is designed to be broadly usable across student councils, clubs, service-learning teams, peer mentors, residential or dormitory leaders, campaign teams, event organizers, and students preparing leadership applications.

## Key Features

- **Templates and Resources**: Search, filter, favorite, open, copy, download, import, and edit resources.
- **Resource Modal**: Displays full template content with simple markdown-style rendering.
- **Proposal Builder**: Generates a structured student initiative proposal.
- **Pitch Builder**: Creates 15-second, 30-second, and 60-second pitches for different audiences.
- **Reflection Builder**: Produces short or detailed leadership reflections.
- **Event Checklist**: Tracks event planning tasks with progress percentage.
- **Project Dashboard**: Stores project status, deadlines, goals, next actions, and notes.
- **Impact Log**: Records quantitative and qualitative evidence of leadership impact.
- **Survey Question Bank**: Provides copyable feedback and needs-assessment questions.
- **Communication Generator**: Drafts announcements, emails, briefings, captions, and poster text.
- **Edit Mode**: Allows site text and resource content to be edited directly in the browser.
- **Import/Export**: Supports JSON export/import for toolkit data and `.txt` exports for generated work.

## Local Usage

This project has no build step and no external dependencies.

Open `index.html` directly in a browser:

```text
index.html
styles.css
app.js
workspace.js
assets/
```

Or serve the folder with any static file server.

## Data Storage

The app uses `localStorage` for browser-side persistence. Saved drafts, projects, favorites, impact entries, checklist progress, and context settings remain on the same device and browser.

Data is stored per browser origin: opening the hosted site, a local server, and a file URL creates separate workspaces. Use JSON export/import to move your data between them. If browser storage fails, the app reports that saving is unavailable; keep an exported backup.

There is currently no cloud database connected. Placeholder functions are included in `app.js` for future integration with Firebase, Supabase, Google Sheets, a CMS, or a custom backend.

## Editing Content

Most editable content lives in `defaultToolkitData` inside `app.js`, including:

- Site title and subtitle
- Leadership framework
- Toolkit modules
- Template resources
- Case studies
- Action pathway
- Survey question bank

Users can also open **Edit Mode** in the website to add, edit, import, export, or reset resource content without rewriting the HTML.

## Deployment

This site is deployed with GitHub Pages from the `main` branch:

[https://academixottawa.github.io/student-leadership-toolkit/](https://academixottawa.github.io/student-leadership-toolkit/)

Because it is a static website, it can also be hosted on Netlify, Vercel, Cloudflare Pages, or any standard static hosting service.

## Accessibility and Compatibility

The interface uses semantic HTML, clear labels, readable contrast, keyboard-accessible controls, responsive layout, modal focus management, accessible search, reduced-motion support, and print styles. It is written in plain HTML, CSS, and JavaScript so it can be adapted easily for different schools, countries, grade levels, and leadership systems.
