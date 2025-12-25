/**
 * Personal Website - Main JavaScript
 * Handles interactive features and enhancements
 */

// Wait for DOM to be fully loaded
document.addEventListener('DOMContentLoaded', function() {
    // Initialize all features
    initializeYear();
    initializeSmoothScroll();
    initializeActiveNavigation();
    initializeScrollAnimations();
});

/**
 * Set current year in footer
 */
function initializeYear() {
    const yearElement = document.getElementById('year');
    if (yearElement) {
        yearElement.textContent = new Date().getFullYear();
    }
}

/**
 * Smooth scroll for navigation links
 */
function initializeSmoothScroll() {
    const navLinks = document.querySelectorAll('a[href^="#"]');

    navLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();

            const targetId = this.getAttribute('href');
            const targetElement = document.querySelector(targetId);

            if (targetElement) {
                const headerOffset = 80; // Adjust based on your header height
                const elementPosition = targetElement.getBoundingClientRect().top;
                const offsetPosition = elementPosition + window.pageYOffset - headerOffset;

                window.scrollTo({
                    top: offsetPosition,
                    behavior: 'smooth'
                });
            }
        });
    });
}

/**
 * Highlight active navigation link based on scroll position
 */
function initializeActiveNavigation() {
    const sections = document.querySelectorAll('section[id]');
    const navLinks = document.querySelectorAll('.nav-link');

    function highlightNavigation() {
        const scrollPosition = window.scrollY + 100;

        sections.forEach(section => {
            const sectionTop = section.offsetTop;
            const sectionHeight = section.offsetHeight;
            const sectionId = section.getAttribute('id');

            if (scrollPosition >= sectionTop && scrollPosition < sectionTop + sectionHeight) {
                navLinks.forEach(link => {
                    link.classList.remove('active');
                    if (link.getAttribute('href') === `#${sectionId}`) {
                        link.classList.add('active');
                    }
                });
            }
        });
    }

    // Run on scroll with throttling
    let isThrottled = false;
    window.addEventListener('scroll', function() {
        if (!isThrottled) {
            highlightNavigation();
            isThrottled = true;
            setTimeout(() => {
                isThrottled = false;
            }, 100);
        }
    });

    // Run on page load
    highlightNavigation();
}

/**
 * Animate elements on scroll
 */
function initializeScrollAnimations() {
    // Check if Intersection Observer is supported
    if (!('IntersectionObserver' in window)) {
        return; // Skip animations in older browsers
    }

    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };

    const observer = new IntersectionObserver(function(entries) {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('animate-in');
                // Optional: Stop observing after animation
                observer.unobserve(entry.target);
            }
        });
    }, observerOptions);

    // Observe elements
    const animateElements = document.querySelectorAll(
        '.project-card, .product-card, .about-content, .section-title'
    );

    animateElements.forEach(element => {
        element.style.opacity = '0';
        element.style.transform = 'translateY(20px)';
        element.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
        observer.observe(element);
    });

    // Add CSS class for animation
    const style = document.createElement('style');
    style.textContent = `
        .animate-in {
            opacity: 1 !important;
            transform: translateY(0) !important;
        }
    `;
    document.head.appendChild(style);
}

/**
 * Optional: Add loading state
 */
window.addEventListener('load', function() {
    document.body.classList.add('loaded');
});

/**
 * Optional: Handle external links
 * Opens external links in new tab and adds security attributes
 */
function initializeExternalLinks() {
    const links = document.querySelectorAll('a[href^="http"]');

    links.forEach(link => {
        // Skip if already has target attribute
        if (!link.hasAttribute('target')) {
            link.setAttribute('target', '_blank');
            link.setAttribute('rel', 'noopener noreferrer');
        }
    });
}

// Initialize external links
initializeExternalLinks();

/**
 * Optional: Console message for curious visitors
 */
console.log('%c👋 Hey there!', 'font-size: 20px; font-weight: bold; color: #6366f1;');
console.log('%cInterested in the code? Check out the repository or reach out!', 'font-size: 14px; color: #475569;');
