
function changeLang() {
    console.log("Deutsch");
}


function navigateToShow() {
    document.getElementById('show').style.display = "block";
    document.getElementById('projects').style.display = "none";
    document.getElementById('experience').style.display = "none"; 

    document.getElementById('navShow').classList.add('active');
    document.getElementById('navProjectsTop').classList.remove('active');
    document.getElementById('navExperienceTop').classList.remove('active');
    
    document.getElementById('navProjectsTop').classList.remove('visible');
    document.getElementById('navExperienceTop').classList.remove('visible'); 

    document.getElementById('navProjectsBottom').classList.remove('notVisible');
    document.getElementById('navExperienceBottom').classList.remove('notVisible');

}

function navigateToProjects() {
    document.getElementById('show').style.display = "none";
    document.getElementById('projects').style.display = "flex";
    document.getElementById('experience').style.display = "none";

    document.getElementById('navShow').classList.remove('active');
    document.getElementById('navProjectsTop').classList.add('active');
    document.getElementById('navExperienceTop').classList.remove('active');

    document.getElementById('navProjectsTop').classList.add('visible');
    document.getElementById('navExperienceTop').classList.remove('visible')
    document.getElementById('navExperienceTop').classList.add('notVisible');

    document.getElementById('navProjectsBottom').classList.remove('visible');
    document.getElementById('navProjectsBottom').classList.add('notVisible');

    document.getElementById('navExperienceBottom').classList.remove('notVisible');
    document.getElementById('navExperienceBottom').classList.add('visible');
}

function navigateToExperience() {
    document.getElementById('show').style.display = "none";
    document.getElementById('projects').style.display = "none";
    document.getElementById('experience').style.display = "flex";

    document.getElementById('navShow').classList.remove('active');
    document.getElementById('navProjectsTop').classList.remove('active');
    document.getElementById('navExperienceTop').classList.add('active');

    document.getElementById('navProjectsTop').classList.add('visible');
    document.getElementById('navExperienceTop').classList.add('visible'); 


    document.getElementById('navProjectsBottom').classList.add('notVisible');
    document.getElementById('navExperienceBottom').classList.remove('visible');
    document.getElementById('navExperienceBottom').classList.add('notVisible');
}








const projectsEntries = [
    {
        projectCoverimage: "img/hdil-smartroots-coverbild-800.webp",
        alt: "User Experience",
        projectTag: ["User Experience", "Interaction"],
        projectYear: 2023,
        projectDescription: "sMArt roots is a project by Smart City Mannheim and HDIL. The aim was to create interactive visualizations with the city's citizens as the focus group."
    },
    {
        projectCoverimage: "img/hdil-ar-data-experience-point-coverbild-800.webp",
        alt: "User Experience",
        projectTag: ["Data Vis", "Interaction"],
        projectYear: 2024,
        projectDescription: "The AR DXP at HDIL is a research work on embedded temporal data visualizations in an urban environment."
    },
    {
        projectCoverimage: "img/sh-irrlicht-coverbild-800.webp",
        alt: "User Experience",
        projectTag: ["Interaction", "Data Vis", "Installation"],
        projectYear: 2024,
        projectDescription: "Irrlicht - A data-supported, interactive and immersive installation to raise awareness of the issue of light pollution."
    },
    {
        projectCoverimage: "img/sh-rocketdeployer-coverbild-800.webp",
        alt: "User Experience",
        projectTag: ["Interaction", "User Experience"],
        projectYear: 2023,
        projectDescription: "The Rocket Deployer is a physical and digital web app builder that allows visitors to build an app in SAP BTP at trade fairs."
    },
    {
        projectCoverimage: "img/sh-planta-coverbild-800.webp",
        alt: "User Experience",
        projectTag: ["Interaction", "Installation"],
        projectYear: 2022,
        projectDescription: "planta is an interactive installation that makes it possible to create a playful synergy between nature and technology."
    },
    {
        projectCoverimage: "img/sh-marbalance-coverbild-800.webp",
        alt: "User Experience",
        projectTag: ["Interaction", "Game"],
        projectYear: 2023,
        projectDescription: "Marbalance is an interactive game in which a player has to avoid enemies with the help of a balancing board."
    },
    {
        projectCoverimage: "img/sh-tetrisroom-coverbild-800.webp",
        alt: "User Experience",
        projectTag: ["3D", "Game"],
        projectYear: 2024,
        projectDescription: "The Tetris Room is a virtual exhibition on the classic Tetris with interactive elements."
    },
    {
        projectCoverimage: "img/sh-deep-blue-coverbild-1080.webp",
        alt: "User Experience",
        projectTag: ["3D", "Motion"],
        projectYear: 2023,
        projectDescription: "“deep blue” is an animation created with the 3D software Blender."
    },
    {
        projectCoverimage: "img/sh-unterwasserlaerm-coverbild-800.webp",
        alt: "User Experience",
        projectTag: ["Installation", "Data Vis"],
        projectYear: 2023,
        projectDescription: "A concept for an installation to raise awareness of the issue of underwater noise."
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
        experienceTag: "Graduation",
        experienceYear: 2024,
        experienceDescription: "Bachelor of Arts Communication Design at the Faculty of Design Mannheim University of Applied Sciences"
    },
    {
        experienceTag: "Publication",
        experienceYear: 2024,
        experienceDescription: "Embedded temporal data visualizations in an urban environment for casual exploration"
    },
    {
        experienceTag: "Job position",
        experienceYear: 2024,
        experienceDescription: "Student assistant in design at the Human Data Interaction Lab at Mannheim University of Applied Sciences"
    },
    {
        experienceTag: "Internship",
        experienceYear: 2024,
        experienceDescription: "Internship as UX Designer at sovanta AG in Heidelberg"
    },
    {
        experienceTag: "Job position",
        experienceYear: 2023,
        experienceDescription: "Student assistant in design at the Human Data Interaction Lab at Mannheim University of Applied Sciences"
    },
    {
        experienceTag: "Event",
        experienceYear: 2022,
        experienceDescription: "Captcha Design Festival at the Faculty of Design Mannheim"
    },
    {
        experienceTag: "Job position",
        experienceYear: 2022,
        experienceDescription: "Working student in sales at Markthaus Mannheim gGmbH"
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
