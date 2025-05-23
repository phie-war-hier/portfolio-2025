
function changeLang() {
    console.log("Deutsch");
}


window.addEventListener("load", function () {
    // Scrollt das Dokument vor dem Laden der neuen Seite nach oben
    window.scrollTo({
        top: 0,
        behavior: 'smooth',
    });
});

var path;

function getPath() {
    const url = new URL(window.location.href);
    const pathSegments = url.pathname.split("/");  // Teilt den Pfad in Segmente
    path = pathSegments[pathSegments.length - 2];  // Nimmt das vorletzte Segment, z. B. "123"
    console.log(path);
}


function checkUrl() {
    const hash = window.location.hash;
    const id = hash.replace("#", "");

    if (id === "show") {
        console.log(id);
        layoutShow();
        document.getElementById("index-page").classList.add("no-scroll");
    } else if (id === "projects") {
        console.log(id);
        layoutProjects();
        document.getElementById("index-page").classList.remove("no-scroll");
    } else if (id === "experience") {
        console.log(id);
        layoutExperience();
        document.getElementById("index-page").classList.add("no-scroll");
    } else {
        console.log(id);
        layoutShow();
        document.getElementById("index-page").classList.add("no-scroll");
    }
}




function layoutShow() {
    const navContainerTop = document.querySelector('.nav-container-top');
    navContainerTop.innerHTML = `
                                    <div onclick="navToShowreel()" class="nav-element top active">
                                        <h4>Sophie Humbert</h4>
                                        <div class="socials">
                                            <a target="_blank" href="mailto:sophie-humbert@posteo.de"><img src="icon/mail.svg"></a>
                                            <a target="_blank" href="https://www.behance.net/sophiehumbert1"><img src="icon/behance.svg"></a>
                                            <a target="_blank" href="https://github.com/phie-war-hier"><img src="icon/github.svg"></a>
                                        </div>
                                    </div>
                                `;

    document.getElementById('show').style.display = "block";
    document.getElementById('projects').style.display = "none";
    document.getElementById('experience').style.display = "none";

    const navContainerBottom = document.querySelector('.nav-container-bottom');
    navContainerBottom.innerHTML = `
                                        <div onclick="navToProjects()" class="nav-element bottom">Projects</div>
                                        <div onclick="navToExperience()" class="nav-element bottom">Experience</div>
                                    `;


}

function layoutProjects() {
    const navContainerTop = document.querySelector('.nav-container-top');
    navContainerTop.innerHTML = `
                                    <div onclick="navToShowreel()" class="nav-element top">
                                        <h4>Sophie Humbert</h4>
                                        <div class="socials">
                                            <a target="_blank" href="mailto:sophie-humbert@posteo.de"><img src="icon/mail.svg"></a>
                                            <a target="_blank" href="https://www.behance.net/sophiehumbert1"><img src="icon/behance.svg"></a>
                                            <a target="_blank" href="https://github.com/phie-war-hier"><img src="icon/github.svg"></a>
                                        </div>
                                    </div>
                                    <div onclick="navToProjects()" class="nav-element top active">Projects</div>`;

    document.getElementById('show').style.display = "none";
    document.getElementById('projects').style.display = "flex";
    document.getElementById('experience').style.display = "none";

    const navContainerBottom = document.querySelector('.nav-container-bottom');
    navContainerBottom.innerHTML = `
                                        <div onclick="navToExperience()" class="nav-element bottom">Experience</div>
                                    `;


}

function layoutProjectDetails() {
    const navContainerTop = document.querySelector('.nav-container-top');
    navContainerTop.innerHTML = `
                                    <div class="nav-element top">
                                        <h4 onclick="navToShowreel()">Sophie Humbert</h4>
                                        <div class="socials">
                                            <a target="_blank" href="mailto:sophie-humbert@posteo.de"><img src="../icon/mail.svg"></a>
                                            <a target="_blank" href="https://www.behance.net/sophiehumbert1"><img src="../icon/behance.svg"></a>
                                            <a target="_blank" href="https://github.com/phie-war-hier"><img src="../icon/github.svg"></a>
                                        </div>
                                    </div>
                                `;

    const navContainerBottom = document.querySelector('.nav-container-bottom');
    navContainerBottom.innerHTML = `
                                        <div onclick="navToExperience()" class="nav-element bottom">Experience</div>
                                    `;
}


function layoutExperience() {
    const navContainerTop = document.querySelector('.nav-container-top');
    navContainerTop.innerHTML = `
                                    <div onclick="navToShowreel()" class="nav-element top">
                                        <h4>Sophie Humbert</h4>
                                        <div class="socials">
                                            <a target="_blank" href="mailto:sophie-humbert@posteo.de"><img src="icon/mail.svg"></a>
                                            <a target="_blank" href="https://www.behance.net/sophiehumbert1"><img src="icon/behance.svg"></a>
                                            <a target="_blank" href="https://github.com/phie-war-hier"><img src="icon/github.svg"></a>
                                        </div>
                                    </div>
                                    <div onclick="navToProjects()" class="nav-element top">Projects</div>
                                    <div onclick="navToExperience()" class="nav-element top active">Experience</div>
                                `;

    document.getElementById('show').style.display = "none";
    document.getElementById('projects').style.display = "none";
    document.getElementById('experience').style.display = "flex";


    const navContainerBottom = document.querySelector('.nav-container-bottom');
    navContainerBottom.innerHTML = '';
}


function navToShowreel() {

    // Video ausführen
    updateVideoSource();
    
    getPath();
    if (path === "projects" || path === "experience") {
        window.location.href = '../index.html#show';
    } else {
        window.location.href = 'index.html#show';
    }
    checkUrl();
    window.scrollTo({
        top: 0,
        behavior: 'smooth',
    });
}

function navToProjects() {
    const video = document.getElementById("responsiveVideo");
    if (video) {
        video.muted = true;
    }

    getPath();
    if (path === "projects" || path === "experience") {
        window.location.href = '../index.html#projects';
    } else {
        window.location.href = 'index.html#projects';
    }
    checkUrl();
    window.scrollTo({
        top: 0,
        behavior: 'smooth',
    });
}

function navToExperience() {
      const video = document.getElementById("responsiveVideo");
    if (video) {
        video.muted = true;
    }

    getPath();
    if (path === "projects" || path === "experience") {
        window.location.href = '../index.html#experience';
    } else {
        window.location.href = 'index.html#experience';
    }
    checkUrl()
    window.scrollTo({
        top: 0,
        behavior: 'smooth',
    });
}










const projectsEntries = [
    {
        id: 1,
        projectPage: "projects/smartroots.html",
        projectTitle: "sMArt roots – Dashboard",
        projectCoverimage: "img/hdil-smartroots-coverbild-800.webp",
        alt: "User Experience",
        projectTag: ["User Experience", "Interaction"],
        projectYear: 2023,
        projectContext: "sMArt roots is an initiative of the Smart City Lab of the City of Mannheim and the Human Data Interaction Lab (HDIL).",
        projectClient: "Smart City Mannheim",
        projectPeople: [" Till Nagel", " Christoph Huber", " Sophie Humbert"],
        projectLink: "https://www.hdilab.org/projects/smart-roots/",
        projectLinkText: "Project sMArt roots at the HDIL",
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
        projectClient: "",
        projectPeople: ["Till Nagel", " Christoph Huber", " Ekkehard Petzold", " Sophie Humbert"],
        projectLink: "https://www.hdilab.org/projects/ar-dxp/",
        projectLinkText: "Project AR DXP at the HDIL",
        projectDescription: "The AR DXP at HDIL is a research work on embedded temporal data visualizations in an urban environment."
    },
    {
        id: 3,
        projectPage: "projects/irrlicht.html",
        projectTitle: "Irrlicht",
        projectCoverimage: "img/sh-irrlicht-coverbild-800.webp",
        alt: "User Experience",
        projectTag: ["Interaction", "Data Vis", "Installation"],
        projectYear: 2024,
        projectContext: " Irrlicht was created in 2024 as a bachelor's thesis supervised by Prof. Hartmut Wöhlbier and Prof. Dr. Till Nagel at the Faculty of Design Mannheim.",
        projectClient: "",
        projectPeople: ["Sophie Humbert"],
        projectLink: "",
        projectLinkText: "",
        projectDescription: "Irrlicht - A data-supported, interactive and immersive installation to raise awareness of the issue of light pollution."
    },
    {
        id: 4,
        projectPage: "projects/rocketdeployer.html",
        projectTitle: "Rocket Deployer",
        projectCoverimage: "img/sh-rocketdeployer-coverbild-800.webp",
        alt: "User Experience",
        projectTag: ["Interaction", "User Experience"],
        projectYear: 2023,
        projectContext: "The Rocket Deployer was developed in cooperation with a company in the semester development project at Mannheim University of Applied Sciences.",
        projectClient: "",
        projectPeople: ["Design: Sophie Humbert", " Eddi Bludau", " Computer Science: Lauritz Fuchs", " Dominik Koschik", " Yan Wittmann", " Julian Komarek", " Jonas Fügen"],
        projectLink: "",
        projectLinkText: "",
        projectDescription: "The Rocket Deployer is a physical and digital web app builder that allows visitors to build an app in SAP BTP at trade fairs."
    },
    {
        id: 5,
        projectPage: "projects/planta.html",
        projectTitle: "planta",
        projectCoverimage: "img/sh-planta-coverbild-800.webp",
        alt: "User Experience",
        projectTag: ["Interaction", "Installation"],
        projectYear: 2022,
        projectContext: "planta was designed as a group project in the Interactive Media course at the Faculty of Design Mannheim. The installation was shown in the exhibition Captcha 2022 at the Mannheimer Kunstverein.",
        projectClient: "",
        projectPeople: ["Paco Gutiérrez Hardt", " Teresa Hoffmann", " Sophie Humbert"],
        projectLink: "",
        projectLinkText: "",
        projectDescription: "planta is an interactive installation that makes it possible to create a playful synergy between nature and technology."
    },
    {
        id: 6,
        projectPage: "projects/marbalance.html",
        projectTitle: "Marbalance",
        projectCoverimage: "img/sh-marbalance-coverbild-800.webp",
        alt: "User Experience",
        projectTag: ["Interaction", "Game"],
        projectYear: 2023,
        projectContext: "The game was developed as a group project in the “Games Night” course at the Faculty of Design in Mannheim.",
        projectClient: "",
        projectPeople: ["Paco Gutiérrez Hardt (Design)", " Teresa Hoffmann (Design)", " Sophie Humbert (Design)", " Christian Fagherazzi (Computer science)"],
        projectLink: "",
        projectLinkText: "",
        projectDescription: "Marbalance is an interactive game in which a player has to avoid enemies with the help of a balancing board."
    },
    {
        id: 7,
        projectPage: "projects/tetrisroom.html",
        projectTitle: "Tetris Room",
        projectCoverimage: "img/sh-tetrisroom-coverbild-800.webp",
        alt: "User Experience",
        projectTag: ["3D", "Game"],
        projectYear: 2024,
        projectContext: "The Tetris Room was realized as a student research project and is part of the Virtual Lab project at the Faculty of Design Mannheim.",
        projectClient: "",
        projectPeople: ["Sophie Humbert", " Teresa Hoffmann"],
        projectLink: "",
        projectLinkText: "",
        projectDescription: "The Tetris Room is a virtual exhibition on the classic Tetris with interactive elements."
    },
    {
        id: 8,
        projectPage: "projects/deepblue.html",
        projectTitle: "Deep blue",
        projectCoverimage: "img/sh-deep-blue-mushroom-coverbild-800.webp",
        alt: "User Experience",
        projectTag: ["3D", "Motion"],
        projectYear: 2022,
        projectContext: "The animation was created in the course Visualization with 3D at the Faculty of Design Mannheim.",
        projectClient: "",
        projectPeople: ["Sophie Humbert"],
        projectLink: "",
        projectLinkText: "",
        projectDescription: "“deep blue” is an animation created with the 3D software Blender."
    },
    {
        id: 9,
        projectPage: "projects/overheardcatastrophe.html",
        projectTitle: "Overheard catastrophe",
        projectCoverimage: "img/sh-unterwasserlaerm-coverbild-800.webp",
        alt: "User Experience",
        projectTag: ["Installation", "Data Vis"],
        projectYear: 2023,
        projectContext: "The work was created in the winter semester 22/23 in the course Communication in Space at the Faculty of Design Mannheim.",
        projectClient: "",
        projectPeople: ["Sophie Humbert"],
        projectLink: "",
        projectLinkText: "",
        projectDescription: "A concept for an installation to raise awareness of the issue of underwater noise."
    },
    {
        id: 10,
        projectPage: "projects/captchafestival.html",
        projectTitle: "Captcha Design Festival",
        projectCoverimage: "img/at-captchafestival-coverbild-800.webp",
        alt: "Captcha Design Festial",
        projectTag: ["Event", "Exhibition"],
        projectYear: 2022,
        projectContext: "Captcha Design Festival is organized by students of the University of Applied Sciences Mannheim.",
        projectClient: "",
        projectPeople: ["Michelle Michewicz, Julia Strauch, Lena Rass, Lara Tottewitz, Ronja Freundt, Moritz Schwall, Daniel Klose, Sophie Humbert"],
        projectLink: "https://www.captcha-mannheim.de/",
        projectLinkText: "Captcha Design Festival website",
        projectDescription: "Captcha is a design festival organized by students of the university of applied sciences mannheim."
    },
    {
        id: 11,
        projectPage: "projects/technoarena.html",
        projectTitle: "TECHNOarena",
        projectCoverimage: "img/sh-technoarena-3dmodell-uebersichtarena-begrueßungslicht-coverbild-800.webp",
        alt: "TECHNOarena",
        projectTag: ["Installation", "Exhibition"],
        projectYear: 2025,
        projectContext: "The design concept of the TECHNOarena was created as a result of my freelance work at the TECHNOseum Mannheim.",
        projectClient: "TECHNOseum Mannheim",
        projectPeople: ["Sophie Humbert (Design), Conni Robe (Animation Illustrations), Heike Morath (TECHNOseum Graphic Design), Ulrich Plaputta (TECHNOseum Graphic Design), Anna Tasja Kammholz (TECHNOseum Project Lead), Eva Gramlich (TECHNOseum Exhibition), Benjamin Otto (TECHNOseum Exhibition)"],
        projectLink: "https://www.technoseum.de/",
        projectLinkText: "Technoseum website",
        projectDescription: "The design concept of the TECHNOarena reflects the atmosphere of the future and gives each person the freedom to imagine. What will the world look like in the future?"
    }
];


const experienceEntries = [
    {
        experienceTag: "Graduation",
        experienceYear: 2024,
        experienceLink: "",
        experienceLinkText: "",
        experienceDescription: "Bachelor of Arts Communication Design at the Faculty of Design Mannheim University of Applied Sciences"
    },
    {
        experienceTag: "Publication",
        experienceYear: 2024,
        experienceLink: "https://diglib.eg.org/items/fc058e21-331d-45bf-b00b-35c58487e1af",
        experienceLinkText: "",
        experienceDescription: "Embedded temporal data visualizations in an urban environment for casual exploration"
    },
    {
        experienceTag: "Job position",
        experienceYear: 2024,
        experienceLink: "",
        experienceLinkText: "",
        experienceDescription: "Student assistant in design at the Human Data Interaction Lab at Mannheim University of Applied Sciences"
    },
    {
        experienceTag: "Internship",
        experienceYear: 2024,
        experienceLink: "",
        experienceLinkText: "",
        experienceDescription: "Internship as UX Designer at sovanta AG in Heidelberg"
    },
    {
        experienceTag: "Job position",
        experienceYear: 2023,
        experienceLink: "",
        experienceLinkText: "",
        experienceDescription: "Student assistant in design at the Human Data Interaction Lab at Mannheim University of Applied Sciences"
    },
    {
        experienceTag: "Event",
        experienceYear: 2022,
        experienceLink: "",
        experienceLinkText: "",
        experienceDescription: "Captcha Design Festival at the Faculty of Design Mannheim"
    },
    {
        experienceTag: "Job position",
        experienceYear: 2022,
        experienceLink: "",
        experienceLinkText: "",
        experienceDescription: "Working student in sales at Markthaus Mannheim gGmbH"
    },
    {
        experienceTag: "Internship",
        experienceYear: 2019,
        experienceLink: "",
        experienceLinkText: "",
        experienceDescription: "Internship at Mark Lotse Landau"
    },
    {
        experienceTag: "Freelancing",
        experienceYear: 2025,
        experienceLink: "",
        experienceLinkText: "",
        experienceDescription: "I am working as a freelancer since the beginning of 2025 for different clients"
    }
];


projectsEntries.sort((a, b) => b.projectYear - a.projectYear);
experienceEntries.sort((a, b) => b.experienceYear - a.experienceYear);

// Funktion zum Anzeigen aller Einträge
function showAllEntries() {
    const projectsContainer = document.querySelector('.projects-container');
    projectsContainer.innerHTML = ""; // Container leeren

    projectsEntries.forEach(entry => {
        // Ein neues Div für jeden Eintrag erstellen
        const entryDiv = document.createElement('div');
        entryDiv.classList.add('projects-element');

        // Tags 
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
            <p class="description">${entry.projectDescription}</p>
        </a>
   
`;

        // Den Eintrag in das Portfolio-Div einfügen
        projectsContainer.appendChild(entryDiv);
    });
}

// Funktion zum Filtern und Anzeigen der gefilterten Einträge
function showFilteredEntries(tag) {
    const filteredEntries = projectsEntries.filter(entry => entry.projectTag.includes(tag));
    projectsContainer = document.querySelector(".projects-container");

    projectsContainer.innerHTML = ""; // Container leeren

    filteredEntries.forEach(entry => {
        entryDiv = document.createElement("div");
        entryDiv.classList.add('projects-element');

        // Tags 
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
            <p class="description">${entry.projectDescription}</p>
        </a>
   
`;


        projectsContainer.appendChild(entryDiv);
    });
}



document.addEventListener('DOMContentLoaded', function () {

    if (document.body.id === 'project-details-page') {
        getPath();
        if (path === "projects") {
            layoutProjectDetails();
        }


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
            const detailTitle = document.getElementById('project-detail-header')

            detailTitle.innerHTML = `
                    <h4 class="project-title">&nbsp;/&nbsp;${entry.projectTitle}</h4>      
            `;
        }


        if (entry) {
            const detailContainer = document.getElementById('project-detail-meta');

            let tagsHTML = '<ul class="project-tags">';
            entry.projectTag.forEach(tag => {
                tagsHTML += `<li class="tag">${tag}</li>`;
            });
            tagsHTML += '</ul>';

            detailContainer.innerHTML = `
                    <div class="description details-border"><p>Tags</p>${tagsHTML}</div>
                    <div class="project-year details-border"><p>Year</p> <p>${entry.projectYear}</p></div>
                    ${entry.projectClient ? `<div class="description details-border"><p>Client</p> <p>${entry.projectClient}</p></div>` : ""}
                    <div class="description details-border"><p>Context</p> <p>${entry.projectContext}</p></div>
                    <div class="description details-border"><p>People   </p> <p>${entry.projectPeople}</p></div>            
            `;

        } else {
            // Fallback, falls keine Eintrags-ID gefunden wird
            detailContainer.innerHTML = `<p>Portfolio-Eintrag nicht gefunden.</p>`;
        }

    } else if (document.body.id === 'index-page') {

        // Beim Laden der Seite ausführen
        window.addEventListener("load", updateVideoSource);

        // Optional: auch bei Fenstergrößenänderung
        window.addEventListener("resize", updateVideoSource);
        
        // Funktion nur für die Startseite
        //const videoLand = document.getElementById("video-landscape");
        //videoLand.play().catch(error => {
         //   console.error("Autoplay-Fehler: ", error);
        //});

        //const videoPort = document.getElementById("video-portrait");
        //videoPort.play().catch(error => {
         //   console.error("Autoplay-Fehler: ", error);
        //});

        checkUrl();
        showAllEntries();


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
             ${entry.experienceLink ? `<p class="description"><a target="_blank" href="${entry.experienceLink}">Publication</a></p>` : ""}
        `;

            // Den Eintrag in das Portfolio-Div einfügen
            experienceContainer.appendChild(entryDiv);
        });


    }

});





function updateVideoSource() {
    const video = document.getElementById("responsiveVideo");
    const source = document.getElementById("videoSource");
    const width = window.innerWidth;

    let newSrc = "";

    if (width >= 700) {
        newSrc = "img/2025-05-12-ShowreelPortfolio-Querformat-Klein.mov";
    } else {
        newSrc = "img/2025-05-12-ShowreelPortfolio-Hochformat-Klein.mov";
    } 

    // Nur neu laden, wenn sich die Quelle geändert hat
    if (source.getAttribute("src") !== newSrc) {
        source.setAttribute("src", newSrc);
        video.load();  // lädt neue Quelle
        video.play();  // spielt automatisch ab (vorausgesetzt autoplay ist erlaubt)
    } 

    const unmutebutton = document.getElementById("unmuteButton");
    const unmuteIcon = document.getElementById("unmuteIcon");

    unmuteButton.addEventListener("click", function() {
    // Schaltet den Mute-Status um
    video.muted = !video.muted;

    // Wechselt das Icon je nach Mute-Status
    if (video.muted) {
        unmuteIcon.src = "icon/sound-off.svg";  
        unmuteIcon.alt = "Mute Icon";
    } else {
        unmuteIcon.src = "icon/sound-on.svg";  
        unmuteIcon.alt = "Unmute Icon";
    }
    });
}
