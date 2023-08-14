# Download and Install Penpot Desktop on Linux

 - [Repo (Terminal)](#repo)
 - [Snap](#snap)
 - [Arch](#arch)
 - Flathub ([In progress](https://github.com/flathub/flathub/pull/4409))

### Repo:
```
# Setup
## Debian/Ubuntu
curl -1sLf \
  'https://dl.cloudsmith.io/public/korbsstudio/penpot-desktop/setup.deb.sh' \
  | sudo -E bash

## Fedora
curl -1sLf \
  'https://dl.cloudsmith.io/public/korbsstudio/penpot-desktop/setup.rpm.sh' \
  | sudo -E bash

# Install
## Debian
sudo apt install penpot-desktop

## Fedora/RHEL
sudo dnf install penpot-desktop # Yum can be used instead, if you want.

## Suse
sudo zypper install penpot-desktop
```
*Instructions was provided by Cloudsmith*

___

### Snap:
```
sudo snap install penpot-desktop
```
[View on Snapcraft Store](https://snapcraft.io/penpot-desktop)

___

### Arch:
A script will be used to build the latest version of Penpot Desktop.

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

> If you are using a different distro, this may work for you as well, but I do highly recommend you use the other methods.

___

## Troubleshooting
### Repo
**Distro not supported**
For Ubuntu/Debian based distros, use the following:
```
curl -1sLf   'https://dl.cloudsmith.io/public/korbsstudio/penpot-desktop/setup.deb.sh' | distro=ubuntu version=16.04 codename=xenial sudo -E bash
```