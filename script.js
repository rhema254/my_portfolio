// ==========================================================================
// Terminal Portfolio — Interactive shell functionality + Background Animation
// ==========================================================================

// Terminal commands and responses
const commands = {
  help: {
    description: 'Show available commands',
    execute: () => `
<div class="response">
  <div class="response-title">Available commands:</div>
  <ul class="response-list">
    <li><strong>whoami</strong> — About me</li>
    <li><strong>skills</strong> — Technical stack</li>
    <li><strong>experience</strong> — Work history</li>
    <li><strong>projects</strong> — Selected work</li>
    <li><strong>certifications</strong> — Credentials</li>
    <li><strong>education</strong> — Academic background</li>
    <li><strong>contact</strong> — Get in touch</li>
    <li><strong>resume</strong> — Download CV</li>
    <li><strong>clear</strong> — Clear terminal</li>
  </ul>
</div>`
  },

  whoami: {
    description: 'Display personal info',
    execute: () => `
<div class="response">
  <div class="response-title">Rhema Mutethia</div>
  <div class="response-text">
    Backend Engineer with 2+ years building production systems.<br>
    Distributed systems, microservices, cloud infrastructure, applied AI.<br><br>
    I design APIs, architect microservices, and integrate AI capabilities<br>
    into real applications. Currently open to backend & AI engineering roles.<br><br>
    <strong>Location:</strong> Nairobi, Kenya
  </div>
</div>`
  },

  skills: {
    description: 'Show technical skills',
    execute: () => `
<div class="response">
  <div class="response-title">Technical Stack</div>
  <div class="response-text">
    <strong>Languages:</strong> Java, Python, JavaScript, SQL<br>
    <strong>Backend:</strong> Spring Boot, Django, Flask, REST, GraphQL, WebSockets<br>
    <strong>Data:</strong> PostgreSQL, MySQL, Redis, MongoDB, Kafka, RabbitMQ<br>
    <strong>Cloud:</strong> AWS (EC2, S3, RDS, Textract, Bedrock), Docker, CI/CD<br>
    <strong>Architecture:</strong> Microservices, Event-driven, Multi-tenant, API Design
  </div>
</div>`
  },

  experience: {
    description: 'Show work experience',
    execute: () => `
<div class="response">
  <div class="response-title">Work Experience</div>
  <div class="response-text">
    <strong>Backend Engineer — Fintech Projects</strong> (2023-Present)<br>
    • Built document processing pipelines with AWS Textract<br>
    • Designed event-driven architectures with Kafka<br>
    • Developed multi-tenant enterprise systems<br>
    • Implemented real-time WebSocket communication<br><br>

    <strong>Software Developer — ERP & Dairy Tech</strong><br>
    • Worked on Maziwa Digital Dairy Platform<br>
    • Enterprise resource planning systems<br>
    • Payment integrations (M-Pesa Daraja API)<br>
    • Database optimization and API design
  </div>
</div>`
  },

  projects: {
    description: 'List projects',
    execute: () => `
<div class="response">
  <div class="response-title">Selected Projects</div>
  <div class="response-text">
    <strong>1. Mpesa Wrapped</strong> (2024)<br>
    Financial analytics platform using AWS Textract for PDF processing.<br>
    Stack: Spring Boot, AWS S3, Redis, RabbitMQ, MySQL<br>
    <a href="https://github.com/rhema254/MpesaWrapped" target="_blank" class="link">View source →</a><br><br>

    <strong>2. Digital Banking System</strong> (2024)<br>
    Microservices banking application with event streaming.<br>
    Stack: Spring Boot, Kafka, Eureka, Spring Cloud Gateway<br>
    <a href="https://github.com/rhema254" target="_blank" class="link">View source →</a><br><br>

    <strong>3. MusiciansConnect</strong> (2024)<br>
    Marketplace with M-Pesa integration for musicians.<br>
    Stack: Django, MySQL, Daraja API<br>
    <a href="https://github.com/rhema254/_MusiciansConnect" target="_blank" class="link">View source →</a>
  </div>
  <div class="response-text" style="margin-top: 12px;">
    <a href="#work" class="link">View full case studies below</a> |
    <a href="https://github.com/rhema254" target="_blank" class="link">GitHub</a>
  </div>
</div>`
  },

  certifications: {
    description: 'Show certifications',
    execute: () => `
<div class="response">
  <div class="response-title">Certifications</div>
  <div class="response-text">
    <strong>AWS Certified Cloud Practitioner</strong><br>
    Amazon Web Services<br><br>

    <strong>AWS Certified AI Practitioner</strong><br>
    Amazon Web Services<br><br>

    Focused on cloud architecture, serverless computing,<br>
    and AI/ML services integration.
  </div>
</div>`
  },

  education: {
    description: 'Show education',
    execute: () => `
<div class="response">
  <div class="response-title">Education</div>
  <div class="response-text">
    <strong>BSc Computer Science</strong><br>
    Kenyatta University, 2024<br><br>

    Coursework: Data Structures & Algorithms, Database Systems,<br>
    Software Engineering, Distributed Systems, Machine Learning
  </div>
</div>`
  },

  contact: {
    description: 'Show contact info',
    execute: () => `
<div class="response">
  <div class="response-title">Contact</div>
  <div class="response-text">
    <strong>Email:</strong> <a href="mailto:rhemamutethia@gmail.com" class="link">rhemamutethia@gmail.com</a><br>
    <strong>GitHub:</strong> <a href="https://github.com/rhema254" target="_blank" class="link">github.com/rhema254</a><br>
    <strong>LinkedIn:</strong> <a href="https://linkedin.com/in/rhema-mutethia" target="_blank" class="link">linkedin.com/in/rhema-mutethia</a><br><br>
    Prefer async communication. Open to remote opportunities.
  </div>
</div>`
  },

  resume: {
    description: 'Download resume',
    execute: () => {
      // Trigger download
      setTimeout(() => {
        window.open('./assets/Rhema Mutethia - Resume.pdf', '_blank');
      }, 500);
      return `
<div class="response">
  <div class="response-title">Resume</div>
  <div class="response-text">
    Opening resume in new tab...<br>
    <a href="./assets/Rhema Mutethia - Resume.pdf" target="_blank" class="link">Click here if it doesn't open →</a>
  </div>
</div>`;
    }
  },

  clear: {
    description: 'Clear terminal',
    execute: () => 'CLEAR'
  },

  // Easter eggs
  sudo: {
    description: 'Superuser do',
    execute: () => `
<div class="response">
  <div class="response-text" style="color: var(--accent-red);">
    Nice try! But this terminal doesn't have root access. 😄
  </div>
</div>`
  },

  ls: {
    description: 'List directory',
    execute: () => `
<div class="response">
  <div class="response-text">
    about.md  projects/  skills.json  contact.txt  resume.pdf
  </div>
</div>`
  },

  cat: {
    description: 'Concatenate files',
    execute: () => `
<div class="response">
  <div class="response-text">
    Try: <strong>whoami</strong>, <strong>skills</strong>, <strong>projects</strong>, or <strong>contact</strong>
  </div>
</div>`
  },

  pwd: {
    description: 'Print working directory',
    execute: () => `
<div class="response">
  <div class="response-text">/home/rhema/portfolio</div>
</div>`
  },

  date: {
    description: 'Show current date',
    execute: () => {
      const now = new Date();
      return `
<div class="response">
  <div class="response-text">${now.toString()}</div>
</div>`;
    }
  },

  echo: {
    description: 'Echo text',
    execute: () => `
<div class="response">
  <div class="response-text">Hello, World! 👋</div>
</div>`
  }
};

// Terminal state
let commandHistory = [];
let historyIndex = -1;

// Initialize terminal
function initTerminal() {
  const terminalBody = document.getElementById('terminal-body');
  const terminalInput = document.getElementById('terminal-input');
  const loginDate = document.getElementById('login-date');

  // Set login date
  if (loginDate) {
    const now = new Date();
    const options = { weekday: 'short', month: 'short', day: 'numeric', hour: '2-digit', minute: '2-digit' };
    loginDate.textContent = now.toLocaleDateString('en-US', options);
  }

  if (!terminalInput) return;

  // Handle input
  terminalInput.addEventListener('keydown', (e) => {
    if (e.key === 'Enter') {
      const input = terminalInput.value.trim().toLowerCase();
      if (input) {
        executeCommand(input);
        commandHistory.push(input);
        historyIndex = commandHistory.length;
      }
      terminalInput.value = '';
    } else if (e.key === 'ArrowUp') {
      e.preventDefault();
      if (historyIndex > 0) {
        historyIndex--;
        terminalInput.value = commandHistory[historyIndex];
      }
    } else if (e.key === 'ArrowDown') {
      e.preventDefault();
      if (historyIndex < commandHistory.length - 1) {
        historyIndex++;
        terminalInput.value = commandHistory[historyIndex];
      } else {
        historyIndex = commandHistory.length;
        terminalInput.value = '';
      }
    } else if (e.key === 'Tab') {
      e.preventDefault();
      autocompleteCommand(terminalInput);
    }
  });

  // Focus input when clicking terminal
  terminalBody.addEventListener('click', () => {
    terminalInput.focus();
  });
}

// Autocomplete command
function autocompleteCommand(input) {
  const value = input.value.trim().toLowerCase();
  if (!value) return;

  const matches = Object.keys(commands).filter(cmd => cmd.startsWith(value));
  if (matches.length === 1) {
    input.value = matches[0];
  }
}

// Execute a command
function executeCommand(input) {
  const terminalOutput = document.querySelector('.terminal-output');
  const terminalInput = document.getElementById('terminal-input');

  // Handle commands with arguments
  const parts = input.split(' ');
  const cmdName = parts[0];

  // Add command to output
  const commandLine = document.createElement('div');
  commandLine.className = 'line command';
  commandLine.textContent = input;
  terminalOutput.appendChild(commandLine);

  // Execute command
  const cmd = commands[cmdName];
  if (cmd) {
    const result = cmd.execute();
    if (result === 'CLEAR') {
      clearTerminal();
    } else {
      const responseDiv = document.createElement('div');
      responseDiv.innerHTML = result;
      terminalOutput.appendChild(responseDiv);
    }
  } else {
    const errorDiv = document.createElement('div');
    errorDiv.className = 'response';
    errorDiv.innerHTML = `<div class="response-text">Command not found: ${cmdName}. Type 'help' for available commands.</div>`;
    terminalOutput.appendChild(errorDiv);
  }

  // Scroll to bottom
  const terminalBody = document.getElementById('terminal-body');
  terminalBody.scrollTop = terminalBody.scrollHeight;

  // Keep focus on input
  terminalInput.focus();
}

// Clear terminal
function clearTerminal() {
  const terminalOutput = document.querySelector('.terminal-output');

  const now = new Date();
  const options = { weekday: 'short', month: 'short', day: 'numeric', hour: '2-digit', minute: '2-digit' };
  const dateStr = now.toLocaleDateString('en-US', options);

  terminalOutput.innerHTML = `
    <div class="line">Last login: ${dateStr} on ttys000</div>
    <div class="line muted">Type 'help' for available commands.</div>
  `;
}

// Handle hint command clicks
function initHintCommands() {
  const hints = document.querySelectorAll('.hint-command');
  const terminalInput = document.getElementById('terminal-input');

  hints.forEach(hint => {
    hint.addEventListener('click', () => {
      const command = hint.textContent;
      terminalInput.value = command;
      terminalInput.focus();
      executeCommand(command);
      terminalInput.value = '';
      commandHistory.push(command);
      historyIndex = commandHistory.length;
    });
  });
}

// Mobile navigation toggle
function toggleMobileNav() {
  const toggle = document.querySelector('.nav-toggle');
  const mobileNav = document.querySelector('.mobile-nav');

  toggle.classList.toggle('active');
  mobileNav.classList.toggle('active');
}

// Smooth scroll for navigation links
function initSmoothScroll() {
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
      e.preventDefault();
      const target = document.querySelector(this.getAttribute('href'));
      if (target) {
        target.scrollIntoView({
          behavior: 'smooth',
          block: 'start'
        });

        // Close mobile nav if open
        const mobileNav = document.querySelector('.mobile-nav');
        const toggle = document.querySelector('.nav-toggle');
        if (mobileNav && mobileNav.classList.contains('active')) {
          mobileNav.classList.remove('active');
          toggle.classList.remove('active');
        }
      }
    });
  });
}

// ==========================================================================
// Interactive Background Animation
// ==========================================================================

class ParticleBackground {
  constructor() {
    this.canvas = document.getElementById('bg-canvas');
    if (!this.canvas) return;

    this.ctx = this.canvas.getContext('2d');
    this.particles = [];
    this.mouse = { x: null, y: null, radius: 150 };
    this.animationId = null;

    this.init();
    this.animate();
    this.addEventListeners();
  }

  init() {
    this.resize();
    this.createParticles();
  }

  resize() {
    this.canvas.width = window.innerWidth;
    this.canvas.height = window.innerHeight;
  }

  createParticles() {
    this.particles = [];
    const numberOfParticles = Math.floor((this.canvas.width * this.canvas.height) / 15000);

    for (let i = 0; i < numberOfParticles; i++) {
      this.particles.push({
        x: Math.random() * this.canvas.width,
        y: Math.random() * this.canvas.height,
        baseX: 0,
        baseY: 0,
        size: Math.random() * 2 + 0.5,
        speedX: (Math.random() - 0.5) * 0.3,
        speedY: (Math.random() - 0.5) * 0.3,
        opacity: Math.random() * 0.5 + 0.1
      });
    }

    // Store base positions
    this.particles.forEach(p => {
      p.baseX = p.x;
      p.baseY = p.y;
    });
  }

  addEventListeners() {
    window.addEventListener('resize', () => {
      this.resize();
      this.createParticles();
    });

    window.addEventListener('mousemove', (e) => {
      this.mouse.x = e.clientX;
      this.mouse.y = e.clientY;
    });

    window.addEventListener('mouseout', () => {
      this.mouse.x = null;
      this.mouse.y = null;
    });
  }

  animate() {
    if (!this.ctx) return;

    this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);

    this.particles.forEach((particle, index) => {
      // Update position with base movement
      particle.x += particle.speedX;
      particle.y += particle.speedY;

      // Wrap around edges
      if (particle.x < 0) particle.x = this.canvas.width;
      if (particle.x > this.canvas.width) particle.x = 0;
      if (particle.y < 0) particle.y = this.canvas.height;
      if (particle.y > this.canvas.height) particle.y = 0;

      // Mouse interaction - particles move away from cursor
      if (this.mouse.x !== null && this.mouse.y !== null) {
        const dx = this.mouse.x - particle.x;
        const dy = this.mouse.y - particle.y;
        const distance = Math.sqrt(dx * dx + dy * dy);

        if (distance < this.mouse.radius) {
          const force = (this.mouse.radius - distance) / this.mouse.radius;
          const angle = Math.atan2(dy, dx);
          particle.x -= Math.cos(angle) * force * 2;
          particle.y -= Math.sin(angle) * force * 2;
        }
      }

      // Draw particle
      this.ctx.beginPath();
      this.ctx.arc(particle.x, particle.y, particle.size, 0, Math.PI * 2);
      this.ctx.fillStyle = `rgba(124, 159, 124, ${particle.opacity})`;
      this.ctx.fill();

      // Draw connections
      this.particles.slice(index + 1).forEach(otherParticle => {
        const dx = particle.x - otherParticle.x;
        const dy = particle.y - otherParticle.y;
        const distance = Math.sqrt(dx * dx + dy * dy);

        if (distance < 100) {
          this.ctx.beginPath();
          this.ctx.moveTo(particle.x, particle.y);
          this.ctx.lineTo(otherParticle.x, otherParticle.y);
          this.ctx.strokeStyle = `rgba(124, 159, 124, ${0.1 * (1 - distance / 100)})`;
          this.ctx.lineWidth = 0.5;
          this.ctx.stroke();
        }
      });
    });

    this.animationId = requestAnimationFrame(() => this.animate());
  }

  destroy() {
    if (this.animationId) {
      cancelAnimationFrame(this.animationId);
    }
  }
}

// Handle profile picture loading
function initProfilePicture() {
  const profileImg = document.querySelector('.profile-picture img');
  const placeholder = document.querySelector('.profile-placeholder');

  if (profileImg && placeholder) {
    profileImg.addEventListener('load', () => {
      placeholder.style.display = 'none';
    });

    profileImg.addEventListener('error', () => {
      profileImg.style.display = 'none';
      placeholder.style.display = 'flex';
    });

    // Check if image is already loaded or failed
    if (profileImg.complete) {
      if (profileImg.naturalWidth === 0) {
        profileImg.style.display = 'none';
        placeholder.style.display = 'flex';
      } else {
        placeholder.style.display = 'none';
      }
    }
  }
}

// Initialize on page load
document.addEventListener('DOMContentLoaded', function() {
  initTerminal();
  initHintCommands();
  initSmoothScroll();
  initProfilePicture();
  new ParticleBackground();
});
