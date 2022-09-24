#!/bin/sh

# Auth
  while ! zenity --password  --ok-label="Continue"| sudo -S cat /dev/null >/dev/null; do
    if $(zenity --question --ellipsize --text="Wrong password, would you like to cancel the installation?"); then
      echo "no app-entry made, returning"
      zenity --warning --ellipsize --text="The installation was interrupted."
      return;
    fi
  done
    echo "$appEntry" | sudo -S tee ${launcher}

# Final - Install Penpot Desktop
    (
        echo "10" ;
        echo "# Creating Directory /usr/share/korbs-studio/" ;
        sudo mkdir /usr/share/korbs-studio/
        echo "12"
        sudo mkdir /usr/share/korbs-studio/penpot-desktop/
        echo "14"
        sudo mkdir /usr/share/korbs-studio/penpot-desktop/app/

        echo "20" ;
        echo "# Downloading and adding resources..."
        cd /usr/share/korbs-studio/penpot-desktop/
        sudo wget -q "https://raw.githubusercontent.com/KorbsStudio/Penpot-Desktop/main/build/icon.png"

        echo "40" ;
        cd /usr/share/korbs-studio/penpot-desktop/app/
        sudo wget -q "https://updates.korbsstudio.com/penpot-desktop/penpot-desktop-0.0.9.AppImage"
        echo "80" ;
        sudo wget -q "https://raw.githubusercontent.com/KorbsStudio/Penpot-Desktop/main/extra/linux/penpot-desktop.sh"

        echo "95" ;
        echo "# Almost done..."
        cd /usr/share/applications/
        sudo wget -q "https://raw.githubusercontent.com/KorbsStudio/Penpot-Desktop/main/extra/linux/penpot-desktop.desktop"
        sudo chmod -R 755 -R /usr/share/korbs-studio/penpot-desktop/

        # This is add 'penpot-desktop' as a command, because why not?
        cd ~
        printf "alias penpot-desktop='/usr/share/korbs-studio/penpot-desktop/app/penpot-desktop-*.AppImage'" >> .bashrc

        echo "99" ;
        echo "# Done. Click OK to continue." ;
        echo "100" ;
    ) |
zenity --progress --title "Penpot Desktop Installer" \
--width 500 --text "Preparing to install Penpot Desktop..." --percentage=0
clear
zenity --info --ellipsize --title="Job complete" --text="Finished installing."
sudo -K
clear
echo "If Penpot Desktop installed successfully, it should appear in your applications menu soon. Thanks for installing and happy designing!"
echo "Was there an issue? Submit it here: https://github.com/KorbsStudio/Penpot-Desktop/issues or you can email 'support@korbsstudio.com'"
echo "Wanna contribute? Create a PR: https://github.com/KorbsStudio/Penpot-Desktop"

# Run this as the very last command
exec bash
