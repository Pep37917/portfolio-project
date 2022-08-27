// Variables

const sections = document.querySelectorAll(".section");
const sectBtns = document.querySelector(".controls");
const sectBtn = document.querySelectorAll(".control");
const allSections =  document.querySelector(".main-content");
const theme = document.querySelector(".theme-btn");


function PageTransitions() {
    // Button click active class
    for (let i=0; i < sectBtn.length; i++) {
        sectBtn[i].addEventListener("click", function() {
            let currentBtn = document.querySelectorAll(".active-btn");
            console.log(currentBtn);
            currentBtn[0].classList.remove("active-btn");
            console.log(this);
            this.className += " active-btn"
        })
    }

    // Sections Active Class
    allSections.addEventListener("click", function(e) {
        const id = e.target.dataset.id;
        if (id) {
            // remove selected from the other buttons
            //sectBtn.forEach(function(btn) {
            //    btn.classList.remove("active")
            //})
            //e.target.classList.add("active")

            // hide other sections
            sections.forEach(function(section) {
                section.classList.remove('active')
            })

            const element = document.getElementById(id);
            element.classList.add("active")
        }
    })

    // Toggle color theme

    theme.addEventListener("click", function() {
        let element =  document.body;
        element.classList.toggle("light-mode")
        theme.classList.toggle("switch")
    })
}   

PageTransitions()