// Smooth scrolling for navigation links
document.addEventListener('DOMContentLoaded', function() {
    // Navigation smooth scrolling
    const navLinks = document.querySelectorAll('.nav-link');
    navLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            const href = this.getAttribute('href');
            if (href && href.startsWith('#')) {
                e.preventDefault();
                const targetSection = document.querySelector(href);
                if (targetSection) {
                    targetSection.scrollIntoView({
                        behavior: 'smooth',
                        block: 'start'
                    });
                }
            }
        });
    });

    // Mobile navigation toggle
    const navToggle = document.querySelector('.nav-toggle');
    const navMenu = document.querySelector('.nav-menu');
    
    if (navToggle && navMenu) {
        navToggle.addEventListener('click', function() {
            navMenu.classList.toggle('active');
            navToggle.classList.toggle('active');
        });
    }

    // Navbar glass effect on scroll
    const navbar = document.querySelector('.navbar');
    window.addEventListener('scroll', function() {
        if (window.scrollY > 50) {
            navbar.classList.add('scrolled');
        } else {
            navbar.classList.remove('scrolled');
        }
    });

    // Intersection Observer for animations
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };

    const observer = new IntersectionObserver(function(entries) {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = '1';
                entry.target.style.transform = 'translateY(0)';
            }
        });
    }, observerOptions);

    // Observe bento cards for animation
    const bentoCards = document.querySelectorAll('.bento-card');
    bentoCards.forEach((card, index) => {
        card.style.opacity = '0';
        card.style.transform = 'translateY(30px)';
        card.style.transition = `opacity 0.6s ease ${index * 0.1}s, transform 0.6s ease ${index * 0.1}s`;
        observer.observe(card);
    });

    // Observe about section elements
    const aboutElements = document.querySelectorAll('.about-text, .about-visual');
    aboutElements.forEach((element, index) => {
        element.style.opacity = '0';
        element.style.transform = 'translateY(30px)';
        element.style.transition = `opacity 0.6s ease ${index * 0.2}s, transform 0.6s ease ${index * 0.2}s`;
        observer.observe(element);
    });

    // Observe contact elements
    const contactElements = document.querySelectorAll('.contact-info, .contact-form');
    contactElements.forEach((element, index) => {
        element.style.opacity = '0';
        element.style.transform = 'translateY(30px)';
        element.style.transition = `opacity 0.6s ease ${index * 0.2}s, transform 0.6s ease ${index * 0.2}s`;
        observer.observe(element);
    });



    // Bento card hover effects
    bentoCards.forEach(card => {
        card.addEventListener('mouseenter', function() {
            this.style.transform = 'translateY(-10px) scale(1.02)';
        });

        card.addEventListener('mouseleave', function() {
            this.style.transform = 'translateY(0) scale(1)';
        });
    });

    // Form submission handling
    const contactForm = document.querySelector('.contact-form');
    if (contactForm) {
        contactForm.addEventListener('submit', function(e) {
            e.preventDefault();
            
            // Get form data
            const formData = new FormData(this);
            const name = this.querySelector('input[type="text"]').value;
            const email = this.querySelector('input[type="email"]').value;
            const message = this.querySelector('textarea').value;

            // Simple validation
            if (!name || !email || !message) {
                showNotification('Please fill in all fields', 'error');
                return;
            }

            if (!isValidEmail(email)) {
                showNotification('Please enter a valid email address', 'error');
                return;
            }

            // Simulate form submission
            showNotification('Message sent successfully!', 'success');
            this.reset();
        });
    }

    // Energy grid animation
    const energyCells = document.querySelectorAll('.energy-cell');
    energyCells.forEach((cell, index) => {
        cell.addEventListener('click', function() {
            this.style.transform = 'scale(1.2)';
            this.style.boxShadow = '0 0 30px var(--primary-green)';
            
            setTimeout(() => {
                this.style.transform = 'scale(1)';
                this.style.boxShadow = 'none';
            }, 300);
        });
    });

    // Tech grid interaction
    const techItems = document.querySelectorAll('.tech-item');
    techItems.forEach(item => {
        item.addEventListener('click', function() {
            this.style.transform = 'scale(1.1) rotate(45deg)';
            this.style.background = 'var(--gradient-secondary)';
            
            setTimeout(() => {
                this.style.transform = 'scale(1) rotate(0deg)';
                this.style.background = 'var(--gradient-primary)';
            }, 500);
        });
    });

    // Only run scroll-reveal animation if not on naabout.html
    if (!window.location.pathname.includes('naabout.html')) {
        const sections = document.querySelectorAll('section');
        sections.forEach(section => {
            // Skip hero sections to prevent logo animation
            if (section.classList.contains('hero')) {
                return;
            }
            
            const sectionObserver = new IntersectionObserver(function(entries) {
                entries.forEach(entry => {
                    if (entry.isIntersecting) {
                        entry.target.style.opacity = '1';
                        entry.target.style.transform = 'translateY(0)';
                    }
                });
            }, { threshold: 0.1 });

            section.style.opacity = '0';
            section.style.transform = 'translateY(50px)';
            section.style.transition = 'opacity 0.8s ease, transform 0.8s ease';
            sectionObserver.observe(section);
        });
    }

    // Battery animation enhancement
    const batteryLevel = document.querySelector('.battery-level');
    if (batteryLevel) {
        setInterval(() => {
            batteryLevel.style.width = Math.random() * 80 + 20 + '%';
        }, 3000);
    }

    // Leaf animation enhancement
    const leaves = document.querySelectorAll('.leaf');
    leaves.forEach((leaf, index) => {
        setInterval(() => {
            leaf.style.transform = `translateY(${Math.random() * 20 - 10}px) rotate(${Math.random() * 360}deg)`;
        }, 4000 + index * 1000);
    });

    // Chart animation enhancement
    const chartLines = document.querySelectorAll('.chart-line');
    chartLines.forEach((line, index) => {
        setInterval(() => {
            line.style.width = Math.random() * 100 + '%';
        }, 2000 + index * 500);
    });

    // Animated energy particles for About section
    const particlesCanvas = document.getElementById('energyParticles');
    if (particlesCanvas) {
        const ctx = particlesCanvas.getContext('2d');
        const canvasHeight = 500;
        const waveCount = 9;
        const dotsPerWave = 12;
        const amplitudes = Array.from({length: waveCount}, () => 30); // amplitude 30px for 60px wave height
        const frequencies = Array.from({length: waveCount}, () => 0.015 + Math.random() * 0.015);
        const speeds = Array.from({length: waveCount}, () => 0.7 + Math.random() * 2.5);
        // Evenly space waves vertically, centered in the container
        const yOffsets = Array.from({length: waveCount}, (_, i) =>
            (canvasHeight / (waveCount + 1)) * (i + 1)
        );
        const dotRadius = 7;
        const color = '#04fe01';
        // Each wave is an array of dots
        const waves = [];
        for (let w = 0; w < waveCount; w++) {
            const dots = [];
            const phaseOffset = Math.random() * Math.PI * 2; // random phase for each wave
            for (let i = 0; i < dotsPerWave; i++) {
                dots.push({
                    x: (i / dotsPerWave) * 600,
                    phase: (i / dotsPerWave) * Math.PI * 2 + phaseOffset
                });
            }
            waves.push(dots);
        }

        function animateParticles(time) {
            ctx.clearRect(0, 0, particlesCanvas.width, particlesCanvas.height);
            for (let w = 0; w < waveCount; w++) {
                const dots = waves[w];
                for (let i = 0; i < dotsPerWave; i++) {
                    let p = dots[i];
                    // Move dot to the right, loop back to left
                    p.x += speeds[w];
                    if (p.x > 600) p.x -= 600;
                    // Sine wave for y position
                    const y = amplitudes[w] * Math.sin((p.x * frequencies[w]) + time * 0.002 + p.phase) + yOffsets[w];
                    
                    // Calculate fade opacity based on x position
                    let opacity = 1;
                    const fadeWidth = 150; // Width of fade effect on each side
                    
                    if (p.x < fadeWidth) {
                        // Fade in from left edge
                        opacity = p.x / fadeWidth;
                    } else if (p.x > 600 - fadeWidth) {
                        // Fade out to right edge
                        opacity = (600 - p.x) / fadeWidth;
                    }
                    
                    // Draw dot with fade effect
                    ctx.beginPath();
                    ctx.arc(p.x, y, dotRadius, 0, Math.PI * 2);
                    ctx.fillStyle = `rgba(4, 254, 1, ${opacity})`;
                    ctx.shadowColor = `rgba(4, 254, 1, ${opacity * 0.8})`;
                    ctx.shadowBlur = 12 * opacity;
                    ctx.fill();
                    ctx.shadowBlur = 0;
                }
            }
            requestAnimationFrame(animateParticles);
        }
        animateParticles(0);
    }
});

// Utility functions
function isValidEmail(email) {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
}

function showNotification(message, type) {
    // Create notification element
    const notification = document.createElement('div');
    notification.className = `notification ${type}`;
    notification.textContent = message;
    
    // Style the notification
    notification.style.position = 'fixed';
    notification.style.top = '20px';
    notification.style.right = '20px';
    notification.style.padding = '15px 20px';
    notification.style.borderRadius = '8px';
    notification.style.color = 'white';
    notification.style.fontWeight = '600';
    notification.style.zIndex = '10000';
    notification.style.transform = 'translateX(100%)';
    notification.style.transition = 'transform 0.3s ease';
    
    if (type === 'success') {
        notification.style.background = 'var(--primary-green)';
    } else {
        notification.style.background = '#ff4444';
    }
    
    // Add to page
    document.body.appendChild(notification);
    
    // Animate in
    setTimeout(() => {
        notification.style.transform = 'translateX(0)';
    }, 100);
    
    // Remove after 3 seconds
    setTimeout(() => {
        notification.style.transform = 'translateX(100%)';
        setTimeout(() => {
            document.body.removeChild(notification);
        }, 300);
    }, 3000);
}

// Add CSS for mobile navigation
const mobileNavCSS = `    @media (max-width: 768px) {
        .nav-menu {
            position: fixed;
            top: 100%;
            left: 0;
            width: 100%;
            background: rgba(10, 10, 10, 0.98);
            backdrop-filter: blur(10px);
            flex-direction: column;
            padding: 2rem;
            transform: translateY(-100%);
            transition: transform 0.3s ease;
            border-top: 1px solid rgba(255, 255, 255, 0.1);
        }
        
        .nav-menu.active {
            transform: translateY(0);
        }
        
        .nav-toggle.active span:nth-child(1) {
            transform: rotate(45deg) translate(5px, 5px);
        }
        
        .nav-toggle.active span:nth-child(2) {
            opacity: 0;
        }
        
        .nav-toggle.active span:nth-child(3) {
            transform: rotate(-45deg) translate(7px, -6px);
        }
    }
`;

// Inject mobile navigation CSS
const style = document.createElement('style');
style.textContent = mobileNavCSS;
document.head.appendChild(style);

// Performance optimization: Throttle scroll events
function throttle(func, limit) {
    let inThrottle;
    return function() {
        const args = arguments;
        const context = this;
        if (!inThrottle) {
            func.apply(context, args);
            inThrottle = true;
            setTimeout(() => inThrottle = false, limit);
        }
    }
}

// Apply throttling to scroll events
window.addEventListener('scroll', throttle(function() {
    // Scroll-based animations can be added here
}, 16)); // ~60fps 
