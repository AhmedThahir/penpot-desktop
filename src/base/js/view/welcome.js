if(!localStorage.getItem("firstTime")){
  localStorage.setItem('customHostname', 'https://design.penpot.app/') // If not set, by default on first launch, the app will be blank (to fix issue #3)
  localStorage.setItem("firstTime","true");
  setTimeout(() => {
    document.querySelector('.onboarding').style.display = 'inherit';
  }, 1000);
}else{}