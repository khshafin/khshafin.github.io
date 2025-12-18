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
    const navHeight = document.querySelector('nav').offsetHeight;
    
    // Get the middle of the viewport for more accurate section detection
    const viewportMiddle = window.scrollY + window.innerHeight / 2;
    
    // Find which section the viewport middle is in
    sections.forEach(section => {
        const sectionTop = section.offsetTop - navHeight;
        const sectionBottom = sectionTop + section.offsetHeight;
        
        if (viewportMiddle >= sectionTop && viewportMiddle < sectionBottom) {
            currentSection = section.getAttribute('id');
        }
    });
    
    // Fallback: if still no section detected, find the closest one
    if (!currentSection && sections.length > 0) {
        let closestSection = sections[0];
        let closestDistance = Math.abs(sections[0].offsetTop - window.scrollY);
        
        sections.forEach(section => {
            const distance = Math.abs(section.offsetTop - window.scrollY);
            if (distance < closestDistance) {
                closestDistance = distance;
                closestSection = section;
            }
        });
        
        currentSection = closestSection.getAttribute('id');
    }
    
    // Update navigation highlights
    navLinks.forEach(link => {
        link.style.backgroundColor = '';
        link.style.borderBottomColor = 'transparent';
        
        if (link.getAttribute('href') === `#${currentSection}`) {
            link.style.backgroundColor = '#f0f0f0';
            link.style.borderBottomColor = '#002147';
        }
    });
}

window.addEventListener('scroll', highlightNavigation);
window.addEventListener('load', highlightNavigation);

// Also update highlighting after smooth scroll completes
document.querySelectorAll('nav a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        // Small delay to update after scroll animation
        setTimeout(highlightNavigation, 100);
        setTimeout(highlightNavigation, 500);
    });
});
