
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
        id: 1,
        projectPage: "projects/portfolio-detail.html",
        projectTitle: "Smart Roots – Parking Dashboard",
        projectCoverimage: "img/hdil-smartroots-coverbild-800.webp",
        alt: "User Experience",
        projectTag: ["User Experience", "Interaction"],
        projectYear: 2023,
        projectContext: "sMArt roots is an initiative of the Smart City Lab of the City of Mannheim and the HDIL.",
        projectPeople: ["Till Nagel", "Christoph Huber", "Sophie Humbert"],
        projectLink: "https://www.hdilab.org/projects/smart-roots/",
        projectDescription: "sMArt roots is a project by Smart City Mannheim and HDIL. The aim was to create interactive visualizations with the city's citizens as the focus group."
    },
    {
        id: 2,
        projectPage: "projects/ardxp.html",
        projectTitle: "AR Data Experience Point",
        projectCoverimage: "img/hdil-ar-data-experience-point-coverbild-800.webp",
        alt: "User Experience",
        projectTag: ["Data Vis", "Interaction"],
        projectYear: 2024,
        projectContext: "The AR Data Experience Point is a research project of the Human Data Interaction Lab at Mannheim University of Applied Sciences.",
        projectPeople: ["Till Nagel", "Christoph Huber", "Ekkehard Petzold", "Sophie Humbert"],
        projectLink: "https://www.hdilab.org/projects/ar-dxp/",
        projectDescription: "The AR DXP at HDIL is a research work on embedded temporal data visualizations in an urban environment."
    },
    {
        projectPage: "projects/irrlicht.html",
        projectTitle: "Irrlicht",
        projectCoverimage: "img/sh-irrlicht-coverbild-800.webp",
        alt: "User Experience",
        projectTag: ["Interaction", "Data Vis", "Installation"],
        projectYear: 2024,
        projectContext: " Irrlicht was created in 2024 as a bachelor's thesis supervised by Prof. Hartmut Wöhlbier and Prof. Dr. Till Nagel at the Faculty of Design Mannheim.",
        projectPeople: ["Sophie Humbert"],
        projectLink: "",
        projectDescription: "Irrlicht - A data-supported, interactive and immersive installation to raise awareness of the issue of light pollution."
    },
    {
        projectPage: "projects/rocketdeployer.html",
        projectTitle: "Rocket Deployer",
        projectCoverimage: "img/sh-rocketdeployer-coverbild-800.webp",
        alt: "User Experience",
        projectTag: ["Interaction", "User Experience"],
        projectYear: 2023,
        projectContext: "The Rocket Deployer product was developed in cooperation with a company in the summer semester software development project at Mannheim University of Applied Sciences.",
        projectPeople: ["Sophie Humbert (Design)", "Eddi Bludau (Design)", "Lauritz Fuchs (Computer Science)", "Dominik Koschik (Computer Science)", "Yan Wittmann (Computer Science)", "Julian Komarek (Computer Science)", "Jonas Fügen (Computer Science)"],
        projectLink: "",
        projectDescription: "The Rocket Deployer is a physical and digital web app builder that allows visitors to build an app in SAP BTP at trade fairs."
    },
    {
        projectPage: "projects/planta.html",
        projectTitle: "planta",
        projectCoverimage: "img/sh-planta-coverbild-800.webp",
        alt: "User Experience",
        projectTag: ["Interaction", "Installation"],
        projectYear: 2022,
        projectContext: "planta was designed as a group project in the Interactive Media course at the Faculty of Design Mannheim.",
        projectPeople: ["Paco Gutiérrez Hardt", "Teresa Hoffmann", "Sophie Humbert"],
        projectLink: "",
        projectDescription: "planta is an interactive installation that makes it possible to create a playful synergy between nature and technology."
    },
    {
        projectPage: "projects/marbalance.html",
        projectTitle: "Marbalance",
        projectCoverimage: "img/sh-marbalance-coverbild-800.webp",
        alt: "User Experience",
        projectTag: ["Interaction", "Game"],
        projectYear: 2023,
        projectContext: "The game was developed as a group project in the “Games Night” course at the Faculty of Design in Mannheim.",
        projectPeople: ["Paco Gutiérrez Hardt (Design)", "Teresa Hoffmann (Design)", "Sophie Humbert (Design)", "Christian Fagherazzi (Computer science)"],
        projectLink: "",
        projectDescription: "Marbalance is an interactive game in which a player has to avoid enemies with the help of a balancing board."
    },
    {
        projectPage: "projects/tetrisroom.html",
        projectTitle: "Tetris Room",
        projectCoverimage: "img/sh-tetrisroom-coverbild-800.webp",
        alt: "User Experience",
        projectTag: ["3D", "Game"],
        projectYear: 2024,
        projectContext: "The Tetris Room was realized as part of a student research project and is part of a virtual exhibition at the Faculty of Design Mannheim.",
        projectPeople: ["Teresa Hoffmann", "Sophie Humbert"],
        projectLink: "",
        projectDescription: "The Tetris Room is a virtual exhibition on the classic Tetris with interactive elements."
    },
    {
        projectPage: "projects/deepblue.html",
        projectTitle: "Deep blue",
        projectCoverimage: "img/sh-deep-blue-mushroom-coverbild-800.webp",
        alt: "User Experience",
        projectTag: ["3D", "Motion"],
        projectYear: 2022,
        projectContext: "The animation was created in the course Visualization with 3D at the Faculty of Design Mannheim.",
        projectPeople: ["Sophie Humbert"],
        projectLink: "",
        projectDescription: "“deep blue” is an animation created with the 3D software Blender."
    },
    {
        projectPage: "projects/overheardcatastrophe.html",
        projectTitle: "Overheard catastrophe",
        projectCoverimage: "img/sh-unterwasserlaerm-coverbild-800.webp",
        alt: "User Experience",
        projectTag: ["Installation", "Data Vis"],
        projectYear: 2023,
        projectContext: "The work was created in the winter semester 22/23 in the course Communication in Space at the Faculty of Design Mannheim.",
        projectPeople: ["Sophie Humbert"],
        projectLink: "",
        projectDescription: "A concept for an installation to raise awareness of the issue of underwater noise."
    }
];


const experienceEntries = [
    {
        experienceTag: "Graduation",
        experienceYear: 2024,
        experienceLink: "",
        experienceDescription: "Bachelor of Arts Communication Design at the Faculty of Design Mannheim University of Applied Sciences"
    },
    {
        experienceTag: "Publication",
        experienceYear: 2024,
        experienceLink: "https://diglib.eg.org/items/fc058e21-331d-45bf-b00b-35c58487e1af",
        experienceDescription: "Embedded temporal data visualizations in an urban environment for casual exploration"
    },
    {
        experienceTag: "Job position",
        experienceYear: 2024,
        experienceLink: "",
        experienceDescription: "Student assistant in design at the Human Data Interaction Lab at Mannheim University of Applied Sciences"
    },
    {
        experienceTag: "Internship",
        experienceYear: 2024,
        experienceLink: "",
        experienceDescription: "Internship as UX Designer at sovanta AG in Heidelberg"
    },
    {
        experienceTag: "Job position",
        experienceYear: 2023,
        experienceLink: "",
        experienceDescription: "Student assistant in design at the Human Data Interaction Lab at Mannheim University of Applied Sciences"
    },
    {
        experienceTag: "Event",
        experienceYear: 2022,
        experienceLink: "",
        experienceDescription: "Captcha Design Festival at the Faculty of Design Mannheim"
    },
    {
        experienceTag: "Job position",
        experienceYear: 2022,
        experienceLink: "",
        experienceDescription: "Working student in sales at Markthaus Mannheim gGmbH"
    }
];







document.addEventListener('DOMContentLoaded', function () {
    if (document.body.id === 'project-details-page') {
        // ID aus der URL abrufen
        const params = new URLSearchParams(window.location.search);
        const entryId = parseInt(params.get('id'));  // Konvertiert in eine Zahl

        // Den entsprechenden Eintrag finden
        const entry = projectsEntries.find(item => item.id === entryId);

        console.log(params);
        console.log(entryId);
        console.log(entry);

        // Wenn Eintrag existiert, Inhalt in den HTML-Code einfügen
        if (entry) {
            const detailContainer = document.getElementById('portfolio-detail');

            let tagsHTML = '<ul class="project-tags">';
            entry.projectTag.forEach(tag => {
                tagsHTML += `<li class="tag">${tag}</li>`;
            });
            tagsHTML += '</ul>';

            detailContainer.innerHTML = `
        <p>(${entry.projectTitle})</p>
        ${tagsHTML}
        <p class="project-year">(${entry.projectYear})</p>
        <p class="description">${entry.projectDescription}</p>
        
    `;
        } else {
            // Fallback, falls keine Eintrags-ID gefunden wird
            detailContainer.innerHTML = `<p>Portfolio-Eintrag nicht gefunden.</p>`;
        }

    } else if (document.body.id === 'index-page') {
        // Funktion nur für die Startseite
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
                <a href="${entry.projectPage}?id=${entry.id}">
                    <img class="project-coverimage" src="${entry.projectCoverimage}" alt="${entry.alt}">
                    ${tagsHTML}
                    <p class="project-year">(${entry.projectYear})</p>
                    <p class="description">${entry.projectDescription}</p>
                </a>
           
        `;

            // Den Eintrag in das Portfolio-Div einfügen
            projectsContainer.appendChild(entryDiv);
        });





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


    }

});
