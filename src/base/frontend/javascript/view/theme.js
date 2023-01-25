function TabDark() {
    document.querySelector("body > tab-group").shadowRoot.querySelector("div").insertAdjacentHTML("beforeend", `
    <style>
    :host {
        --tabgroup-background: #1f1f1f !important;
        --tab-background: #1f1f1f !important;
        --tab-color: #ffffff !important;
        --tab-border-color: transparent !important;
        --tab-active-background: #303236 !important;
        --tag-hover-background: #3d3d3d !important;
        --button-font-size: 15px !important;
        --button-background: none !important;
        --button-color: #696a6c !important;
        --button-hover-background: #303236 !important;
        --button-hover-color: #fff !important;
        --button-border-radius: 50% !important;
        --button-cursor: pointer !important;
        --badge-background: #383a3e !important;
        --badge-color: #fff !important;
        --close-button-visibility: visible !important;
    }
    </style>
    `)
}
