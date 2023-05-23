## FAQ for Developers
Q: Why Electron and what is it?

A.1 (Why): I, Korbs, am mostly comfortable and knowledgeable with web coding languages such as HTML, CSS/SCSS, and JavaScript, along with APIs by ElectronJS. Using Electron was the right approach for me, and I've acquired a huge amount of experience with it over the last four years thanks to development I've done at FalixNodes Limited. The process of doing cross-platform support was also shortened and easier for me to do. I've also gotten very attach to Electron and am also most comfortable using technology built specifically for the framework like Electron Builder, Glasstron, and more.

A.2 (What): "Electron is an open-source software framework developed and maintained by GitHub. It allows for the development of desktop GUI applications using web technologie. It combines the Chromium rendering engine and the Node.js runtime." - [Wikipedia](https://en.wikipedia.org/wiki/Electron_(software_framework))

Q: Can I use PNPM?

A: No! It's come to my attention that the package `electron-updater` is not compatible with PNPM. This package is required for Electron Builder for the updater to work properly.

Q: 