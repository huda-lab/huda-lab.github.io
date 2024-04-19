# [huda-lab.github.io](https://huda-lab.github.io)

Our Human Data Interaction Lab Website

## Project Structure

This project uses [Astro](https://astro.build/) to make it easy to, data-driven, with reusable components, and performant.

```
/
├── public/ (public files)
│   ├── favicon.ico
│   ├── manifest.json
│   ├── images/
│   ├── syllabi/Data-Syllabus-Abouzied-2016.pdf
│   └── ...
├── src/
│   ├── pages/
│   │   └── index.astro (only one page in this website)
│   ├── components/
│   │   ├── Header.astro (how to render the header)
│   │   ├── Members.astro (how to render members)
│   │   ├── Work.astro (how to render our work)
│   │   └── ...
│   ├── content/
│   │   ├── papers/
│   │   │   ├── crest.md
│   │   │   ├── qetch.md
│   │   │   └── ...
│   │   └── research-areas/
│   │       ├── ai-education.md
│   │       ├── disinformation.md
│   │       └── ...
│   └── data/
│       └── members.json
└── package.json (all projects dependencies)
```

## 🧞 Commands

| Command                | Action                                             |
| :--------------------- | :------------------------------------------------- |
| `npm install`          | Installs dependencies                              |
| `npm run dev`          | Starts local dev server at `localhost:3000`        |

Deploy on GitHub is automatic at every push on the master branch.
