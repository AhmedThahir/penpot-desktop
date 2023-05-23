# Building Penpot Desktop
## Requirements
 - Yarn
 - NodeJS 18 or up
 - Python 3.10 or up
 - g++ (Linux)
 - Visual Studio (Windows)
  - Development with C++
 - Visual C++ Redistributable (Windows)
 - At least 4GB of storage available, recommended is 8GB (macOS/Linux)
 - At least 8GB of storage available, recommended is 16GB (Windows)

Also view [System Requirements](/docs/install/INSTALL.md#system-requirements)

## Building
Now to build the actual software, this process has been made more simple over time during the development of Penpot Desktop, all thanks to GitHub Actions and Electron Builder. 

With Electron Builder, you can simply run:
```
npm run build
```

Then Electron builder will start building for your operating system.

> On macOS, if Electron Builder says `/usr/bin/python` isn't found, that's because it should be looking for `/usr/bin/python3`. To fix this, the most easy workaround is to edit a file in `node_modules`. Edit the file `node_modules/dmg-builder/out/dmg.js` and change `python` on line 275 to `python3`. It should look like [this](https://i.imgur.com/RpbGWhS.png). Editing the `/usr/bin/` folder is almost impossible with newer versions of macOS.