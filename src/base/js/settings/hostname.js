setTimeout(() => {
    const customHostname = document.querySelector('.appUsername');
    const textHN = document.querySelector('.setName');
    const buttonHN = document.querySelector('#cswU');
  
    customHostname.addEventListener('input', name => {
      textHN.textContent = name.target.value
    })
  
    const saveToLocal = () => {
      localStorage.setItem('customHostname', textHN.textContent)
    }
  
    buttonHN.addEventListener('click', saveToLocal)
  
    const hostname = localStorage.getItem('customHostname')
  
    if (customHostname) {
      textHN.textContent = hostname;
    }
    document.querySelector("#hostField").value = document.querySelector("#hostField").value + hostname
    document.querySelector("#EhostField").innerHTML = hostname
}, 0500); // Wait a moment

if(!localStorage.getItem("firstTime")){
  localStorage.setItem('customHostname', 'https://design.penpot.app/') // If not set, by default on first launch, the app will be blank (to fix issue #3)
  localStorage.setItem("firstTime","true");
  setTimeout(() => {
    welcome()
  }, 1000);
}else{}

function hostnameSaved() {
  document.querySelector("#reload-required").removeAttribute('hidden')
  document.querySelector("#cswU").style.backgroundColor = '#00af00'
  document.querySelector("#cswU").innerHTML = 'Saved'
  document.querySelector("body > div.modal > div:nth-child(1) > div.settings > div.modal-footer").style.display = 'flex';
  setTimeout(() => {
    document.querySelector("#cswU").style.backgroundColor = '#9b98ff'
    document.querySelector("#cswU").innerHTML = 'Save'
  }, 2300);
}