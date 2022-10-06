setTimeout(() => {
  const hostname = localStorage.getItem('customHostname')
  const theme = localStorage.getItem('theme')
  const tabGroup = document.querySelector("tab-group");
  const darkModeCSS = `
  /* Bringing dark mode, to the dashboard */
  /* It's what we want, so let's add it! */
  :root {
      --primary: #303136;
      --secondary: #1f1f1f;
  }
  
  .dashboard-layout {background: var(--primary) !important}
  .dashboard-layout h1,
  .dashboard-layout h2,
  .dashboard-layout h3,
  .dashboard-layout p,
  .dashboard-layout li,
  .dashboard-layout span,
  .dashboard-layout i,
  .dashboard-layout svg
  {color: white !important}
  
  /* Login Screen */
  .auth-content {background: var(--secondary) !important}
  
  .auth-content h1,
  .auth-content h2,
  .auth-content span,
  .auth-content p
  {color: white !important}
  
  /** Sign Up **/
  .form-container .notification-icon svg, .generic-form .notification-icon svg {
      fill: white !important;
  }
  .form-container .subtitle, .generic-form .subtitle, .form-container .notification-text, .generic-form .notification-text, .af-dropdown-text, .af-step-previous button {
      color: white !important;
  }
  .custom-input.with-icon input, .custom-input.empty input, .custom-input.valid input, input#af_uid_409, .af-dropdown, input#af_uid_424, input#af_uid_430 {
      padding-right: 50px;
      background: var(--primary) !important;
      border: 2px #484848 solid !important;
      border-radius: 6px !important;
      color: white !important;
      height: 52px !important;
  }
  .questions-form .modal-container, .questions-form .modal-container .af-form {
      background: var(--primary) !important;
  }
  .af-html-block, .af-rich-text-block {
      color: #a599c6 !important;
  }
  .af-choice-option label:hover, .af-boolean-option label:hover {
      background-color: #404040 !important;
  }
  
  .input-container {
      background: var(--primary) !important;
      border: 2px #484848 solid !important;
      border-radius: 6px !important;
      color: white !important;
      height: 52px !important;
  }
  
  /* Dashboard */
  /** Sidebar **/
  .dashboard-sidebar {background-color: var(--primary) !important}
  
  ul.dropdown.teams-dropdown {
      border: 2px #484848 solid !important;
      border-radius: 6px !important;
  }
  
  ul.dropdown.teams-dropdown li {
      background: var(--primary) !important;
      color: white !important;
  }
  ul.dropdown.teams-dropdown li:hover {
      background: var(--secondary) !important;
  }
  .dashboard-sidebar .sidebar-content hr {
      display: none !important;
  }
  
  .dashboard-sidebar .sidebar-team-switch .switch-content {
      border: 2px #484848 solid !important;
  }
  .dashboard-sidebar .sidebar-team-switch .team-name .team-icon svg,
  .dashboard-grid .grid-item.project-th .project-th-actions .project-th-icon.menu > svg,
  .dashboard-sidebar.settings .back-to-dashboard svg {
      fill: white !important
  }
  .dashboard-sidebar .sidebar-search {
      background: var(--secondary) !important;
      border: 2px #484848 solid !important;
      border-radius: 6px !important;
  }
  
  .profile-section .dropdown span {
      color: black !important;
  }
  
  ul.sidebar-nav.no-overflow svg {
      fill: white !important;
  }
  
  form.profile-form input, form.password-form input {
      background: var(--primary) !important;
      border: 2px #484848 solid !important;
      border-radius: 6px !important;
      color: white !important;
      height: 52px !important;
  }
  
  label {
      color: white !important;
  }
  
  /** Modals **/
  .modal-container.onboarding button {
      color: black !important;
  }
  
  /** Content **/
  .dashboard-container {background: var(--secondary) !important}
  .dashboard-header {background: transparent !important}
  
  /*** Projects ***/
  .project {
      margin-left: 20px !important;
      padding-left: 10px !important;
      width: calc(100% - 40px) !important;
  }
  .project {background: var(--primary) !important}
  .btn-secondary {
      background: transparent !important;
      color: white !important;
      fill: white !important;
  }
  .dashboard-grid .grid-item.project-th {
      background-color: var(--primary) !important;
      border: 2px #484848 solid !important;
      border-radius: 6px !important;
  }
  .dashboard-grid .grid-item .grid-item-th {
      border-radius: 6px 6px 0px 0px !important;
  }
  .hero-projects .tutorial .text .title, .hero-projects .walkthrough .text .title {color: white !important}
  .dashboard-templates-section .content .template-card .img-container {
      color: white !important;
      border: 2px solid #64666a !important;
  }
  
  .dashboard-templates-section .content {
      background: #303236 !important;
      border: none !important;
      margin-left: 0px !important;
      padding-left: 5px !important;
      border-top: 2px #64666a solid !important;
  }
  .dashboard-templates-section .title div {
      background: #303236 !important;
      margin-left: 0px !important;
      padding-left: 5px !important;
      border: 2px #64666a solid !important;
      fill: white !important;
  }
  
  
  /*** Fonts ***/
  .dashboard-fonts .dashboard-fonts-hero, .dashboard-fonts .installed-fonts-header {
      background: var(--secondary) !important;
      color: white !important;
  }
  .dashboard-fonts .font-item {
      background: var(--secondary) !important;
      color: white !important;
      border: none !important;
      fill: white !important;
  }
  .dashboard-fonts .font-item input {
      background: var(--primary) !important;
      border: 2px #484848 solid !important;
      border-radius: 6px !important;
      color: white !important;
      height: 42px !important;
  }

  /* In Project */
  /** Internal Error **/
  .exception-content {
    background: black;
    fill: white !important;
  }
  .exception-content * {
      color: white !important;
  }
  a.btn-primary.btn-small {
    color: black !important;
    font-weight: bold;
  }
  `
  
  // Default Tab (Home)
  const tab = tabGroup.addTab({
    active: true,
    src: 'tabs/home.html',
    closable: false,
    webviewAttributes: {
      class: "tab-view",
      allowpopups: true,
    },
    ready: function (tab) {
      const webview = tab.webview;
      webview.addEventListener('page-title-updated', () => {
        const newTitle = webview.getTitle();
        tab.setTitle(newTitle);
      })
    }
  });
  tab.webview.addEventListener('close', () => t.close())

  // New Tab
  tabGroup.setDefaultTab({
    active: true,
    src: hostname,
    webviewAttributes: {
      class: "tab-view",
      allowpopups: true,
    },
    ready: function (tab) {
      const webview = tab.webview;
      webview.addEventListener('page-title-updated', () => {
        const newTitle = webview.getTitle();
        tab.setTitle(newTitle);
      })
      if (theme === 'Dark') {setTimeout(() => {webview.insertCSS( darkModeCSS )}, 0350)}
      else if (theme === 'Light') {}
    }
  });
  
  // If you open link that contains "target='_blank'"
  tab.webview.addEventListener('new-window', (e) => {
    tabGroup.addTab(
      {
        src: e.url,
        ready: function (tab) {
          const webview = tab.webview;
          webview.addEventListener('page-title-updated', () => {
            const newTitle = webview.getTitle();
            tab.setTitle(newTitle);
          });
          if (theme === 'Dark') {setTimeout(() => {webview.insertCSS( darkModeCSS )}, 0200)}
          else if (theme === 'Light') {}
        }
      }
    );
  });
}, 1000)