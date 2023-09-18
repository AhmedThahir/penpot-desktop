# To Do List for Penpot Desktop

___

## On-Device Server (Help Wanted)
For those who prefer offline usage without Penpot Desktop connecting to any server, we'll need to look into a way to integrete Penpot(itself) into the app. We'll probably do something with Docker or something else.

___

## Electron (App)
 - Remember window size and posiiton
 - Deep link(sign in to Penpot via browser) (Help Wanted)
 - Improve performance
    - Startup time
    - Loading time

___ 

(Not planned, but is being looked into)

## Switch to Tauri v2.0
 - Apply auto update
 - Support all targets (AppImage, RPM, DEB, EXE, DMG)
   - According to docs, AppImage isn't supported on ARM with Tauri, this affects our Flathub release. 
   - RPM does not seem to be an option as a target bundle, will need to be looked into.
 - Titlebar overlay (macOS and Windows)
 - Build a tab library (Currently, `electron-tabs` is used, obviously meant for Electron only)
 - WebView functions
   - Inject JS (For tab name)
   - Integrate with new tab library
 - Remember window size and posiiton
 - Deep link(sign in to Penpot via browser) ([New in Tauri Beta](https://beta.tauri.app/features/deep-linking/))