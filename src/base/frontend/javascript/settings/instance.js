function ShowModal_Instance() {
  document.querySelector("#instance").style.display = 'inherit'
  document.querySelector("body > tab-group").shadowRoot.querySelector("div > nav").style.width = 'calc(100% - var(--navBarWS))'
}

function HideModal_Instance() {
  document.querySelector("#instance").style.display = 'none'
  document.querySelector("body > tab-group").shadowRoot.querySelector("div > nav").style.width = 'calc(100% - var(--navBarWF))'
}

setTimeout(() => {
    const customHostname = document.querySelector("#hostField")
    const textHN = document.querySelector("#instance > p")
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
}, 0500); // Wait a moment

if(!localStorage.getItem("firstTime")){
  localStorage.setItem('customHostname', 'https://design.penpot.app/') // If not set, by default on first launch, the app will be blank (to fix issue #3)
  localStorage.setItem("firstTime","true");
  setTimeout(() => {
    welcome()
  }, 1000);
}else{}

function InstanceSaved() {
  document.querySelector("#restart-required").removeAttribute('hidden')
}
