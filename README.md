![Penpot Desktop](https://sudovanilla.com/content/images/Promo%20-%20Dark%20Background%20-%20Transparent%20-%20Slim.png)
> This is unofficial software

<a href="https://www.producthunt.com/posts/penpot-desktop?utm_source=badge-featured&utm_medium=badge&utm_souce=badge-penpot&#0045;desktop" target="_blank"><img src="https://api.producthunt.com/widgets/embed-image/v1/featured.svg?post_id=371642&theme=dark" alt="Penpot&#0032;Desktop - A&#0032;desktop&#0045;like&#0032;experience&#0032;for&#0032;Penpot | Product Hunt" style="width: 250px; height: 54px;" width="250" height="54" /></a>

# Penpot Desktop
Penpot Desktop delivers a desktop-like experience for Penpot users with the additional of integrating tabs to conveniently traverse back and forth between projects. Offline support is available through the select your own instance option in settings, as well as the theme settings that may be applied to either the entire desktop app or simply the Penpot dashboard.

[Download for Windows](docs/install/WINDOWS.md)

[Download for Windows](docs/install/MAC.md)

[Download for Windows](docs/install/LINUX.md)

## FAQ
Q: Is this official software?

A: No, Penpot Desktop is an Electron-based application developed by SudoVanilla. If the project was official, it would be sitting on Penpot's GitHub, not SudoVanilla Code.

<br>

Q: What operating system does this support?

A: As of Penpot Desktop v0.2.0:
 - Windows 10/11
 - maccOS High Sierra and up
 - Linux (DEB/RPM/Snap)

Since the release of Penpot Desktop v0.2.0, support has dropped for Windows 7/8/8.1.

<br>

Q: If an update is available, how do I get it?

A: This is done automatically on Windows and Linux, with auto update builtin from Electron Builder. We recommend that you wait at the least 1 - 2 minutes for the update to download, or depending on your internet. This usually take about 10 - 30 seconds for decent internet(200mbps).

On macOS, however, each update must be installed manually by the user themself. No, you are not required to do this on a regular basis; nevertheless, updating Penpot Desktop is recommended if you want the most up-to-date version in general. It's difficult to support macOS for auto updating at the time being.

<br>

Q: Why Electron and what is it?

A.1 (Why): I, Korbs, am mostly comfortable and knowledgeable with web coding languages such as HTML, CSS/SCSS, and JavaScript, along with APIs by ElectronJS. Using Electron was the right approach for me, and I've acquired a huge amount of experience with it over the last four years thanks to development I've done at FalixNodes Limited. The process of doing cross-platform support was also shortened and easier for me to do. I've also gotten very attach to Electron and am also most comfortable using technology built specifically for the framework like Electron Builder, Glasstron, and more.

A.2 (What): "Electron is an open-source software framework developed and maintained by GitHub. It allows for the development of desktop GUI applications using web technologie. It combines the Chromium rendering engine and the Node.js runtime." - [Wikipedia](https://en.wikipedia.org/wiki/Electron_(software_framework))

## Mentions of Penpot Desktop
[Is there a Desktop app option for Penpot?](https://community.penpot.app/t/is-there-a-desktop-app-option-for-penpot/2038) - Penpot Community

___

# Building Penpot Desktop
## Requirements
 - NodeJS 18 or up
 - Python 3.10 or up
 - g++ (Linux)
 - Visual Studio (Windows)
  - Development with C++
 - Visual C++ Redistributable (Windows)
 - At least 4GB of storage available, recommended is 8GB (macOS/Linux)
 - At least 8GB of storage available, recommended is 16GB (Windows)

 > If you're using Windows, please be using Windows 10 or Windows 11. Windows 8.1 or older are not supported by Penpot Desktop.

## Building
Now to build the actual software, this process has been made more simple over time during the development of Penpot Desktop, all thanks to GitHub Actions and Electron Builder. 

With Electron Builder, you can simply run:
```
npm run build
```

Then Electron builder will start building for your operating system.

___

# Support
Reach out to the maintainer at one of the following places:

- [Issues](https://sudovanilla.com/code/Korbs/Penpot-Desktop/-/issues)
- [Email](mailto:hello@sudovanilla.com)
- [Penpot Forums](https://community.penpot.app/u/korbs/summary) (DM or mention me)
- [Mastodon](https://fosstodon.org/@SudoVanilla)

#### Contributing
Please read [our contribution guidelines](docs/CONTRIBUTING.md), and thank you for being involved!

#### Security
Penpot Desktop follows good practices of security, but 100% security cannot be assured.
Penpot Desktop is provided **"as is"** without any **warranty**. Use at your own risk.

_For more information and to report security issues, please refer to our [security documentation](docs/SECURITY.md)._

# Acknowledgements
 - Creator/Developer: [SudoVanilla](https://SudoVanilla.com/)

#### Frameworks
 - Built on: [ElectronJS](https://electronjs.org/)
 - Styled with: [SASS](https://sass-lang.com/)

#### Packages Used
 - Building for distrubtion: [Electron Builder](https://github.com/electron-userland/electron-builder/)
 - Tabs and tab management: [Electron Tabs](https://github.com/brrd/electron-tabs)