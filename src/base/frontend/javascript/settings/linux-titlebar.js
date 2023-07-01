var SetLTTheme = localStorage.getItem('linux-titlebar')
console.log('Linux Titlebar Theme:', SetLTTheme)
if (SetLTTheme == null){
    SwitchLinuxTitlebarTheme('./frontend/stylesheets/settings/linux-titlebar/none.css')
}else{
    SwitchLinuxTitlebarTheme(SetLTTheme)
}
function SwitchLinuxTitlebarTheme(sheet){
  document.getElementById('linux-titlebar-settings').href = sheet
  localStorage.setItem('linux-titlebar', sheet)
}