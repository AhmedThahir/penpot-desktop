if(!localStorage.getItem("firstTime")){
  localStorage.setItem('customHostname', 'https://design.penpot.app/') // If not set, by default when opening new tabs, the tab will be blank (to fix issue #3)
  localStorage.setItem('WhatIsDefaultTab', 'startup-home') // If not set, by default, the app will open on a blank tab.
  localStorage.setItem("firstTime","true");
  setTimeout(() => {
    document.querySelector('.onboarding').style.display = 'inherit';
  }, 1000);
}else{}