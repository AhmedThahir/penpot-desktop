# Download and Install Penpot Desktop on Linux

 - [Repo (Terminal)](#repo)
 - [Snap](#snap)
 - Flatpak (In progress)
 - Flathub (Help wanted)
 - AUR (Help wanted)

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