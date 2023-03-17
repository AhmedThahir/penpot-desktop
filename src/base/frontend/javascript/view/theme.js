function COP() {
    setTimeout(() => {
        const Instance = localStorage.getItem('customHostname')
        if(document.querySelector("body > tab-group").shadowRoot.querySelector("webview.visible").getAttribute('src').startsWith(Instance + "#/dashboard/"))
        {TabLight()}
        if (document.querySelector("body > tab-group").shadowRoot.querySelector("webview.visible").getAttribute('src').startsWith(Instance + "#/workspace/"))
        {TabDark()}
        else {}
    }, 5000)
}

function TabLight() {
    document.querySelector("body").style.backgroundColor = 'white'
    document.querySelector("body > tab-group").shadowRoot.querySelector("div > nav").style.backgroundColor = 'white'
    document.querySelector("body > titlebar > div.actions > div.action-buttons > button:nth-child(2)").style.backgroundColor = 'white'
    document.querySelector("body > titlebar > div.actions > div.action-buttons > button:nth-child(2)").style.color = 'black'
}

function TabDark() {
    document.querySelector("body").style.backgroundColor = '#1f1f1f'
    document.querySelector("body > tab-group").shadowRoot.querySelector("div > nav").style.backgroundColor = '#1f1f1f'
    document.querySelector("body > titlebar > div.actions > div.action-buttons > button:nth-child(2)").style.backgroundColor = '#1f1f1f'
    document.querySelector("body > titlebar > div.actions > div.action-buttons > button:nth-child(2)").style.color = 'white'
}