setTimeout(() => {
  const customHostname = document.querySelector("#hostField")
  const textHN = document.querySelector("body > titlebar > div.settings-dropdown > div > p:nth-child(8)")
  const buttonHN = document.querySelector('#cswU')

  customHostname.addEventListener('input', name => {textHN.textContent = name.target.value})

  const saveToLocal = () => {localStorage.setItem('customHostname', textHN.textContent)}

  buttonHN.addEventListener('click', saveToLocal)

  const hostname = localStorage.getItem('customHostname')

  if (customHostname) {textHN.textContent = hostname}
  document.querySelector("#hostField").value = document.querySelector("#hostField").value + hostname
}, 0600)

if(!localStorage.getItem("firstTime")){
  localStorage.setItem('customHostname', 'https://design.penpot.app/') // If not set, by default on first launch, the app will be blank (to fix issue #3)
  localStorage.setItem("firstTime","true")
  // setTimeout(() => {welcome()}, 2500)
}else{}