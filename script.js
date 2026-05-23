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
