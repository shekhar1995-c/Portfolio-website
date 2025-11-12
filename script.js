// ============================================
// Typing Effect
// ============================================
const typingText = document.querySelector('.typing-text');
const phrases = [
    'Embedded Developer',
    'Hardware Designer',
    'Tech Enthusiast',
    'Creative Thinker'
];

let phraseIndex = 0;
let charIndex = 0;
let isDeleting = false;
let typingSpeed = 100;

function typeEffect() {
    const currentPhrase = phrases[phraseIndex];
    
    if (isDeleting) {
        typingText.textContent = currentPhrase.substring(0, charIndex - 1);
        charIndex--;
        typingSpeed = 50;
    } else {
        typingText.textContent = currentPhrase.substring(0, charIndex + 1);
        charIndex++;
        typingSpeed = 100;
    }
    
    if (!isDeleting && charIndex === currentPhrase.length) {
        isDeleting = true;
        typingSpeed = 2000; // Pause at end
    } else if (isDeleting && charIndex === 0) {
        isDeleting = false;
        phraseIndex = (phraseIndex + 1) % phrases.length;
        typingSpeed = 500; // Pause before typing next phrase
    }
    
    setTimeout(typeEffect, typingSpeed);
}

// Start typing effect when page loads
window.addEventListener('load', () => {
    setTimeout(typeEffect, 1000);
});

// ============================================
// Smooth Scrolling for Navigation Links
// ============================================
const navLinks = document.querySelectorAll('.nav-link');

navLinks.forEach(link => {
    link.addEventListener('click', (e) => {
        e.preventDefault();
        const targetId = link.getAttribute('href');
        const targetSection = document.querySelector(targetId);
        
        if (targetSection) {
            const offsetTop = targetSection.offsetTop - 70;
            window.scrollTo({
                top: offsetTop,
                behavior: 'smooth'
            });
        }
        
        // Close mobile menu if open
        navMenu.classList.remove('active');
        hamburger.classList.remove('active');
    });
});

// ============================================
// Mobile Navigation Toggle
// ============================================
const hamburger = document.getElementById('hamburger');
const navMenu = document.getElementById('navMenu');

hamburger.addEventListener('click', () => {
    hamburger.classList.toggle('active');
    navMenu.classList.toggle('active');
});

// Close menu when clicking outside
document.addEventListener('click', (e) => {
    if (!hamburger.contains(e.target) && !navMenu.contains(e.target)) {
        hamburger.classList.remove('active');
        navMenu.classList.remove('active');
    }
});

// ============================================
// Navbar Background on Scroll
// ============================================
const navbar = document.getElementById('navbar');

window.addEventListener('scroll', () => {
    if (window.scrollY > 100) {
        navbar.classList.add('scrolled');
    } else {
        navbar.classList.remove('scrolled');
    }
});

// ============================================
// Scroll Animations - Fade In on Scroll
// ============================================
const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -100px 0px'
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('visible');
        }
    });
}, observerOptions);

// Add fade-in class to elements you want to animate
const animateElements = document.querySelectorAll(
    '.skill-card, .timeline-item, .project-card, .about-content, .contact-content'
);

animateElements.forEach(el => {
    el.classList.add('fade-in');
    observer.observe(el);
});

// ============================================
// Active Navigation Link on Scroll
// ============================================
const sections = document.querySelectorAll('section[id]');

function highlightNavigation() {
    const scrollY = window.pageYOffset;
    
    sections.forEach(section => {
        const sectionHeight = section.offsetHeight;
        const sectionTop = section.offsetTop - 100;
        const sectionId = section.getAttribute('id');
        
        if (scrollY > sectionTop && scrollY <= sectionTop + sectionHeight) {
            document.querySelectorAll('.nav-link').forEach(link => {
                link.classList.remove('active');
                if (link.getAttribute('href') === `#${sectionId}`) {
                    link.classList.add('active');
                }
            });
        }
    });
}

window.addEventListener('scroll', highlightNavigation);

// ============================================
// Contact Form Handling
// ============================================
const contactForm = document.getElementById('contactForm');
const formMessage = document.getElementById('formMessage');

contactForm.addEventListener('submit', async (e) => {
    e.preventDefault();
    
    const formData = {
        name: document.getElementById('name').value,
        email: document.getElementById('email').value,
        subject: document.getElementById('subject').value,
        message: document.getElementById('message').value
    };
    
    // Basic validation
    if (!formData.name || !formData.email || !formData.subject || !formData.message) {
        showMessage('Please fill in all fields', 'error');
        return;
    }
    
    if (!isValidEmail(formData.email)) {
        showMessage('Please enter a valid email address', 'error');
        return;
    }
    
    // Show success message (In a real application, you would send this to a server)
    // You can integrate with services like EmailJS, Formspree, or your own backend
    
    try {
        // Simulate form submission
        await simulateFormSubmission(formData);
        
        showMessage('Message sent successfully! I\'ll get back to you soon.', 'success');
        contactForm.reset();
    } catch (error) {
        showMessage('Something went wrong. Please try again later.', 'error');
    }
});

function isValidEmail(email) {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
}

function showMessage(message, type) {
    formMessage.textContent = message;
    formMessage.className = `form-message ${type}`;
    
    setTimeout(() => {
        formMessage.className = 'form-message';
    }, 5000);
}

function simulateFormSubmission(data) {
    return new Promise((resolve) => {
        console.log('Form Data:', data);
        // In a real application, you would send this data to your server or email service
        setTimeout(resolve, 1000);
    });
}

// ============================================
// Scroll to Top on Page Load
// ============================================
window.addEventListener('load', () => {
    window.scrollTo(0, 0);
});

// ============================================
// Add Particle Effect to Hero Section (Optional Enhancement)
// ============================================
function createParticles() {
    const hero = document.querySelector('.hero-background');
    const particleCount = 50;
    
    for (let i = 0; i < particleCount; i++) {
        const particle = document.createElement('div');
        particle.className = 'particle';
        particle.style.cssText = `
            position: absolute;
            width: ${Math.random() * 5 + 2}px;
            height: ${Math.random() * 5 + 2}px;
            background: rgba(255, 255, 255, 0.5);
            border-radius: 50%;
            left: ${Math.random() * 100}%;
            top: ${Math.random() * 100}%;
            animation: float ${Math.random() * 10 + 5}s infinite ease-in-out;
        `;
        hero.appendChild(particle);
    }
}

// Add particle float animation
const style = document.createElement('style');
style.textContent = `
    @keyframes float {
        0%, 100% {
            transform: translateY(0) translateX(0);
            opacity: 0;
        }
        50% {
            opacity: 1;
        }
        100% {
            transform: translateY(-100px) translateX(${Math.random() * 100 - 50}px);
        }
    }
`;
document.head.appendChild(style);

// Initialize particles
createParticles();

// ============================================
// Smooth Scroll Indicator
// ============================================
const scrollIndicator = document.querySelector('.scroll-indicator a');

scrollIndicator.addEventListener('click', (e) => {
    e.preventDefault();
    const aboutSection = document.getElementById('about');
    window.scrollTo({
        top: aboutSection.offsetTop - 70,
        behavior: 'smooth'
    });
});

// ============================================
// Project Card Hover Effect Enhancement
// ============================================
const projectCards = document.querySelectorAll('.project-card');

projectCards.forEach(card => {
    card.addEventListener('mouseenter', function() {
        this.style.transition = 'all 0.3s ease';
    });
});

// ============================================
// Skill Card Animation Counter (Optional)
// ============================================
const skillCards = document.querySelectorAll('.skill-card');

skillCards.forEach((card, index) => {
    card.style.animationDelay = `${index * 0.1}s`;
});

// ============================================
// Console Log Message
// ============================================
console.log('%c👋 Welcome to my portfolio!', 'font-size: 20px; color: #6366f1; font-weight: bold;');
console.log('%cInterested in the code? Check it out on GitHub!', 'font-size: 14px; color: #8b5cf6;');
