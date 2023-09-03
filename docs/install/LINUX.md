# Download and Install Penpot Desktop on Linux

- [Repo (Terminal)](#repo)
- [Arch](#arch)
- [Flatpak](#flatpak)
- [Snap](#snap)
- [FreeBSD](#freebsd)

## Repo:

### Setup

#### Debian/Ubuntu

```
curl -1sLf \
 'https://dl.cloudsmith.io/public/korbsstudio/penpot-desktop/setup.deb.sh' \
 | sudo -E bash
```

#### Fedora

```
curl -1sLf \
  'https://dl.cloudsmith.io/public/korbsstudio/penpot-desktop/setup.rpm.sh' \
  | sudo -E bash
```

### Install

#### Debian

```
sudo apt install penpot-desktop
```

#### Fedora/RHEL

```
sudo dnf install penpot-desktop # Yum can be used instead, if you want.
```

#### Suse

```
sudo zypper install penpot-desktop
```

_Instructions were provided by Cloudsmith_

---

## Flatpak:

<a href='https://flathub.org/apps/com.sudovanilla.penpot-desktop'><img width="240" alt='Download on Flathub' src='https://dl.flathub.org/assets/badges/flathub-badge-en.svg'/></a>

**Or via the command line**

```
flatpak install flathub com.sudovanilla.penpot-desktop
```

---

## Snap:

<a href="https://snapcraft.io/penpot-desktop"><img width="240" src="https://raw.githubusercontent.com/snapcore/snap-store-badges/master/EN/%5BEN%5D-snap-store-black-uneditable.svg" /></a>

**Or via the command line**

```
sudo snap install penpot-desktop
```

---

## Arch:

> Auto update is not supported, you are required to update manually when a new release is available

Download latest file: https://sudovanilla.com/distribute/applications/penpot-desktop/latest/Penpot-Desktop.pacman

Then, install with the following command:

```
sudo pacman -U ~/Downloads/Penpot-Desktop.pacman
```

---

### FreeBSD:

> Auto update is not supported, you are required to update manually when a new release is available

Download latest file: https://sudovanilla.com/distribute/applications/penpot-desktop/latest/Penpot-Desktop.freebsd

I'm not experienced with FreeBSD, therefore I don't know the proper command line to install the .freebsd file. If you do, feel free to submit a PR.

## Troubleshooting

### Repo

**Distro not supported**

For Ubuntu/Debian based distros, use the following:

```
curl -1sLf   'https://dl.cloudsmith.io/public/korbsstudio/penpot-desktop/setup.deb.sh' | distro=ubuntu version=16.04 codename=xenial sudo -E bash
```
