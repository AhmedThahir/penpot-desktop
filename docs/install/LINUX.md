# Download and Install Penpot Desktop on Linux

 - [Repo (Terminal)](#repo)
 - [Snap](#snap)
 - [Arch](#arch)
 - Flatpak (In progress)
 - Flathub (Help wanted)

### Repo:
```
# Setup
## Debian/Ubuntu
curl -1sLf \
  'https://dl.cloudsmith.io/public/korbsstudio/penpot-desktop/setup.deb.sh' \
  | sudo -E bash

## Fedora/RHEL
curl -1sLf \
  'https://dl.cloudsmith.io/public/korbsstudio/penpot-desktop/setup.rpm.sh' \
  | sudo -E bash

# Install
## Debian
sudo apt install penpot-desktop

## Fedora/RHEL
sudo dnf install penpot-desktop
```

___

### Snap:
```
sudo snap install penpot-desktop
```
[View on Snapcraft Store](https://snapcraft.io/penpot-desktop)

___

### Arch:
A script will be used to build the latest version of Penpot Desktop. This should work for all distros, but is targetted at Arch users.

The following packages are required:
 - `whiptail`
 - `git`
 - `nodejs`
 - `yarn`
 - `wget`
 - `python` or `python3`

```
bash <(wget -qO- https://sudovanilla.com/content/files/sh/penpot-desktop-install.sh)
```