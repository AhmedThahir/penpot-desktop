setTimeout(() => {
  const JamHost = document.querySelector("#JamField")
  const JanHN = document.querySelector("body > titlebar > div.settings-dropdown > div > p:nth-child(3)")
  const JamButtonHN = document.querySelector('#cswR')

  JamHost.addEventListener('input', name => {JanHN.textContent = name.target.value})

  const saveToLocal = () => {localStorage.setItem('JamHost', JanHN.textContent)}

  JamButtonHN.addEventListener('click', saveToLocal)

  const JamHostName = localStorage.getItem('JamHost')

  if (JamHost) {JanHN.textContent = JamHostName}
  document.querySelector("#JamField").value = document.querySelector("#JamField").value + JamHostName
}, 0600)

if(!localStorage.getItem("firstTime")){localStorage.setItem('JamHost', 'https://jam.systems/')}else{}
function JamSaved() {document.querySelector("#restart-required").removeAttribute('hidden')}