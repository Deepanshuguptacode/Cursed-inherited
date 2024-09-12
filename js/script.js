// Initialize ScrollTrigger
gsap.registerPlugin(ScrollTrigger);

// Sections to Animate
const sections = document.querySelectorAll('.section');

// Loop through each section for animations
sections.forEach(function (section) {
    var heading = section.querySelector('h2');
    var paragraph = section.querySelector('p');
    var placeholder = section.querySelector('.image-placeholder');

    var timeline = gsap.timeline({
        scrollTrigger: {
            trigger: section,
            start: "top 75%", // When the top of the section is at 75% of the viewport height
            end: "bottom 25%", // When the bottom of the section is at 25% of the viewport height
            scrub: true // Smooth scroll effect
        }
    });

    // Animate heading (fade-in from left)
    timeline.from(heading, { opacity: 0, x: -100, duration: 1 });

    // Animate paragraph (fade-in from right)
    timeline.from(paragraph, { opacity: 0, x: 100, duration: 1 }, '-=0.8');

    // Parallax effect on image (image zoom in as user scrolls)
    timeline.from(placeholder, { opacity: 0, scale: 1.2, duration: 1.5 }, '-=1');
});

// Animate background movement based on scroll
gsap.to('.parallax', {
    backgroundPosition: "50% 100%",
    ease: "none",
    scrollTrigger: {
        trigger: '.parallax',
        scrub: true // Background moves as user scrolls
    }
});

// Optional: Add hover effect for image placeholders
const placeholders = document.querySelectorAll('.image-placeholder');
placeholders.forEach(function (placeholder) {
    placeholder.addEventListener('mouseenter', function() {
        gsap.to(placeholder, { scale: 1.05, opacity: 0.9, duration: 0.3 });
    });
    placeholder.addEventListener('mouseleave', function() {
        gsap.to(placeholder, { scale: 1, opacity: 1, duration: 0.3 });
    });
});
