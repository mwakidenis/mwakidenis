<!DOCTYPE html>
<html lang="en" class="scroll-smooth">
<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1" />
  <title>Mwaki Denis - Software Developer Portfolio</title>
  <!-- Tailwind CSS CDN -->
  <script src="https://cdn.tailwindcss.com"></script>
  <!-- Font Awesome CDN -->
  <link
    rel="stylesheet"
    href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.0.0/css/all.min.css"
  />
  <style>
    body {
      background-color: #ffffff;
      color: #000000;
    }
    .colored-icon {
      filter: none;
    }

    @keyframes bounce-slow {
      0%, 100% {
        transform: translateY(0);
      }
      50% {
        transform: translateY(-8px);
      }
    }
    .bounce-slow {
      animation: bounce-slow 3s infinite;
    }

    .menu-icon:hover {
      animation: bounce-slow 1s infinite;
      color: #06b6d4; /* cyan-400 */
    }

    @keyframes fadeIn {
      from { opacity: 0; }
      to { opacity: 1; }
    }
    .fade-in {
      animation: fadeIn 2s ease-in;
    }
  </style>
</head>
<body class="bg-white text-black font-sans fade-in relative overflow-hidden">

  <!-- Background Canvas for Particle Graphics -->
  <canvas id="particle-canvas" class="absolute inset-0 z-0"></canvas>

  <!-- Header & Nav -->
  <header class="bg-gray-100 shadow-md">
    <nav class="container mx-auto px-6 py-4 flex justify-center space-x-10 text-lg font-semibold uppercase tracking-wider">
      <a href="#home" class="hover:text-cyan-400 transition-colors duration-300 flex items-center space-x-2 menu-icon colored-icon">
        <i class="fas fa-home"></i><span>Home</span>
      </a>
      <a href="#about" class="hover:text-cyan-400 transition-colors duration-300 flex items-center space-x-2 menu-icon colored-icon">
        <i class="fas fa-user"></i><span>About</span>
      </a>
      <a href="#skills" class="hover:text-cyan-400 transition-colors duration-300 flex items-center space-x-2 menu-icon colored-icon">
        <i class="fas fa-code"></i><span>Skills</span>
      </a>
      <a href="#contact" class="hover:text-cyan-400 transition-colors duration-300 flex items-center space-x-2 menu-icon colored-icon">
        <i class="fas fa-envelope"></i><span>Contact</span>
      </a>
    </nav>
  </header>

  <!-- Hero Section -->
  <section id="home" class="flex flex-col md:flex-row items-center justify-center py-20 px-6 container mx-auto">
    <img
      src="20250824_130238.jpg"
      alt="20250824_130238.jpg"
      class="w-40 h-40 rounded-full border-4 border-cyan-500 mb-8 md:mb-0 md:mr-12 shadow-lg"
    />
    <div class="text-left max-w-xl">
      <h1 class="text-4xl font-extrabold mb-2">Welcome to My Portfolio</h1>
      <p class="text-xl uppercase tracking-wide mb-6">
        Name: <span class="text-cyan-500 font-bold">Mwaki Denis</span>
      </p>
      <p class="text-xl uppercase tracking-wide mb-6">
        Education: <span class="text-cyan-500 font-bold">BSc. Computer Science</span>
      </p>
      <p class="text-xl uppercase tracking-wide mb-6">
        Profession: <span class="text-cyan-500 font-bold">Software Developer</span>
      </p>
      <a href="demo.html" class="bg-gradient-to-r from-cyan-500 to-blue-500 text-white px-8 py-4 rounded-lg shadow-xl hover:from-cyan-600 hover:to-blue-600 transition-all duration-300 inline-block mt-6 font-bold text-lg animate-pulse border-2 border-cyan-300">View Live Demo</a>
    </div>
  </section>

  <!-- About Section -->
  <section id="about" class="py-16 px-6 container mx-auto text-center">
    <h2 class="text-3xl font-bold mb-8 tracking-wide">👨‍💻 About Me</h2>
    <p class="max-w-3xl mx-auto text-lg">
      💻 Fullstack Developer (Frontend + Backend)<br>
      📱 Specializing in <b>Mobile Application Development</b> with <b>Flutter & Kotlin</b><br>
      🔐 Passionate about <b>Cybersecurity</b> and building secure systems<br>
      🌱 Always learning and exploring new technologies<br>
      👨‍💻 <b>Brilliant thinking patterns</b><br>
    </p>
  </section>

  <!-- Skills Section -->
  <section id="skills" class="py-16 px-6 container mx-auto">
    <h2 class="text-3xl font-bold mb-4 text-center tracking-wide">🛠️ Tech Stack</h2>
    <p class="text-center max-w-3xl mx-auto mb-10">
      I am a Professional Software Developer with skills in:
    </p>

    <div class="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-8 max-w-6xl mx-auto">
      <!-- Front-End -->
      <div class="bg-gray-100 rounded-lg p-6 shadow-lg text-center">
        <i class="fas fa-pencil-ruler colored-icon text-cyan-500 text-6xl mb-4 bounce-slow"></i>
        <h3 class="text-xl font-semibold text-cyan-500 mb-2">Front-End</h3>
        <p>HTML, CSS, JavaScript</p>
      </div>

      <!-- UI/UX -->
      <div class="bg-gray-100 rounded-lg p-6 shadow-lg text-center">
        <i class="fas fa-object-group colored-icon text-cyan-500 text-6xl mb-4 bounce-slow"></i>
        <h3 class="text-xl font-semibold text-cyan-500 mb-2">UI/UX</h3>
        <p>Design, Wireframes, Prototyping</p>
      </div>

      <!-- Back-End / Server -->
      <div class="bg-gray-100 rounded-lg p-6 shadow-lg text-center">
        <i class="fas fa-server colored-icon text-cyan-500 text-6xl mb-4 bounce-slow"></i>
        <h3 class="text-xl font-semibold text-cyan-500 mb-2">Back-End</h3>
        <p>Node.js, Express.js, APIs</p>
      </div>

      <!-- Database -->
      <div class="bg-gray-100 rounded-lg p-6 shadow-lg text-center">
        <i class="fas fa-database colored-icon text-cyan-500 text-6xl mb-4 bounce-slow"></i>
        <h3 class="text-xl font-semibold text-cyan-500 mb-2">Database</h3>
        <p>MongoDB, PostgreSQL, MariaDB</p>
      </div>

      <!-- Node.js -->
      <div class="bg-gray-100 rounded-lg p-6 shadow-lg text-center">
        <i class="fab fa-node-js colored-icon text-green-500 text-6xl mb-4 bounce-slow"></i>
        <h3 class="text-xl font-semibold text-cyan-500 mb-2">Node.js</h3>
        <p>Server-side JavaScript</p>
      </div>

      <!-- Next.js -->
      <div class="bg-gray-100 rounded-lg p-6 shadow-lg text-center">
        <i class="fab fa-react colored-icon text-blue-500 text-6xl mb-4 bounce-slow"></i>
        <h3 class="text-xl font-semibold text-cyan-500 mb-2">Next.js</h3>
        <p>React Framework, SSR / SSG</p>
      </div>

      <!-- JavaScript -->
      <div class="bg-gray-100 rounded-lg p-6 shadow-lg text-center">
        <i class="fab fa-js-square colored-icon text-yellow-500 text-6xl mb-4 bounce-slow"></i>
        <h3 class="text-xl font-semibold text-cyan-500 mb-2">JavaScript</h3>
        <p>Dynamic Web Development</p>
      </div>

      <!-- Deployment -->
      <div class="bg-gray-100 rounded-lg p-6 shadow-lg text-center">
        <i class="fas fa-cloud-upload-alt colored-icon text-cyan-500 text-6xl mb-4 bounce-slow"></i>
        <h3 class="text-xl font-semibold text-cyan-500 mb-2">Deployment</h3>
        <p>AWS, Heroku, CI/CD</p>
      </div>

      <!-- Analytics -->
      <div class="bg-gray-100 rounded-lg p-6 shadow-lg text-center">
        <i class="fas fa-chart-line colored-icon text-cyan-500 text-6xl mb-4 bounce-slow"></i>
        <h3 class="text-xl font-semibold text-cyan-500 mb-2">Analytics</h3>
        <p>Google Analytics, monitoring</p>
      </div>
    </div>
  </section>

  <!-- Connect Section -->
  <section id="connect" class="py-16 px-6 container mx-auto text-center">
    <h2 class="text-3xl font-bold mb-8 tracking-wide">📫 Connect with Me</h2>
    <div class="flex justify-center space-x-6">
      <a href="https://x.com/@Denis7789183947" target="_blank" class="text-2xl hover:text-cyan-500 transition-colors colored-icon">
        <i class="fab fa-twitter"></i>
      </a>
      <a href="https://github.com/madebydenis" target="_blank" class="text-2xl hover:text-cyan-500 transition-colors colored-icon">
        <i class="fab fa-github"></i>
      </a>
      <a href="https://www.instagram.com/den_is6446/" target="_blank" class="text-2xl hover:text-cyan-500 transition-colors colored-icon">
        <i class="fab fa-instagram"></i>
      </a>
      <a href="https://wa.me/254798750585" target="_blank" class="text-2xl hover:text-cyan-500 transition-colors colored-icon">
        <i class="fab fa-whatsapp"></i>
      </a>
      <a href="mwakidenice.md@gmail.com" class="text-2xl hover:text-cyan-500 transition-colors colored-icon">
        <i class="fas fa-envelope"></i>
      </a>
    </div>
  </section>

  <!-- GitHub Analytics Section -->
  <section class="py-16 px-6 container mx-auto text-center">
    <h2 class="text-3xl font-bold mb-8 tracking-wide">📊 GitHub Analytics</h2>
    <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
      <img src="https://github-readme-stats.vercel.app/api?username=madebydenis&show_icons=true&theme=radical" alt="GitHub Stats" class="rounded-lg shadow-lg w-full" />
      <img src="https://github-readme-streak-stats.herokuapp.com/?user=madebydenis&theme=radical&cache_seconds=86400" alt="GitHub Streak" class="rounded-lg shadow-lg w-full" />
    </div>
    <div class="mt-8">
      <img src="https://github-readme-stats.vercel.app/api/top-langs/?username=madebydenis&layout=donut&theme=transparent&hide_border=true&langs_count=8&border_radius=20&title_color=00FF41&text_color=C9D1D9&bg_color=00000000" alt="Top Languages" class="rounded-lg shadow-lg w-full max-w-md mx-auto" />
    </div>
  </section>

  <!-- GitHub Activity Graph -->
  <section class="py-16 px-6 container mx-auto text-center">
    <h2 class="text-3xl font-bold mb-8 tracking-wide">📈 GitHub Activity Graph</h2>
    <img src="https://github-readme-activity-graph.vercel.app/graph?username=madebydenis&theme=react-dark" alt="GitHub Activity Graph" class="w-full rounded-lg shadow-lg" />
  </section>


  <!-- Contact Section -->
  <section id="contact" class="py-16 px-6 container mx-auto max-w-lg rounded-lg shadow-lg bg-gray-100">
    <h2 class="text-3xl font-bold mb-8 text-cyan-500 text-center uppercase tracking-wide">Contact Me</h2>
    <form id="contact-form" class="flex flex-col space-y-6">
      <label for="name" class="font-semibold">Name:</label>
      <input
        type="text"
        id="name"
        name="name"
        required
        class="px-4 py-2 rounded bg-white border border-gray-300 text-black focus:outline-none focus:ring-2 focus:ring-cyan-500"
      />

      <label for="email" class="font-semibold">Email:</label>
      <input
        type="email"
        id="email"
        name="email"
        required
        class="px-4 py-2 rounded bg-white border border-gray-300 text-black focus:outline-none focus:ring-2 focus:ring-cyan-500"
      />

      <label for="message" class="font-semibold">Message:</label>
      <textarea
        id="message"
        name="message"
        required
        rows="4"
        class="px-4 py-2 rounded bg-white border border-gray-300 text-black focus:outline-none focus:ring-2 focus:ring-cyan-500"
      ></textarea>

      <button
        type="submit"
        class="bg-cyan-500 hover:bg-cyan-600 text-white font-bold py-3 rounded transition-colors duration-300"
      >
        Send
      </button>
    </form>
  </section>

  <!-- Footer -->
  <footer class="bg-gray-100 text-center py-6 mt-20">
    <p class="text-gray-500 text-sm">&copy; 2025 Mwaki Denis. All rights reserved.</p>
  </footer>

  <!-- JavaScript for Animations and Graphics -->
  <script>
    // Particle System
    const canvas = document.getElementById('particle-canvas');
    const ctx = canvas.getContext('2d');
    let particles = [];
    let mouse = { x: null, y: null };

    function resizeCanvas() {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    }

    function createParticles() {
      particles = [];
      const particleCount = Math.floor(window.innerWidth / 10);
      for (let i = 0; i < particleCount; i++) {
        particles.push({
          x: Math.random() * canvas.width,
          y: Math.random() * canvas.height,
          vx: (Math.random() - 0.5) * 0.5,
          vy: (Math.random() - 0.5) * 0.5,
          size: Math.random() * 3 + 1,
          color: `hsl(${Math.random() * 360}, 70%, 60%)`,
          life: Math.random() * 100 + 50
        });
      }
    }

    function updateParticles() {
      particles.forEach((particle, index) => {
        // Mouse interaction
        if (mouse.x && mouse.y) {
          const dx = mouse.x - particle.x;
          const dy = mouse.y - particle.y;
          const distance = Math.sqrt(dx * dx + dy * dy);
          if (distance < 100) {
            particle.vx += dx * 0.0001;
            particle.vy += dy * 0.0001;
          }
        }

        particle.x += particle.vx;
        particle.y += particle.vy;
        particle.life--;

        // Wrap around edges
        if (particle.x < 0) particle.x = canvas.width;
        if (particle.x > canvas.width) particle.x = 0;
        if (particle.y < 0) particle.y = canvas.height;
        if (particle.y > canvas.height) particle.y = 0;

        // Remove dead particles
        if (particle.life <= 0) {
          particles.splice(index, 1);
        }
      });

      // Add new particles occasionally
      if (particles.length < 50 && Math.random() < 0.1) {
        particles.push({
          x: Math.random() * canvas.width,
          y: Math.random() * canvas.height,
          vx: (Math.random() - 0.5) * 0.5,
          vy: (Math.random() - 0.5) * 0.5,
          size: Math.random() * 3 + 1,
          color: `hsl(${Math.random() * 360}, 70%, 60%)`,
          life: Math.random() * 100 + 50
        });
      }
    }

    function drawParticles() {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      particles.forEach(particle => {
        ctx.beginPath();
        ctx.arc(particle.x, particle.y, particle.size, 0, Math.PI * 2);
        ctx.fillStyle = particle.color;
        ctx.globalAlpha = particle.life / 150;
        ctx.fill();
      });
      ctx.globalAlpha = 1;
    }

    function animate() {
      updateParticles();
      drawParticles();
      requestAnimationFrame(animate);
    }

    // Mouse tracking
    document.addEventListener('mousemove', (e) => {
      mouse.x = e.clientX;
      mouse.y = e.clientY;
    });

    document.addEventListener('mouseleave', () => {
      mouse.x = null;
      mouse.y = null;
    });

    // Scroll-triggered animations
    const observerOptions = {
      threshold: 0.1,
      rootMargin: '0px 0px -50px 0px'
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.style.opacity = '1';
          entry.target.style.transform = 'translateY(0)';
        }
      });
    }, observerOptions);

    // Apply scroll animations to sections
    document.querySelectorAll('section').forEach(section => {
      section.style.opacity = '0';
      section.style.transform = 'translateY(30px)';
      section.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
      observer.observe(section);
    });

    // Enhanced hover effects
    document.querySelectorAll('.menu-icon').forEach(icon => {
      icon.addEventListener('mouseenter', () => {
        icon.style.transform = 'scale(1.2) rotate(5deg)';
        icon.style.transition = 'transform 0.3s ease';
      });
      icon.addEventListener('mouseleave', () => {
        icon.style.transform = 'scale(1) rotate(0deg)';
      });
    });

    // Skill card hover effects
    document.querySelectorAll('#skills > div > div').forEach(card => {
      card.addEventListener('mouseenter', () => {
        card.style.transform = 'translateY(-10px) rotateX(5deg)';
        card.style.boxShadow = '0 20px 40px rgba(0,0,0,0.2)';
        card.style.transition = 'transform 0.3s ease, box-shadow 0.3s ease';
      });
      card.addEventListener('mouseleave', () => {
        card.style.transform = 'translateY(0) rotateX(0)';
        card.style.boxShadow = '0 10px 20px rgba(0,0,0,0.1)';
      });
    });

    // Click animations for bouncing elements
    document.querySelectorAll('.bounce-slow').forEach(element => {
      element.addEventListener('click', () => {
        element.style.animation = 'none';
        setTimeout(() => {
          element.style.animation = 'bounce-slow 0.5s ease';
        }, 10);
      });
    });

    // Initialize
    window.addEventListener('load', () => {
      resizeCanvas();
      createParticles();
      animate();
    });

    window.addEventListener('resize', () => {
      resizeCanvas();
      createParticles();
    });
  </script>

</body>
</html>
