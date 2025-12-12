// Router functionality
class Router {
    constructor() {
        this.routes = new Map();
        this.currentPage = 'home';
        this.init();
    }

    init() {
        // Register routes
        this.registerRoute('home', () => this.showPage('home'));
        this.registerRoute('portfolio', () => this.showPage('portfolio'));
        this.registerRoute('activity', () => this.showPage('activity'));
        this.registerRoute('about', () => this.showPage('about'));
        this.registerRoute('contact', () => this.showPage('contact'));

        // Handle initial route
        this.handleRoute();

        // Listen for navigation
        this.setupNavigation();
        
        // Listen for browser back/forward
        window.addEventListener('popstate', () => this.handleRoute());
    }

    registerRoute(path, handler) {
        this.routes.set(path, handler);
    }

    handleRoute() {
        const hash = window.location.hash.slice(1) || 'home';
        const handler = this.routes.get(hash);
        
        if (handler) {
            handler();
            this.currentPage = hash;
        } else {
            // Default to home if route not found
            this.showPage('home');
            this.currentPage = 'home';
        }
    }

    showPage(pageId) {
        // Hide all pages
        document.querySelectorAll('.page').forEach(page => {
            page.classList.remove('active');
        });

        // Show current page
        const targetPage = document.getElementById(pageId);
        if (targetPage) {
            targetPage.classList.add('active');
        }

        // Update navigation active state
        this.updateNavigation(pageId);

        // Initialize page-specific functionality
        this.initPageFeatures(pageId);

        // Update browser history
        if (window.location.hash !== `#${pageId}`) {
            history.pushState(null, null, `#${pageId}`);
        }
    }

    updateNavigation(activePageId) {
        document.querySelectorAll('.nav-link').forEach(link => {
            link.classList.remove('active');
            if (link.dataset.page === activePageId) {
                link.classList.add('active');
            }
        });
    }

    setupNavigation() {
        // Navigation links
        document.querySelectorAll('[data-page]').forEach(element => {
            element.addEventListener('click', (e) => {
                e.preventDefault();
                const pageId = element.dataset.page;
                window.location.hash = pageId;
            });
        });

        // Mobile menu toggle
        const hamburger = document.querySelector('.hamburger');
        const navMenu = document.querySelector('.nav-menu');
        
        if (hamburger && navMenu) {
            hamburger.addEventListener('click', () => {
                navMenu.classList.toggle('active');
            });

            // Close mobile menu when clicking on a link
            document.querySelectorAll('.nav-link').forEach(link => {
                link.addEventListener('click', () => {
                    navMenu.classList.remove('active');
                });
            });
        }
    }

    initPageFeatures(pageId) {
        switch(pageId) {
            case 'portfolio':
                this.initPortfolioFilters();
                break;
            case 'activity':
                this.initActivityDashboard();
                break;
            case 'contact':
                this.initContactForm();
                break;
            default:
                break;
        }
    }

    initPortfolioFilters() {
        const filterButtons = document.querySelectorAll('.filter-btn');
        const projectCards = document.querySelectorAll('.project-card');

        filterButtons.forEach(button => {
            button.addEventListener('click', () => {
                // Update active filter button
                filterButtons.forEach(btn => btn.classList.remove('active'));
                button.classList.add('active');

                const filter = button.dataset.filter;

                // Filter projects
                projectCards.forEach(card => {
                    if (filter === 'all') {
                        card.classList.remove('hidden');
                        card.style.display = 'block';
                    } else {
                        const categories = card.dataset.category.split(' ');
                        if (categories.includes(filter)) {
                            card.classList.remove('hidden');
                            card.style.display = 'block';
                        } else {
                            card.classList.add('hidden');
                            card.style.display = 'none';
                        }
                    }
                });
            });
        });
    }

    initActivityDashboard() {
        this.loadGitHubStats();
        this.updateActivityFeed();
        this.animateStatsCounters();
    }

    async loadGitHubStats() {
        try {
            // Simulate GitHub API calls with realistic data
            // In a real implementation, you would fetch from GitHub API
            
            const stats = {
                currentStreak: Math.floor(Math.random() * 30) + 1,
                totalCommits: Math.floor(Math.random() * 1000) + 500,
                activeDays: Math.floor(Math.random() * 200) + 100,
                codingLevel: Math.floor(Math.random() * 50) + 10
            };

            // Update UI with stats
            document.getElementById('current-streak').textContent = stats.currentStreak;
            document.getElementById('total-commits').textContent = stats.totalCommits;
            document.getElementById('active-days').textContent = stats.activeDays;
            document.getElementById('coding-level').textContent = `Level ${stats.codingLevel}`;

            // Update XP bar
            const xpProgress = document.getElementById('xp-progress');
            if (xpProgress) {
                const xpPercentage = (stats.codingLevel % 10) * 10;
                xpProgress.style.width = `${xpPercentage}%`;
            }

        } catch (error) {
            console.log('GitHub stats simulation running with default values');
        }
    }

    updateActivityFeed() {
        const activities = [
            {
                icon: 'fas fa-code-branch',
                text: '<strong>Pushed to main</strong> in lewiii254/akili-wellness-hub',
                time: '2 hours ago'
            },
            {
                icon: 'fas fa-star',
                text: '<strong>Starred</strong> microsoft/vscode',
                time: '5 hours ago'
            },
            {
                icon: 'fas fa-plus-circle',
                text: '<strong>Created repository</strong> lewiii254/portfolio-v2',
                time: '1 day ago'
            },
            {
                icon: 'fas fa-git-alt',
                text: '<strong>Opened pull request</strong> in lewiii254/farm-connect',
                time: '2 days ago'
            },
            {
                icon: 'fas fa-bug',
                text: '<strong>Fixed critical bug</strong> in kazi-haven project',
                time: '3 days ago'
            }
        ];

        const activityFeed = document.getElementById('activity-feed');
        if (activityFeed) {
            activityFeed.innerHTML = activities.map(activity => `
                <div class="activity-item">
                    <i class="${activity.icon}"></i>
                    <div class="activity-content">
                        <p>${activity.text}</p>
                        <span class="activity-time">${activity.time}</span>
                    </div>
                </div>
            `).join('');
        }
    }

    animateStatsCounters() {
        const counters = document.querySelectorAll('#current-streak, #total-commits, #active-days');
        
        counters.forEach(counter => {
            const target = parseInt(counter.textContent);
            let current = 0;
            const increment = target / 50;
            
            const updateCounter = () => {
                if (current < target) {
                    current += increment;
                    counter.textContent = Math.floor(current);
                    setTimeout(updateCounter, 30);
                } else {
                    counter.textContent = target;
                }
            };
            
            // Start animation after a short delay
            setTimeout(updateCounter, 500);
        });
    }

    initContactForm() {
        const contactForm = document.getElementById('contactForm');
        
        if (contactForm) {
            contactForm.addEventListener('submit', (e) => {
                e.preventDefault();
                this.handleContactFormSubmission(e.target);
            });
        }
    }

    handleContactFormSubmission(form) {
        const formData = new FormData(form);
        const data = {
            name: formData.get('name'),
            email: formData.get('email'),
            subject: formData.get('subject'),
            message: formData.get('message')
        };

        // Simulate form submission
        const submitBtn = form.querySelector('button[type="submit"]');
        const originalText = submitBtn.innerHTML;
        
        submitBtn.innerHTML = '<i class="fas fa-spinner fa-spin"></i> Sending...';
        submitBtn.disabled = true;

        setTimeout(() => {
            submitBtn.innerHTML = '<i class="fas fa-check"></i> Message Sent!';
            submitBtn.style.background = 'linear-gradient(135deg, #00ff41 0%, #00c4cc 100%)';
            
            // Reset form
            form.reset();
            
            // Show success message
            this.showNotification('Message sent successfully! I\'ll get back to you soon.', 'success');
            
            // Reset button after delay
            setTimeout(() => {
                submitBtn.innerHTML = originalText;
                submitBtn.disabled = false;
                submitBtn.style.background = '';
            }, 3000);
        }, 2000);
    }

    showNotification(message, type = 'info') {
        const notification = document.createElement('div');
        notification.className = `notification ${type}`;
        notification.innerHTML = `
            <i class="fas fa-${type === 'success' ? 'check-circle' : 'info-circle'}"></i>
            <span>${message}</span>
            <button class="close-btn" onclick="this.parentElement.remove()">
                <i class="fas fa-times"></i>
            </button>
        `;
        
        // Add notification styles
        notification.style.cssText = `
            position: fixed;
            top: 100px;
            right: 20px;
            background: ${type === 'success' ? 'rgba(0, 255, 65, 0.1)' : 'rgba(0, 196, 204, 0.1)'};
            border: 1px solid ${type === 'success' ? '#00ff41' : '#00c4cc'};
            color: ${type === 'success' ? '#00ff41' : '#00c4cc'};
            padding: 1rem 1.5rem;
            border-radius: 10px;
            backdrop-filter: blur(20px);
            display: flex;
            align-items: center;
            gap: 10px;
            font-family: 'Fira Code', monospace;
            z-index: 10000;
            animation: slideInRight 0.3s ease;
            max-width: 400px;
        `;
        
        document.body.appendChild(notification);
        
        // Auto remove after 5 seconds
        setTimeout(() => {
            if (notification.parentElement) {
                notification.style.animation = 'slideOutRight 0.3s ease';
                setTimeout(() => notification.remove(), 300);
            }
        }, 5000);
    }
}

// Loading screen handler
class LoadingScreen {
    constructor() {
        this.loadingScreen = document.getElementById('loading-screen');
        this.init();
    }

    init() {
        // Hide loading screen after page loads
        window.addEventListener('load', () => {
            setTimeout(() => {
                this.hide();
            }, 1500);
        });
    }

    hide() {
        if (this.loadingScreen) {
            this.loadingScreen.classList.add('fade-out');
            setTimeout(() => {
                this.loadingScreen.style.display = 'none';
            }, 500);
        }
    }
}

// Interactive features
class InteractiveFeatures {
    constructor() {
        this.init();
    }

    init() {
        this.setupParallaxEffects();
        this.setupTypingAnimation();
        this.setupScrollAnimations();
        this.setupThemeToggle();
        this.setupEasterEggs();
    }

    setupParallaxEffects() {
        window.addEventListener('scroll', () => {
            const scrolled = window.pageYOffset;
            const parallaxElements = document.querySelectorAll('.hero-visual, .coding-animation');
            
            parallaxElements.forEach(element => {
                const speed = 0.5;
                element.style.transform = `translateY(${scrolled * speed}px)`;
            });
        });
    }

    setupTypingAnimation() {
        const texts = [
            "Software Engineer 💻",
            "MERN Stack Developer 🚀",
            "AI Enthusiast 🤖",
            "Problem Solver 🧩",
            "Future CTO 💪",
            "Open Source Contributor 🤝"
        ];
        
        let textIndex = 0;
        let charIndex = 0;
        let isDeleting = false;
        
        const typeElement = document.querySelector('.hero-subtitle');
        
        if (typeElement) {
            const typeWriter = () => {
                const currentText = texts[textIndex];
                
                if (isDeleting) {
                    typeElement.textContent = currentText.substring(0, charIndex - 1);
                    charIndex--;
                } else {
                    typeElement.textContent = currentText.substring(0, charIndex + 1);
                    charIndex++;
                }
                
                let typeSpeed = isDeleting ? 50 : 100;
                
                if (!isDeleting && charIndex === currentText.length) {
                    typeSpeed = 2000;
                    isDeleting = true;
                } else if (isDeleting && charIndex === 0) {
                    isDeleting = false;
                    textIndex = (textIndex + 1) % texts.length;
                    typeSpeed = 500;
                }
                
                setTimeout(typeWriter, typeSpeed);
            };
            
            // Start typing animation only on home page
            if (window.location.hash.slice(1) === 'home' || !window.location.hash) {
                setTimeout(typeWriter, 1000);
            }
        }
    }

    setupScrollAnimations() {
        const observerOptions = {
            threshold: 0.1,
            rootMargin: '0px 0px -50px 0px'
        };

        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.style.animation = 'fadeInUp 0.6s ease-out forwards';
                }
            });
        }, observerOptions);

        // Observe elements that should animate on scroll
        document.querySelectorAll('.stat-card, .project-card, .activity-card, .skill-category, .timeline-item').forEach(el => {
            observer.observe(el);
        });
    }

    setupThemeToggle() {
        // Create theme toggle button
        const themeToggle = document.createElement('button');
        themeToggle.innerHTML = '<i class="fas fa-palette"></i>';
        themeToggle.className = 'theme-toggle';
        themeToggle.style.cssText = `
            position: fixed;
            bottom: 20px;
            right: 20px;
            width: 50px;
            height: 50px;
            border-radius: 50%;
            background: linear-gradient(135deg, #00ff41, #00c4cc);
            border: none;
            color: #000;
            font-size: 1.2rem;
            cursor: pointer;
            z-index: 1000;
            transition: all 0.3s ease;
            box-shadow: 0 5px 15px rgba(0, 196, 204, 0.3);
        `;
        
        document.body.appendChild(themeToggle);
        
        themeToggle.addEventListener('click', () => {
            this.toggleTheme();
        });
    }

    toggleTheme() {
        const root = document.documentElement;
        const currentTheme = root.style.getPropertyValue('--theme') || 'dark';
        
        if (currentTheme === 'dark') {
            // Switch to light theme
            root.style.setProperty('--bg-primary', '#ffffff');
            root.style.setProperty('--text-primary', '#000000');
            root.style.setProperty('--accent-primary', '#0066cc');
            root.style.setProperty('--accent-secondary', '#00aa44');
            root.style.setProperty('--theme', 'light');
        } else {
            // Switch to dark theme
            root.style.setProperty('--bg-primary', '#0a0a0a');
            root.style.setProperty('--text-primary', '#ffffff');
            root.style.setProperty('--accent-primary', '#00c4cc');
            root.style.setProperty('--accent-secondary', '#00ff41');
            root.style.setProperty('--theme', 'dark');
        }
        
        this.showNotification('Theme changed!', 'success');
    }

    setupEasterEggs() {
        let konamiCode = [];
        const konamiSequence = [
            'ArrowUp', 'ArrowUp', 'ArrowDown', 'ArrowDown',
            'ArrowLeft', 'ArrowRight', 'ArrowLeft', 'ArrowRight',
            'KeyB', 'KeyA'
        ];

        document.addEventListener('keydown', (e) => {
            konamiCode.push(e.code);
            
            if (konamiCode.length > konamiSequence.length) {
                konamiCode.shift();
            }
            
            if (JSON.stringify(konamiCode) === JSON.stringify(konamiSequence)) {
                this.activateEasterEgg();
                konamiCode = [];
            }
        });

        // Click easter egg on profile avatar
        const profileAvatar = document.querySelector('.profile-avatar');
        if (profileAvatar) {
            let clickCount = 0;
            profileAvatar.addEventListener('click', () => {
                clickCount++;
                if (clickCount === 5) {
                    this.activateProfileEasterEgg();
                    clickCount = 0;
                }
            });
        }
    }

    activateEasterEgg() {
        // Matrix rain effect
        this.createMatrixRain();
        this.showNotification('🎉 You found the Konami Code! Matrix mode activated!', 'success');
    }

    activateProfileEasterEgg() {
        // Disco mode
        document.body.style.animation = 'rainbow 2s infinite';
        this.showNotification('🕺 Disco mode activated! Dance like nobody\'s watching!', 'success');
        
        setTimeout(() => {
            document.body.style.animation = '';
        }, 10000);
    }

    createMatrixRain() {
        const canvas = document.createElement('canvas');
        canvas.style.cssText = `
            position: fixed;
            top: 0;
            left: 0;
            width: 100%;
            height: 100%;
            pointer-events: none;
            z-index: 9998;
            opacity: 0.3;
        `;
        
        document.body.appendChild(canvas);
        
        const ctx = canvas.getContext('2d');
        canvas.width = window.innerWidth;
        canvas.height = window.innerHeight;
        
        const matrix = "ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789@#$%^&*()";
        const drops = [];
        
        for (let x = 0; x < canvas.width / 10; x++) {
            drops[x] = 1;
        }
        
        const draw = () => {
            ctx.fillStyle = 'rgba(0, 0, 0, 0.04)';
            ctx.fillRect(0, 0, canvas.width, canvas.height);
            
            ctx.fillStyle = '#00ff41';
            ctx.font = '15px monospace';
            
            for (let i = 0; i < drops.length; i++) {
                const text = matrix[Math.floor(Math.random() * matrix.length)];
                ctx.fillText(text, i * 10, drops[i] * 10);
                
                if (drops[i] * 10 > canvas.height && Math.random() > 0.975) {
                    drops[i] = 0;
                }
                drops[i]++;
            }
        };
        
        const interval = setInterval(draw, 33);
        
        // Remove after 10 seconds
        setTimeout(() => {
            clearInterval(interval);
            canvas.remove();
        }, 10000);
    }

    showNotification(message, type) {
        // Reuse the router's notification method
        if (window.router) {
            window.router.showNotification(message, type);
        }
    }
}

// Performance monitor
class PerformanceMonitor {
    constructor() {
        this.init();
    }

    init() {
        // Monitor page load performance
        window.addEventListener('load', () => {
            this.logPerformanceMetrics();
        });
    }

    logPerformanceMetrics() {
        if ('performance' in window) {
            const navigation = performance.getEntriesByType('navigation')[0];
            const loadTime = navigation.loadEventEnd - navigation.loadEventStart;
            
            console.log(`%c🚀 Portfolio Performance Metrics`, 'color: #00c4cc; font-size: 16px; font-weight: bold;');
            console.log(`%c⏱️ Page Load Time: ${loadTime.toFixed(2)}ms`, 'color: #00ff41;');
            console.log(`%c🔥 DOM Interactive: ${navigation.domInteractive.toFixed(2)}ms`, 'color: #00ff41;');
            console.log(`%c✨ First Paint: ${performance.getEntriesByType('paint')[0]?.startTime.toFixed(2) || 'N/A'}ms`, 'color: #00ff41;');
        }
    }
}

// Add CSS animations for notifications
const notificationStyles = document.createElement('style');
notificationStyles.textContent = `
    @keyframes slideInRight {
        from {
            transform: translateX(100%);
            opacity: 0;
        }
        to {
            transform: translateX(0);
            opacity: 1;
        }
    }
    
    @keyframes slideOutRight {
        from {
            transform: translateX(0);
            opacity: 1;
        }
        to {
            transform: translateX(100%);
            opacity: 0;
        }
    }
    
    @keyframes rainbow {
        0% { filter: hue-rotate(0deg); }
        100% { filter: hue-rotate(360deg); }
    }
    
    .close-btn {
        background: none;
        border: none;
        color: inherit;
        cursor: pointer;
        padding: 0;
        margin-left: 10px;
    }
`;
document.head.appendChild(notificationStyles);

// Initialize everything when DOM is loaded
document.addEventListener('DOMContentLoaded', () => {
    // Initialize core systems
    window.router = new Router();
    new LoadingScreen();
    new InteractiveFeatures();
    new PerformanceMonitor();
    
    // Welcome message
    console.log(`
    %c
    ┌─────────────────────────────────────────────────────────────┐
    │                                                             │
    │  🚀 Welcome to Marklewis Mutugi's Interactive Portfolio!    │
    │                                                             │
    │  🎯 Features:                                               │
    │  • ✨ Smooth client-side routing                           │
    │  • 🎨 Interactive project filtering                        │
    │  • 📊 Real-time GitHub activity dashboard                  │
    │  • 🎮 Gamified coding achievements                         │
    │  • 📱 Fully responsive design                              │
    │  • 🌙 Theme switching capabilities                         │
    │  • 🥚 Hidden easter eggs (try the Konami code!)           │
    │                                                             │
    │  💻 Built with: Vanilla JS, CSS3, HTML5                    │
    │  🏠 Hosted on: GitHub Pages                                │
    │                                                             │
    │  🔗 Connect: github.com/lewiii254                          │
    │                                                             │
    └─────────────────────────────────────────────────────────────┘
    `, 'color: #00c4cc; font-family: monospace;');
    
    console.log('%c🎊 Try clicking around and exploring the features!', 'color: #00ff41; font-size: 14px;');
});