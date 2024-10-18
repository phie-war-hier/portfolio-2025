
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
        alt: "User Experience",
        projectTag: ["User Experience", "Interaction"],
        projectYear: 2023,
        projectDescription: "sMArt roots is a project by Smart City Mannheim and HDIL. The aim was to create interactive visualizations with the city's citizens as the focus group."
    },
    {
        projectCoverimage: "img/hdil-ar-data-experience-point-coverbild-400.webp",
        alt: "User Experience",
        projectTag: ["Data Vis", "Interaction"],
        projectYear: 2024,
        projectDescription: "A description of the project"
    },
    {
        projectCoverimage: "img/sh-irrlicht-coverbild-400.webp",
        alt: "User Experience",
        projectTag: ["Interaction", "Data Vis", "Installation"],
        projectYear: 2024,
        projectDescription: "A description of the project"
    }
];


const portfolioContainer = document.querySelector('.projects-container');

portfolioEntries.forEach(entry => {
    // Ein neues Div für jeden Eintrag erstellen
    const entryDiv = document.createElement('div');
    entryDiv.classList.add('projects-element');


    let tagsHTML = '<ul class="project-tags">';
    entry.projectTag.forEach(tag => {
        tagsHTML += `<li class="tag">${tag}</li>`;
    });
    tagsHTML += '</ul>';



    // HTML-Inhalt für den Eintrag erstellen
    entryDiv.innerHTML = `
        <img class="project-coverimage" src="${entry.projectCoverimage}" alt="${entry.alt}">
        ${tagsHTML}
        <p class="project-year">(${entry.projectYear})</p>
        <p class="project-description">${entry.projectDescription}</p>
    `;

    // Den Eintrag in das Portfolio-Div einfügen
    portfolioContainer.appendChild(entryDiv);
});


