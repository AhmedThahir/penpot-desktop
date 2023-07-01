# Uninstalling Penpot Desktop
If you had any issues with Penpot Desktop, please see the [support section](../../README.md#support) before choosing to uninstall.

## Repo:
```
# Uninstalling
## Debian
sudo apt remove penpot-desktop

## Fedora/RHEL
sudo dnf remove penpot-desktop

## Suse
sudo zypper remove penpot-desktop

# Removing Repo
## Debian
rm /etc/apt/sources.list.d/korbsstudio-penpot-desktop.list
apt-get clean
rm -rf /var/lib/apt/lists/*
apt-get update

## Fedora/RHEL
rm /etc/yum.repos.d/korbsstudio-penpot-desktop.repo
rm /etc/yum.repos.d/korbsstudio-penpot-desktop-source.repo

## Suse
zypper rr korbsstudio-penpot-desktop
zypper rr korbsstudio-penpot-desktop-source
```
*Instructions was provided by Cloudsmith*

___

## Snap:
```
sudo snap remove penpot-desktop
```

___

## Arch:
```
sudo rm /usr/local/bin/penpot-desktop.AppImage
sudo rm /usr/share/icons/penpot-desktop.png
sudo rm /usr/share/applications/penpot-desktop.desktop

# Check if tmp still exist
sudo rm -R /usr/share/sudovanilla/tmp/
```