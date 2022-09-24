setTimeout(() => {
  const tabGroup = document.querySelector("tab-group");
    
  // New Tab
  tabGroup.setDefaultTab({
    active: true,
    src: "https://design.korbsstudio.com/",
    webviewAttributes: {
      allowpopups: true,
    }
  });

  // Default Tab (Home)
  const tab = tabGroup.addTab({
    active: true,
    src: "https://design.korbsstudio.com/",
    webviewAttributes: {
      allowpopups: true,
    },
    closable: false
  });
  tab.webview.addEventListener('close', () => t.close())

  // Change Titlebar Automatically
  // Change Title Automatically
  const webview = tab.webview;
  webview.addEventListener('page-title-updated', () => {
    const newTitle = webview.getTitle();
    tab.setTitle(newTitle);
  });
}, 1000)