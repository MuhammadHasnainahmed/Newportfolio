


// import { createClient } from '@supabase/supabase-js'
const supabaseUrl = 'https://xwwowgklxvfmcjzdnhaq.supabase.co'
const supabaseKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Inh3d293Z2tseHZmbWNqemRuaGFxIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NTM1NDk4MzUsImV4cCI6MjA2OTEyNTgzNX0.X3gOUHHTcB5I1x9iZy5twify2bjY2Re_YMeR6veIUpQ'
const client = supabase.createClient(supabaseUrl, supabaseKey)

console.log(client);





// --------------project work --------------------

let landingprojects = [
    {
        image: "https://placehold.co/600x400/6366f1/ffffff?text=Tailwind+Project",
        title: "Tailwind CSS Project1",
        description:"A modern website built with Tailwind CSS featuring responsive design and smooth animations.",
        projecttech:{
            1:"HTML",
            2:"CSS",
            3:"Tailwind CSS"
        },
        projectlinks:{
            live:"https://example.com/tailwind-project",
            github:"https://github.com/yourusername/tailwind-project"
        }
    },

    {
        image: "https://placehold.co/600x400/6366f1/ffffff?text=Tailwind+Project",
        title: "Tailwind CSS Project2",
        description:"A modern website built with Tailwind CSS featuring responsive design and smooth animations.",
        projecttech:{
            1:"HTML",
            2:"CSS",
            3:"Tailwind CSS"
        },
        projectlinks:{
            live:"https://example.com/tailwind-project",
            github:"https://github.com/yourusername/tailwind-project"
        }
    },

    {
        image: "https://placehold.co/600x400/6366f1/ffffff?text=Tailwind+Project",
        title: "Tailwind CSS Project3",
        description:"A modern website built with Tailwind CSS featuring responsive design and smooth animations.",
        projecttech:{
            1:"HTML",
            2:"CSS",
            3:"Tailwind CSS"
        },
        projectlinks:{
            live:"https://example.com/tailwind-project",
            github:"https://github.com/yourusername/tailwind-project"
        }
    },
    

    {
        image: "https://placehold.co/600x400/6366f1/ffffff?text=Tailwind+Project",
        title: "Tailwind CSS Project4",
        description:"A modern website built with Tailwind CSS featuring responsive design and smooth animations.",
        projecttech:{
            1:"HTML",
            2:"CSS",
            3:"Tailwind CSS"
        },
        projectlinks:{
            live:"https://example.com/tailwind-project",
            github:"https://github.com/yourusername/tailwind-project"
        }
    },

    {
        image: "https://placehold.co/600x400/6366f1/ffffff?text=Tailwind+Project",
        title: "Tailwind CSS Project5",
        description:"A modern website built with Tailwind CSS featuring responsive design and smooth animations.",
        projecttech:{
            1:"HTML",
            2:"CSS",
            3:"Tailwind CSS"
        },
        projectlinks:{
            live:"https://example.com/tailwind-project",
            github:"https://github.com/yourusername/tailwind-project"
        }
    },

    {
        image: "https://placehold.co/600x400/6366f1/ffffff?text=Tailwind+Project",
        title: "Tailwind CSS Project6",
        description:"A modern website built with Tailwind CSS featuring responsive design and smooth animations.",
        projecttech:{
            1:"HTML",
            2:"CSS",
            3:"Tailwind CSS"
        },
        projectlinks:{
            live:"https://example.com/tailwind-project",
            github:"https://github.com/yourusername/tailwind-project"
        }
    },

    {
        image: "https://placehold.co/600x400/6366f1/ffffff?text=Tailwind+Project",
        title: "Tailwind CSS Project7",
        description:"A modern website built with Tailwind CSS featuring responsive design and smooth animations.",
        projecttech:{
            1:"HTML",
            2:"CSS",
            3:"Tailwind CSS"
        },
        projectlinks:{
            live:"https://example.com/tailwind-project",
            github:"https://github.com/yourusername/tailwind-project"
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

// -------------dark mode--------------------------

 const themeToggle = document.getElementById('theme-toggle');
        const themeIcon = themeToggle.querySelector('i');
        
        themeToggle.addEventListener('click', () => {
            document.body.classList.toggle('dark-mode');
            if (document.body.classList.contains('dark-mode')) {
                themeIcon.classList.remove('fa-moon');
                themeIcon.classList.add('fa-sun');
            } else {
                themeIcon.classList.remove('fa-sun');
                themeIcon.classList.add('fa-moon');
            }
        });