function TabLight() {
    document.querySelector("body").style.backgroundColor = 'white'
    document.querySelector("body > tab-group").shadowRoot.querySelector("div > nav").style.backgroundColor = 'white'
    document.querySelector("body > titlebar > div.actions > div.action-buttons > button:nth-child(2)").style.backgroundColor = 'white'
    document.querySelector("body > titlebar > div.actions > div.action-buttons > button:nth-child(2)").style.color = 'black'
}