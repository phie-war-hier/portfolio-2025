
function changeLang() {
    console.log("Deutsch");
}


function navigateToShow() {
    document.getElementById('show').style.display = "block";
    document.getElementById('projects').style.display = "none";
    document.getElementById('experience').style.display = "none"; 
}

function navigateToProjects() {
    document.getElementById('show').style.display = "none";
    document.getElementById('projects').style.display = "flex";
    document.getElementById('experience').style.display = "none";
}

function navigateToExperience() {
    document.getElementById('show').style.display = "none";
    document.getElementById('projects').style.display = "none";
    document.getElementById('experience').style.display = "flex";
}








const projectsEntries = [
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
        projectDescription: "The AR DXP at HDIL is a research work on embedded temporal data visualizations in an urban environment."
    },
    {
        projectCoverimage: "img/sh-irrlicht-coverbild-400.webp",
        alt: "User Experience",
        projectTag: ["Interaction", "Data Vis", "Installation"],
        projectYear: 2024,
        projectDescription: "Irrlicht - A data-supported, interactive and immersive installation to raise awareness of the issue of light pollution."
    }
];


const projectsContainer = document.querySelector('.projects-container');

projectsEntries.forEach(entry => {
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
        <p class="description">${entry.projectDescription}</p>
    `;

    // Den Eintrag in das Portfolio-Div einfügen
    projectsContainer.appendChild(entryDiv);
});






const experienceEntries = [
    {
        experienceTag: "Degree",
        experienceYear: 2024,
        experienceDescription: "Bachelor Degree in Communication Design at the Faculty of Design Mannheim"
    },
    {
        experienceTag: "Publication",
        experienceYear: 2024,
        experienceDescription: "AR DXP Publication with HDIL."
    },
    {
        experienceTag: "Jobposition",
        experienceYear: 2024,
        experienceDescription: "Graphic designer at HDIL."
    }
];


const experienceContainer = document.querySelector('.experience-container');

experienceEntries.forEach(entry => {
    // Ein neues Div für jeden Eintrag erstellen
    const entryDiv = document.createElement('div');
    entryDiv.classList.add('experience-element');



    // HTML-Inhalt für den Eintrag erstellen
    entryDiv.innerHTML = `
        <div class="experience-tags">  
            <div class="tag">${entry.experienceTag}</div>
            <p class="experience-year">${entry.experienceYear}</p>
        </div>
        <p class="description">${entry.experienceDescription}</p>
    `;

    // Den Eintrag in das Portfolio-Div einfügen
    experienceContainer.appendChild(entryDiv);
});
