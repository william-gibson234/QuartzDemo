# TypeScript Demo with Quartz

A clean Quartz installation for demonstrating TypeScript concepts using Obsidian notes.

## Setup

1. Install dependencies: `npm install`
2. Build the site: `npm run quartz build`
3. Preview locally: `npm run quartz build --serve`

## Content
- This Quartz demo displays a band's setlist via markdown files written in an Obsidian vault
- Plugins using TypeScript change the appearance and storage of the markdown files
- It modifies and displays data and metadata about the files, such as the word count for the song description
- Creation of a new "genre" tag to be stored in each song's frontmatter, filtering based on select genres to display and not display
- Genre count to appear on the title page, counting the number of each genre on the title page
