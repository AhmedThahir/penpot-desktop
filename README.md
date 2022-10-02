⚠️ This repo is being moved off of GitHub to [Korbs Studio Code](https://code.korbsstudio.com/KorbsStudio/) on October 9th!

___


![Penpot Desktop on Windows 11](https://user-images.githubusercontent.com/51213244/192091484-62d8e0b3-5011-41df-8a97-38306e3d84d0.png)

## Features
- Use Penpot Desktop on your own server if you're self-hosting
- Dark mode in Dashboard
- Tabs

## In Progress
 - Chrome OS support

## Downloads
> macOS does not include auto update, you'll need to manually update the app.

[Windows](https://apps.microsoft.com/store/detail/penpot-desktop/9P1G47CXJKR2) (Microsoft Store)

[Windows](https://updates.korbsstudio.com/penpot-desktop/Penpot%20Desktop%20-%20Setup.exe) (EXE)

[macOS](https://updates.korbsstudio.com/penpot-desktop/penpot-desktop-0.0.91.dmg)

[Linux](https://updates.korbsstudio.com/penpot-desktop/penpot-desktop-0.0.91.AppImage) (AppImage)

[Linux](https://snapcraft.io/penpot-desktop) (Snap)

[Linux](https://cdn.korbsstudio.com/files/sh/penpot-desktop.sh) (Command Line)

## Installation
### Windows
After downloading the setup file for Penpot Desktop, you'll notice a [pop up](https://i.imgur.com/yNjUYg7.png) when opening the setup file.

The pop up should be Smartscreen saying "Windows protected your PC" and "Microsoft Defender SmartScreen prevented an unrecoginzed app from start...". This is because the setup file for Penpot Desktop is unsigned and Windows will do this for all unsigned files, whether if the file is actually safe to use or not. 

Just click "Show More" and then "Run anyway".

### MacOS
(This is a temporary work-around until the issue is resolved.)
When you launch the Penpot desktop app for the first time, macOS (from approx. version 11 and higher) may not allow it [to launch for security reasons](https://support.apple.com/en-gb/guide/mac-help/mh40616/12.0/mac/12.0).

You may see an error message saying Penpot-Desktop "...cannot Be Opened Because the Developer Cannot Be Verified'. Until this has been resolved a work-around is:

1. Navigate to the application in Finder
2. Right-click the application icon and select "Open"
3. Confirm in the dialog which will be shown

The Penpot-Desktop app is now saved as an exception to your security settings, and you can open it in the future by double-clicking it just as you can any registered app.

---

# Building and Development
## Prerequisites
You'll need to have NodeJS already installed before working with Penpot Desktop, since it's built on ElectronJS.

[Download for Windows](https://nodejs.org/en/download/)

[Download for macOS](https://nodejs.org/en/download/)

For Linux, the installation is:
```
# Debian/Ubuntu/Chrome OS
curl -fsSL https://deb.nodesource.com/setup_16.x | sudo -E bash -
sudo apt-get install -y nodejs

# Fedora/CentOS/RHEL
sudo dnf module install nodejs:16

# Arch
sudo pacman -S nodejs npm
```

> The prerequisites will have more requirements in the future like Python and more. In the meantime, only NodeJS is required.

## Cloning and Starting
To clone the project, we'll use `git` and use `npm start` to start the app in development mode.
```
git clone KorbsStudio/Penpot-Desktop
cd Penpot-Desktop/
npm i
npm start
```

## Building
Penpot Desktop uses `electron-builder` package to build an executable file/setup for all operating systems.

To build, run:
```
npm run build
```
If you're unable to build, use the `build` workflow provided and use GitHub Actions, it's free to use.

---
> This is community software and not official software by Penpot.
