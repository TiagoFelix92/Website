document.querySelectorAll('.menu-link').forEach(link => {
    link.addEventListener('click', function(event) {
        event.preventDefault();
        document.querySelectorAll('section').forEach(section => {
            section.classList.add('hidden');
        });
        document.querySelector(this.getAttribute('href')).classList.remove('hidden');
    });
});
document.getElementById('download-cv').addEventListener('click', function() {
    const link = document.createElement('a');
    link.href = 'TiagoCV.pdf'; 
    link.download = 'curriculo_tiago_goncalves.pdf'; 
    link.click();
    document.body.removeChild(link);
});

document.getElementById('read-more').addEventListener('click', function(event) {
    event.preventDefault();
    const aboutText = document.querySelector('.about-text');
    aboutText.classList.toggle('expanded');

    if (aboutText.classList.contains('expanded')) {
        this.textContent = 'Read Less';
    } else {
        this.textContent = 'Read More';
    }
});

document.addEventListener("DOMContentLoaded", function () {
    const scrollBtn = document.querySelector(".scroll-down");
    const sections = document.querySelectorAll("section");
    const contactSection = document.querySelector("#contact");

    if (scrollBtn) {
        scrollBtn.addEventListener("click", function (event) {
            event.preventDefault();

          
            let nextSection = null;

            for (let i = 0; i < sections.length; i++) {
                const rect = sections[i].getBoundingClientRect();
                if (rect.top > 0) {
                    nextSection = sections[i];
                    break;
                }
            }

            
            if (nextSection) {
                nextSection.scrollIntoView({ behavior: "smooth" });
            }
        });

        
        window.addEventListener("scroll", function () {
            const contactPosition = contactSection.getBoundingClientRect().top;
            if (contactPosition < window.innerHeight && contactPosition > 0) {
                scrollBtn.style.display = "none";
            } else {
                scrollBtn.style.display = "block";
            }
        });
    }
});

const menuIcon = document.querySelector("#menu-icon");
const navbar = document.querySelector(".navbar");

menuIcon.onclick = () => {
    menuIcon.classList.toggle("bx-x");
    navbar.classList.toggle("active");
}



