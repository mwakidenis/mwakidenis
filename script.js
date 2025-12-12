// Floating emojis in alternating lanes
class FloatingEmojis {
    constructor() {
        this.emojis = ["💻", "😁", "🙈", "🌐", "🤝", "🚀", "🤖", "🧩"];
        this.lanes = ['10%', '80%', '45%']; // left, right, center
        this.laneIndex = 0; // to alternate lanes
        this.init();
    }

    init() {
        this.checkPage();
        window.addEventListener('hashchange', () => this.checkPage());
    }

    checkPage() {
        if (this.intervalId) clearInterval(this.intervalId);

        // Only run on home page
        if (window.location.hash.slice(1) === 'home' || !window.location.hash) {
            this.intervalId = setInterval(() => this.createEmoji(), 1000);
        }
    }

    createEmoji() {
        const emoji = document.createElement('div');
        emoji.textContent = this.emojis[Math.floor(Math.random() * this.emojis.length)];
        emoji.style.position = 'fixed';
        emoji.style.fontSize = `${Math.random() * 24 + 16}px`; // 16-40px
        emoji.style.left = this.lanes[this.laneIndex]; // pick lane in sequence
        this.laneIndex = (this.laneIndex + 1) % this.lanes.length; // move to next lane
        emoji.style.top = `${Math.random() * 80}%`; // random vertical start
        emoji.style.pointerEvents = 'none';
        emoji.style.zIndex = 9999;
        emoji.style.opacity = 1;

        // Random movement and duration
        const moveY = Math.random() * 150 + 50; // 50-200px upward
        const duration = Math.random() * 1 + 1.5; // 1.5-2.5s
        emoji.style.transition = `transform ${duration}s linear, opacity ${duration}s linear`;

        document.body.appendChild(emoji);

        requestAnimationFrame(() => {
            emoji.style.transform = `translateY(-${moveY}px)`;
            emoji.style.opacity = 0;
        });

        setTimeout(() => emoji.remove(), duration * 1000);
    }
}

// Initialize floating emojis
document.addEventListener('DOMContentLoaded', () => {
    new FloatingEmojis();
});
