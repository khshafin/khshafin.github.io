// Smooth scrolling for navigation links
document.querySelectorAll('nav a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            const navHeight = document.querySelector('nav').offsetHeight;
            const targetPosition = target.offsetTop - navHeight - 20;
            
            window.scrollTo({
                top: targetPosition,
                behavior: 'smooth'
            });
        }
    });
});

// Highlight active section in navigation
const sections = document.querySelectorAll('section');
const navLinks = document.querySelectorAll('nav a');

function highlightNavigation() {
    let currentSection = '';
    
    // Get scroll position with some offset
    const scrollPosition = window.scrollY + 200;
    
    // Find which section we're currently viewing
    sections.forEach(section => {
        const sectionTop = section.offsetTop;
        const sectionBottom = sectionTop + section.offsetHeight;
        
        if (scrollPosition >= sectionTop && scrollPosition < sectionBottom) {
            currentSection = section.getAttribute('id');
        }
    });
    
    // Special handling for when at the very top
    if (window.scrollY < 100) {
        currentSection = 'about';
    }
    
    // Special handling for when at the very bottom
    const isAtBottom = (window.innerHeight + window.scrollY) >= document.documentElement.scrollHeight - 10;
    if (isAtBottom && sections.length > 0) {
        currentSection = sections[sections.length - 1].getAttribute('id');
    }
    
    // Update navigation highlights using CSS classes
    navLinks.forEach(link => {
        const linkSection = link.getAttribute('href').substring(1);
        if (linkSection === currentSection) {
            link.classList.add('active');
        } else {
            link.classList.remove('active');
        }
    });
}

window.addEventListener('scroll', highlightNavigation);
window.addEventListener('load', highlightNavigation);

// Update highlighting after smooth scroll animation completes
let scrollTimeout;
window.addEventListener('scroll', function() {
    clearTimeout(scrollTimeout);
    scrollTimeout = setTimeout(highlightNavigation, 50);
});
