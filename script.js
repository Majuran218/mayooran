// Toggle icon navbar
let menuIcon = document.querySelector('#menu-icon');
let navbar = document.querySelector('.navbar');

menuIcon.onclick = () => {
    menuIcon.classList.toggle('fa-xmark');
    navbar.classList.toggle('active');
};

// Scroll section active link
let sections = document.querySelectorAll('section');
let navLinks = document.querySelectorAll('header nav a');

window.onscroll = () => {
    sections.forEach(sec => {
        let top = window.scrollY;
        let offset = sec.offsetTop - 150;
        let height = sec.offsetHeight;
        let id = sec.getAttribute('id');

        if (top >= offset && top < offset + height) {
            navLinks.forEach(link => {
                link.classList.remove('active');
                document.querySelector('header nav a[href*=' + id + ']').classList.add('active');
            });
        }
    });

    // Sticky navbar
    let header = document.querySelector('header');
    header.classList.toggle('sticky', window.scrollY > 100);

    // Close navbar when scrolling
    menuIcon.classList.remove('fa-xmark');
    navbar.classList.remove('active');
};

// Initialize ScrollReveal
ScrollReveal({
    distance: '80px',
    duration: 2000,
    delay: 200,
});

ScrollReveal().reveal('.home-content, .heading', { origin: 'top' });
ScrollReveal().reveal('.home-img, .services-container, .skills-bar, .portfolio-box, .contact', { origin: 'bottom' });
ScrollReveal().reveal('.home-content h1, .about-img', { origin: 'left' });
ScrollReveal().reveal('.home-content p, .about-content', { origin: 'right' });
ScrollReveal().reveal('.skills-box', { origin: 'bottom' });


/*================================================================type js =================================================================*/

const typed = new Typed('.multiple-text', {
    strings: ['Automation tester', 'API tester' , 'Web developer'],
    typeSpeed: 70,
    backSpeed: 70,
    backDelay: 1000,
    loop: true
});

// Download CV
document.querySelector('.btn').addEventListener('click', (e) => {
    if (e.target.textContent === 'Download CV') {
        e.preventDefault();
        window.location.href = 'https://drive.google.com/file/d/158Fx3dE-vpQOuM24gXtVkQzgWC0n92G-/view?usp=drive_link'; // Correct direct download link
    }
});

// Email functionality
document.querySelector('form').addEventListener('submit', (e) => {
    e.preventDefault();
    const name = document.querySelector('input[placeholder="Full Name"]').value;
    const email = document.querySelector('input[placeholder="Email Address"]').value;
    const subject = document.querySelector('input[placeholder="Email Subject"]').value;
    const message = document.querySelector('textarea').value;

    // Build the mailto link
    let mailtoLink = `mailto:mayooran19971127@gmail.com?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(`Name: ${name}\nEmail: ${email}\n\nMessage:\n${message}`)}`;

    // Open the default email client
    window.location.href = mailtoLink;
});

// Social media links (Replace with your actual links)


document.querySelector('.fa-linkedin-in').parentElement.href = 'https://www.linkedin.com/in/mayooran-thiruchchelvam/';
document.querySelector('.fa-github').parentElement.href = 'https://github.com/Majuran218/';

document.querySelector('.fa-facebook').parentElement.href = 'https://www.facebook.com/share/1FZiMZzG8k/';




