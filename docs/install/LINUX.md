# Download and Install Penpot Desktop on Windows
Penpot Desktop is available on the Snap Store or you can use a terminal.

Via Terminal:
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