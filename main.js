
function changeLang() {
    console.log("Deutsch");
}


function navigateToShow() {
    console.log("Show");
}

function navigateToProjects() {
    console.log("Project");
}

function navigateToExperience() {
    console.log("Experience");
}



const portfolioEntries = [
    {
        projectCoverimage: "img/hdil-smartroots-coverbild-400.webp",
        projectTag: "User Experience",
        projectYear: 2023,
        projectDescription: "A description of the project"
    },
    {
        projectCoverimage: "https://example.com/webdesign.jpg",
        projectTag: "Interaction",
        projectYear: 2022,
        projectDescription: "A description of the project"
    },
    {
        projectCoverimage: "https://example.com/webdesign.jpg",
        projectTag: "Interaction",
        projectYear: 2022,
        projectDescription: "A description of the project"
    }
];


const portfolioContainer = document.querySelector('.projects-container');

portfolioEntries.forEach(entry => {
    // Ein neues Div für jeden Eintrag erstellen
    const entryDiv = document.createElement('div');
    entryDiv.classList.add('projects-element');

    // HTML-Inhalt für den Eintrag erstellen
    entryDiv.innerHTML = `
        <img class="project-coverimage" src="${entry.projectCoverimage}" alt="${entry.projectTag}">
        <div class="project-tag">${entry.projectTag}</div>
        <p class="project-year">(${entry.projectYear})</p>
        <p class="project-description">${entry.projectDescription}</p>
    `;

    // Den Eintrag in das Portfolio-Div einfügen
    portfolioContainer.appendChild(entryDiv);
});

