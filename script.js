// Scroll-up button functionality
const scrollUpBtn = document.getElementById('scroll-up-btn');

// Show button when user scrolls down
window.addEventListener('scroll', () => {
    if (window.scrollY > 500) {
        scrollUpBtn.classList.add('show');
    } else {
        scrollUpBtn.classList.remove('show');
    }
});

// Scroll to top smoothly when button is clicked
scrollUpBtn.addEventListener('click', () => {
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    });
});

// Navbar color change based on section
const navbar = document.querySelector('.navbar');
const sections = document.querySelectorAll('section');
const darkSections = ['home', 'services', 'teams'];

window.addEventListener('scroll', () => {
    let isOverWhiteSection = false;
    let foundSection = false;

    sections.forEach(section => {
        const rect = section.getBoundingClientRect();
        const navbarHeight = navbar.offsetHeight;

        if (rect.top < navbarHeight && rect.bottom > 0) {
            foundSection = true;
            if (darkSections.includes(section.id)) {
                isOverWhiteSection = false;
            } else {
                isOverWhiteSection = true;
            }
        }
    });

    if (foundSection && isOverWhiteSection) {
        navbar.classList.add('white-section');
    } else {
        navbar.classList.remove('white-section');
    }
});
