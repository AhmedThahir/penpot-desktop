function InstanceSave() { // If save button is clicked
  let InstanceField = document.querySelector("input#InstanceField").value
  localStorage.setItem('Instance', InstanceField)

  document.querySelector("#InstanceSaveButton").style.backgroundColor = '#00ff89'
  document.querySelector("#InstanceSaveButton").setAttribute('value', 'Saved!')
  setTimeout(() => {
    document.querySelector("#InstanceSaveButton").style.backgroundColor = 'white'
    document.querySelector("#InstanceSaveButton").setAttribute('value', 'Save')
  }, 1200)
}

function InstanceGet() { // Runs on start
  let InstanceStore = localStorage.getItem('Instance')
  if(InstanceStore) {document.querySelector("input#InstanceField").value = InstanceStore}
}

document.querySelector("#InstanceField").value = localStorage.getItem('Instance')

if(!localStorage.getItem("firstTime")){
  localStorage.setItem('Instance', 'https://design.penpot.app/') // If not set, by default on first launch, the app will be blank (to fix issue #3)
  localStorage.setItem("firstTime","true")
  // setTimeout(() => {welcome()}, 2500)
}else{}

setTimeout(() => {
  if (document.querySelector("body > tab-group").shadowRoot.querySelector("div > div > webview").src === '') {
    console.log('You need to set an instance.')
    document.querySelector("body > titlebar > div.actions > div > button:nth-child(2)").click()
    document.querySelector(".tdm-warnings").style.display = 'inherit'
  } else {
    console.log('An instance is set.')
  }
}, 1500);