# The package file doesn't like me using "\"
echo "Building PKG file first..."
echo "Please wait..."
yarn build
sleep 2
clear
echo "Building DMG file."
echo "Please wait..."
electron-installer-dmg ./dist/mac-arm64/Penpot\ Desktop.app Penpot-Desktop --background='./build/background-alt.png' --title='Penpot Desktop' --overwrite --icon='./build/icon.icns'
