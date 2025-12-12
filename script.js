// Random floating emojis in lanes (left, center, right)
class FloatingEmojis {
    constructor() {
        this.emojis = ["💻", "😁", "🙈", "🌐", "🤝", "🚀", "🤖", "🧩"];
        this.lanes = ['10%', '45%', '80%']; // left, center, right
        this.intervalId = null;
        this.init();
    }

    init() {
        this.checkPage();
        window.addEventListener('hashchange', () => this.checkPage());
    }

    checkPage() {
        if (this.intervalId) {
            clearInterval(this.intervalId);
            this.intervalId = null;
        }

        // Only run on home page
        if (window.location.hash.slice(1) === 'home' || !window.location.hash) {
            this.intervalId = setInterval(() => this.createEmoji(), 1000); // every 1 sec
        }
    }

    createEmoji() {
        const emoji = document.createElement('div');
        emoji.textContent = this.emojis[Math.floor(Math.random() * this.emojis.length)];
        emoji.style.position = 'fixed';
        emoji.style.fontSize = `${Math.random() * 24 + 16}px`; // 16-40px
        emoji.style.left = this.lanes[Math.floor(Math.random() * this.lanes.length)]; // random lane
        emoji.style.top = `${Math.random() * 80}%`; // random vertical start
        emoji.style.pointerEvents = 'none';
        emoji.style.zIndex = 9999;
        emoji.style.opacity = 1;

        // Random movement and duration
        const moveY = Math.random() * 150 + 50; // 50-200px upward
        const duration = Math.random() * 1 + 1.5; // 1.5-2.5s
        emoji.style.transition = `transform ${duration}s linear, opacity ${duration}s linear`;

        document.body.appendChild(emoji);

        // Animate upward movement
        requestAnimationFrame(() => {
            emoji.style.transform = `translateY(-${moveY}px)`;
            emoji.style.opacity = 0;
        });

        // Remove after animation
        setTimeout(() => emoji.remove(), duration * 1000);
    }
}

// Initialize floating emojis
document.addEventListener('DOMContentLoaded', () => {
    new FloatingEmojis();
});
