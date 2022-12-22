// Instead of the tab name being "PROJECT_NAME_HERE - Penpot", this script will remove the " - Penpot" portion.
function setTitle() {
    document.title = document.querySelector("#workspace > header > div.left-area > div.menu-section > div.project-tree > span:nth-child(2)").innerText // Find the project name
}

function ProjectNameCA() {
    if (document.querySelector("#workspace > aside.left-toolbar > ul:nth-child(1) > li:nth-child(1) > button") !== null) {
        setTitle() // Set title to only project name
    } else {
        setTimeout(() => { // Use setTimeout or it will result with maximum call stack size exceeded
            ProjectNameCA() // Check again
        }, 1000)
    }
}

ProjectNameCA()