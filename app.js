


// import { createClient } from '@supabase/supabase-js'
const supabaseUrl = 'https://xwwowgklxvfmcjzdnhaq.supabase.co'
const supabaseKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Inh3d293Z2tseHZmbWNqemRuaGFxIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NTM1NDk4MzUsImV4cCI6MjA2OTEyNTgzNX0.X3gOUHHTcB5I1x9iZy5twify2bjY2Re_YMeR6veIUpQ'
const client = supabase.createClient(supabaseUrl, supabaseKey)

console.log(client);





// --------------project work --------------------

let landingprojects = [
    {
        image: "/parallax.png",
        title: "Parallax Scrolling Website",
        description:"A visually engaging parallax scrolling website showcasing modern web design techniques.",
        projecttech:{
            1:"HTML",
            2:"CSS",
           
        },
        projectlinks:{
            live:"https://past-lizards.surge.sh/",
            github:"https://github.com/MuhammadHasnainahmed/SMIT--assign-css-7"
        }
    },

    {
        image: "publishingcompany.png",
        title: "Publishing Company Website",
        description:"A small river named Duden flows by their place and supplies it with the necessary regelialia.",
        projecttech:{
            1:"HTML",
            2:"CSS",
            
        },
        projectlinks:{
            live:"https://muhammadhasnainahmed.github.io/SMIT--assign-css-5/",
            github:"https://github.com/MuhammadHasnainahmed/SMIT--assign-css-5"
        }
    },

    {
        image: "nitrocompany.png",
        title: "Nitro Company Website",
        description:"A responsive website for a tech company, highlighting services and portfolio with modern design.",
        projecttech:{
            1:"HTML",
            2:"CSS",
            3:"Bootstrap"
        },
        projectlinks:{
            live:"https://muhammadhasnainahmed.github.io/SMIT--assign-bootstap-1/",
            github:"https://github.com/MuhammadHasnainahmed/SMIT--assign-bootstap-1"
        }
    },
    

    {
        image: "todolist.png",
        title: "To-Do List App Basics",
        description:"A simple and intuitive to-do list application to help users manage their tasks effectively.",
        projecttech:{
            1:"HTML",
            2:"CSS",
            3:"JavaScript"
        },
        projectlinks:{
            live:"https://muhammadhasnainahmed.github.io/SMIT--assign-js-14-To-Do-List/",
            github:"https://github.com/MuhammadHasnainahmed/SMIT--assign-js-14-To-Do-List"
        }
    },

    {
        image: "studentmarksmanagenment.png",
        title: "Student Marks Management System",
        description:"A web application to manage and track student marks and performance efficiently.",
        projecttech:{
            1:"HTML",
            2:"CSS",
            3:"JavaScript"
        },
        projectlinks:{
            live:"https://muhammadhasnainahmed.github.io/SMIT--assign-js-15-Student-Marks-Management-System/",
            github:"https://github.com/MuhammadHasnainahmed/SMIT--assign-js-15-Student-Marks-Management-System"
        }
    },

    {
        image: "googleclassroom.png",
        title: "Google Classroom Clone With Local Storage",
        description:"A functional clone of Google Classroom with features like class creation, assignments, and announcements.",
        projecttech:{
            1:"HTML",
            2:"CSS",
            3:"JavaScript"
        },
        projectlinks:{
            live:"https://muhammadhasnainahmed.github.io/SMIT--assign-js-23-Google-ClassRoom/",
            github:"https://github.com/MuhammadHasnainahmed/SMIT--assign-js-23-Google-ClassRoom"
        }
    },

    {
        image: "boxshadow.png",
        title: "Box Shadow Generator",
        description:"A user-friendly tool for creating visually appealing box shadows with customizable options.",
        projecttech:{
            1:"HTML",
            2:"CSS",
            3:"JavaScript"
        },
        projectlinks:{
            live:"https://muhammadhasnainahmed.github.io/SMIT--assign-js-24-Box-Shadow-Generator/",
            github:"https://github.com/MuhammadHasnainahmed/SMIT--assign-js-24-Box-Shadow-Generator"
        }
    },



]


let remdomproject = landingprojects
 .sort(()=> Math.random() - 0.5)
    .slice(0,3);

;
    


let projectContainer = document.querySelector('.projects-grid');
if (projectContainer) {
    
    
    projectContainer.innerHTML = "";

remdomproject.forEach(remdomproject => {

    projectContainer.innerHTML += `
      
    <div class="project-card">
                    <div class="project-img">
                        <img src="${remdomproject.image}" alt="Tailwind CSS Project">
                    </div>
                    <div class="project-info">
                        <h3>${remdomproject.title}</h3>
                        <p>${remdomproject.description}</p>
                        <div class="project-tech">
                            <span>${remdomproject.projecttech[1]}</span>
                            <span>${remdomproject.projecttech[2]}</span>
                            <span>${remdomproject.projecttech[3]}</span>
                        </div>
                        <div class="project-links">
                            <a href="${remdomproject.projectlinks.live}" class="btn">Live Demo</a>
                            <a href="${remdomproject.projectlinks.github}" class="btn btn-outline">GitHub</a>
                        </div>
                    </div>
                </div>
    
    `
    

});
}


let allproject = document.querySelector('.allprojects-grid');

if (allproject) {
    
    landingprojects.forEach(allprojectshow => {
        allproject.innerHTML += `
    
    <div class="project-card">
                    <div class="project-img">
                        <img src="${allprojectshow.image}" alt="Tailwind CSS Project">
                    </div>
                    <div class="project-info">
                        <h3>${allprojectshow.title}</h3>
                        <p>${allprojectshow.description}</p>
                        <div class="project-tech">
                            <span>${allprojectshow.projecttech[1]}</span>
                            <span>${allprojectshow.projecttech[2]}</span>
                            <span>${allprojectshow.projecttech[3]}</span>
                        </div>
                        <div class="project-links">
                            <a href="${allprojectshow.projectlinks.live}" class="btn">Live Demo</a>
                            <a href="${allprojectshow.projectlinks.github}" class="btn btn-outline">GitHub</a>
                        </div>
                    </div>
                </div>
                
                `
                
            });
            
        }
// -------------skills--------------------------


let landingskills = [
    {
        icon: "fab fa-html5",
        name: "HTML5"

    },

    {
        icon: "fab fa-css3-alt",
        name: "CSS3"

    },

    {
        icon: "fab fa-js",
        name: "JavaScript"

    },

    {
        icon: "fab fa-react",
        name: "React"

    },

    {
        icon: "fas fa-code",
        name: "Next.js"

    },

    {
        icon: "fas fa-paint-brush",
        name: "Tailwind CSS"

    },

    {
        icon: "fas fa-database",
        name: "Supabase"

    },

    {
        icon: "fab fa-git-alt",
        name: "Git"

    },
]


let skillsContainer = document.querySelector('.skills-container');
if (skillsContainer) {
    
    landingskills.forEach(skill => {
        skillsContainer.innerHTML += `
    
    <div class="skill-item">
                    <div class="skill-icon">
                        <i class=" ${skill.icon}"></i>
                    </div>
                    <h3 class="skill-name">${skill.name}</h3>
                </div>

    `
});
 }




// -------------contact form--------------------------

let contactForm = document.getElementById('contactForm');
let contactName = document.getElementById('contactName');
let contactEmail = document.getElementById('contactEmail');
let contactMessage = document.getElementById('contactMessage');
if (contactForm) {
    contactForm.addEventListener('submit', async (e) => {
        e.preventDefault();
        
        let contactdata = {

             name : contactName.value,
             email : contactEmail.value,
             message : contactMessage.value
        }


        const { error } = await client
  .from('Contactform')
  .insert(contactdata)

  if (error) {
    console.log(error);
  } else {
    console.log('Form submitted successfully');
  }


        contactForm.reset();
        
        
    });

}

