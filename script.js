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



const EMAILJS_PUBLIC_KEY = "bEutguencKBSeYkOY";
const EMAILJS_SERVICE_ID = "service_hmqf53h";
const EMAILJS_TEMPLATE_ID = "template_q4rzafh";

emailjs.init(EMAILJS_PUBLIC_KEY);

function sendEmail() {
    const name = document.getElementById("sender-name").value.trim();
    const email = document.getElementById("sender-email").value.trim();
    const subject = document.getElementById("msg-subject").value.trim();
    const message = document.getElementById("msg-body").value.trim();
    const status = document.getElementById("form-status");
    const btn = document.getElementById("send-btn");
    const btnText = document.getElementById("btn-text");

    // Basic validation
    if (!name || !email || !subject || !message) {
        status.textContent = "Please fill in all fields.";
        status.style.color = "crimson";
        return;
    }

    // Loading state
    btn.disabled = true;
    btnText.textContent = "Sending...";
    status.textContent = "";

    const templateParams = {
        from_name: name,
        from_email: email,
        subject: subject,
        message: message,
    };

    emailjs.send(EMAILJS_SERVICE_ID, EMAILJS_TEMPLATE_ID, templateParams)
        .then(() => {
            status.textContent = "✅ Message sent successfully!";
            status.style.color = "green";
            // Reset form
            document.getElementById("sender-name").value = "";
            document.getElementById("sender-email").value = "";
            document.getElementById("msg-subject").value = "";
            document.getElementById("msg-body").value = "";
        })
        .catch((error) => {
            console.error("EmailJS Error:", error);
            status.textContent = "❌ Failed to send. Try again.";
            status.style.color = "crimson";
        })
        .finally(() => {
            btn.disabled = false;
            btnText.textContent = "Send Message";
        });
}