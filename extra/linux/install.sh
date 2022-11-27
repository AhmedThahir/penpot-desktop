#!/bin/sh
############## Installation Instructions #################################
# Hi there! This script will install Penpot Desktop on Linux             #
# Files will be added to ~/.local/share/korbs-studio/                    #
#                                                                        #
# Run this:                                                              #
# bash <(curl -s https://cdn.korbsstudio.com/files/sh/penpot-desktop.sh) #
#                                                                        #
##########################################################################

#!/bin/sh
# Install Penpot Desktop
    (
        echo "10" ;
        echo "# Creating Directory ~/.local/share/korbs-studio/" ;
        mkdir ~/.local/share/korbs-studio/
        echo "12"
        mkdir ~/.local/share/korbs-studio/penpot-desktop/
        echo "14"
        mkdir ~/.local/share/korbs-studio/penpot-desktop/app/

        echo "20" ;
        echo "# Downloading and adding resources..."
        cd ~/.local/share/korbs-studio/penpot-desktop/
        wget -q "https://code.korbsstudio.com/KorbsStudio/Penpot-Desktop/-/raw/main/build/icon.png"

        echo "40" ;
        cd ~/.local/share/korbs-studio/penpot-desktop/app/
        wget -q "https://updates.korbsstudio.com/penpot-desktop/Penpot%20Desktop-0.1.3.AppImage"
        echo "80" ;
        wget -q "https://code.korbsstudio.com/KorbsStudio/Penpot-Desktop/raw/branch/main/extra/linux/penpot-desktop.sh"

        echo "95" ;
        echo "# Almost done..."
        cd ~/.local/share/applications/
        wget -q "https://code.korbsstudio.com/KorbsStudio/Penpot-Desktop/-/raw/main/extra/linux/penpot-desktop.desktop"
        chmod -R 755 -R ~/.local/share/korbs-studio/penpot-desktop/

        # This is add 'penpot-desktop' as a command, because why not?
        cd ~
        printf "alias penpot-desktop='~/.local/share/korbs-studio/penpot-desktop/app/Penpot\ *.AppImage --no-sandbox %U'" >> .bashrc

        echo "99" ;
        echo "# Done. Click OK to continue." ;
        echo "100" ;
    ) |
zenity --progress --title "Penpot Desktop Installer" \
--width 500 --text "Preparing to install Penpot Desktop..." --percentage=0
clear
zenity --info --ellipsize --title="Job complete" --text="Finished installing."
clear
echo "If Penpot Desktop installed successfully, it should appear in your applications menu soon. Thanks for installing and happy designing!"
echo "Was there an issue? Submit it here: https://code.korbsstudio.com/KorbsStudio/Penpot-Desktop/issues or you can email 'support@korbsstudio.com'"
echo "Wanna contribute? Create a PR: https://code.korbsstudio.com/KorbsStudio/Penpot-Desktop"

# Run this as the very last command
exec bash