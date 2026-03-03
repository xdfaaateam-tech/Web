// ==================== NOTIFICATION SYSTEM ====================
class DonationNotificationSystem {
    constructor() {
        this.notificationContainer = document.getElementById('notificationContainer');
        this.notifications = [];
        this.init();
    }

    init() {
        // Listen for WebSocket connection or API polling
        this.startListening();
        
        // Demo notifications (remove in production)
        this.setupDemoNotifications();
    }

    startListening() {
        // In production, replace this with actual WebSocket or polling from Sociabuzz API
        // Example using WebSocket (uncomment when API is available):
        /*
        const ws = new WebSocket('wss://api.sociabuzz.com/donations');
        ws.onmessage = (event) => {
            const donation = JSON.parse(event.data);
            this.showNotification(donation);
        };
        */
    }

    showNotification(data) {
        const notification = document.createElement('div');
        notification.className = 'notification';
        
        const donorName = data.name || 'Pendonasi';
        const amount = data.amount || '0';
        const message = data.message || '';
        
        notification.innerHTML = `
            <div class="notification-icon">
                <i class="fas fa-heart"></i>
            </div>
            <div class="notification-content">
                <div class="notification-title">💖 Terima Kasih ${donorName}!</div>
                <div class="notification-message">${amount} • ${message || 'Terima kasih atas dukunganmu!'}</div>
            </div>
            <button class="notification-close" onclick="this.parentElement.remove()">
                <i class="fas fa-times"></i>
            </button>
        `;
        
        this.notificationContainer.appendChild(notification);
        this.playNotificationSound();
        
        // Auto remove after 8 seconds
        setTimeout(() => {
            notification.style.animation = 'slideOut 0.5s ease';
            setTimeout(() => notification.remove(), 500);
        }, 8000);
    }

    playNotificationSound() {
        // Create notification sound using Web Audio API
        const audioContext = new (window.AudioContext || window.webkitAudioContext)();
        const oscillator = audioContext.createOscillator();
        const gainNode = audioContext.createGain();
        
        oscillator.connect(gainNode);
        gainNode.connect(audioContext.destination);
        
        // Set frequency for a pleasant notification sound
        oscillator.frequency.value = 800;
        gainNode.gain.setValueAtTime(0.3, audioContext.currentTime);
        gainNode.gain.exponentialRampToValueAtTime(0.01, audioContext.currentTime + 0.5);
        
        oscillator.start(audioContext.currentTime);
        oscillator.stop(audioContext.currentTime + 0.5);
    }

    setupDemoNotifications() {
        // Demo donations - remove in production
        const demoData = [
            { name: 'Budi', amount: 'Rp 50.000', message: 'Lanjutkan karya terbaik kalian!' },
            { name: 'Siti', amount: 'Rp 100.000', message: 'Sangat suka dengan cerita-ceritanya' },
            { name: 'Ahmad', amount: 'Rp 25.000', message: 'Sukses terus DF STUDIOS!' }
        ];
        
        // Show demo notifications on page load (optional, can be removed)
        // Uncomment line below to enable demo notifications
        // setTimeout(() => this.showDemoLoop(demoData), 2000);
    }

    showDemoLoop(demoData) {
        let index = 0;
        setInterval(() => {
            this.showNotification(demoData[index]);
            index = (index + 1) % demoData.length;
        }, 10000);
    }
}

// ==================== HAMBURGER MENU ====================
class MobileMenu {
    constructor() {
        this.hamburger = document.querySelector('.hamburger');
        this.navMenu = document.querySelector('.nav-menu');
        this.navLinks = document.querySelectorAll('.nav-link');
        this.init();
    }

    init() {
        this.hamburger.addEventListener('click', () => this.toggleMenu());
        this.navLinks.forEach(link => {
            link.addEventListener('click', () => this.closeMenu());
        });
    }

    toggleMenu() {
        this.navMenu.classList.toggle('active');
        this.hamburger.classList.toggle('active');
    }

    closeMenu() {
        this.navMenu.classList.remove('active');
        this.hamburger.classList.remove('active');
    }
}

// ==================== SMOOTH SCROLLING ====================
class SmoothScroll {
    constructor() {
        this.navLinks = document.querySelectorAll('a[href^="#"]');
        this.init();
    }

    init() {
        this.navLinks.forEach(link => {
            link.addEventListener('click', (e) => this.handleScroll(e));
        });
    }

    handleScroll(e) {
        e.preventDefault();
        const targetId = e.currentTarget.getAttribute('href').substring(1);
        const targetSection = document.getElementById(targetId);
        
        if (targetSection) {
            targetSection.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        }
    }
}

// ==================== INTERSECTION OBSERVER FOR ANIMATIONS ====================
class AnimationOnScroll {
    constructor() {
        this.elements = document.querySelectorAll('.feature-item, .social-card');
        this.init();
    }

    init() {
        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.style.animation = 'fadeInUp 0.6s ease forwards';
                    observer.unobserve(entry.target);
                }
            });
        }, { threshold: 0.1 });

        this.elements.forEach(element => {
            observer.observe(element);
        });
    }
}

// Add CSS animation for fadeInUp
const style = document.createElement('style');
style.textContent = `
    @keyframes fadeInUp {
        from {
            opacity: 0;
            transform: translateY(30px);
        }
        to {
            opacity: 1;
            transform: translateY(0);
        }
    }

    @keyframes slideOut {
        to {
            transform: translateX(400px);
            opacity: 0;
        }
    }
`;
document.head.appendChild(style);

// ==================== INITIALIZE ALL FEATURES ====================
document.addEventListener('DOMContentLoaded', () => {
    // Initialize notification system
    const notificationSystem = new DonationNotificationSystem();

    // Initialize mobile menu
    new MobileMenu();

    // Initialize smooth scroll
    new SmoothScroll();

    // Initialize animations on scroll
    new AnimationOnScroll();

    // Log initialization
    console.log('DF STUDIOS website initialized successfully! 🎬');
});

// ==================== UTILITY FUNCTIONS ====================

// Function to trigger manual notification (for testing)
window.testNotification = function(name = 'Supporter', amount = 'Rp 50.000') {
    const notificationSystem = new DonationNotificationSystem();
    notificationSystem.showNotification({
        name: name,
        amount: amount,
        message: 'Terima kasih atas dukunganmu!'
    });
};

// Function to integrate with actual Sociabuzz API (to be implemented)
window.integrateSociabuzzAPI = function(donorId) {
    // Replace with actual API endpoint from Sociabuzz
    // fetch(`https://api.sociabuzz.com/donations/${donorId}`)
    //     .then(response => response.json())
    //     .then(data => notificationSystem.showNotification(data))
    //     .catch(error => console.error('Error:', error));
};
