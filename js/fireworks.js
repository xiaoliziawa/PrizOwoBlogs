const canvas = document.getElementById('fireworks');
const ctx = canvas.getContext('2d');
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

class Particle {
  constructor(x, y, color) {
    this.x = x;
    this.y = y;
    this.color = color;
    this.radius = Math.random() * 2 + 1;
    this.velocity = {
      x: Math.random() * 5 - 2.5,
      y: Math.random() * 5 - 2.5
    };
    this.life = 100;
    this.alpha = 1;
  }

  draw() {
    ctx.save();
    ctx.globalAlpha = this.alpha;
    ctx.beginPath();
    ctx.arc(this.x, this.y, this.radius, 0, Math.PI * 2);
    ctx.fillStyle = this.color;
    ctx.fill();
    ctx.restore();
  }

  update() {
    this.x += this.velocity.x;
    this.y += this.velocity.y;
    this.life--;
    this.alpha -= 0.01;
  }
}

class HeartParticle {
  constructor(x, y, color) {
    this.x = x;
    this.y = y;
    this.color = color;
    this.size = Math.random() * 10 + 5;
    this.speedX = Math.random() * 3 - 1.5;
    this.speedY = Math.random() * 3 - 1.5;
    this.lifetime = 100;
  }

  update() {
    this.x += this.speedX;
    this.y += this.speedY;
    this.lifetime--;
  }

  draw() {
    const opacity = this.lifetime / 100;
    ctx.save();
    ctx.fillStyle = `rgba(${this.color.r}, ${this.color.g}, ${this.color.b}, ${opacity})`;
    ctx.beginPath();
    ctx.moveTo(this.x, this.y);
    ctx.bezierCurveTo(
      this.x - this.size / 2, this.y - this.size / 2,
      this.x - this.size, this.y + this.size / 3,
      this.x, this.y + this.size
    );
    ctx.bezierCurveTo(
      this.x + this.size, this.y + this.size / 3,
      this.x + this.size / 2, this.y - this.size / 2,
      this.x, this.y
    );
    ctx.closePath();
    ctx.fill();
    ctx.restore();
  }
}

function createFirework(x, y) {
  const particleCount = 30;
  const color = `hsl(${Math.random() * 360}, 50%, 50%)`;
  const particles = [];

  for (let i = 0; i < particleCount; i++) {
    particles.push(new Particle(x, y, color));
  }

  return particles;
}

function createHeartAnimation(x, y) {
  const particleCount = 20;
  const color = {
    r: Math.floor(Math.random() * 255),
    g: Math.floor(Math.random() * 255),
    b: Math.floor(Math.random() * 255)
  };
  const particles = [];

  for (let i = 0; i < particleCount; i++) {
    particles.push(new HeartParticle(x, y, color));
  }

  return particles;
}

let fireworks = [];
let hearts = [];

function animate() {
  requestAnimationFrame(animate);
  ctx.clearRect(0, 0, canvas.width, canvas.height);

  fireworks.forEach((particles, index) => {
    particles.forEach((particle, particleIndex) => {
      if (particle.life > 0) {
        particle.draw();
        particle.update();
      } else {
        particles.splice(particleIndex, 1);
      }
    });

    if (particles.length === 0) {
      fireworks.splice(index, 1);
    }
  });

  hearts.forEach((particles, index) => {
    particles.forEach((particle, particleIndex) => {
      if (particle.lifetime > 0) {
        particle.draw();
        particle.update();
      } else {
        particles.splice(particleIndex, 1);
      }
    });

    if (particles.length === 0) {
      hearts.splice(index, 1);
    }
  });
}

let lastFireworkTime = 0;
const fireworkInterval = 100;

document.addEventListener('mousemove', (e) => {
  const currentTime = Date.now();
  if (currentTime - lastFireworkTime > fireworkInterval) {
    fireworks.push(createFirework(e.clientX, e.clientY));
    lastFireworkTime = currentTime;
  }
});



document.addEventListener('click', (e) => {
  hearts.push(createHeartAnimation(e.clientX, e.clientY));
});

document.addEventListener('selectstart', (e) => {
  e.preventDefault();
});

animate();

window.addEventListener('resize', () => {
  canvas.width = window.innerWidth;
  canvas.height = window.innerHeight;
});

const bgCanvas = document.getElementById('particle-background');
const bgCtx = bgCanvas.getContext('2d');
bgCanvas.width = window.innerWidth;
bgCanvas.height = window.innerHeight;

class BackgroundParticle {
  constructor() {
    this.x = Math.random() * bgCanvas.width;
    this.y = Math.random() * bgCanvas.height;
    this.size = Math.random() * 4 + 1;
    this.speedX = Math.random() * 0.3 - 0.15;
    this.speedY = Math.random() * 0.3 - 0.15;
  }

  update() {
    this.x += this.speedX;
    this.y += this.speedY;

    if (this.x > bgCanvas.width) this.x = 0;
    else if (this.x < 0) this.x = bgCanvas.width;

    if (this.y > bgCanvas.height) this.y = 0;
    else if (this.y < 0) this.y = bgCanvas.height;
  }

  draw() {
    bgCtx.fillStyle = 'rgba(74, 225, 233, 0.7)';
    bgCtx.beginPath();
    bgCtx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
    bgCtx.fill();
  }
}

const particleArray = [];
const particleCount = 200;

for (let i = 0; i < particleCount; i++) {
  particleArray.push(new BackgroundParticle());
}

function animateBackground() {
  bgCtx.clearRect(0, 0, bgCanvas.width, bgCanvas.height);
  
  for (let i = 0; i < particleArray.length; i++) {
    particleArray[i].update();
    particleArray[i].draw();
  }

  for (let i = 0; i < particleArray.length; i++) {
    for (let j = i; j < particleArray.length; j++) {
      const dx = particleArray[i].x - particleArray[j].x;
      const dy = particleArray[i].y - particleArray[j].y;
      const distance = Math.sqrt(dx * dx + dy * dy);

      if (distance < 120) {
        bgCtx.beginPath();
        bgCtx.strokeStyle = `rgba(74, 225, 233, ${0.3 - distance / 400})`;
        bgCtx.lineWidth = 0.6;
        bgCtx.moveTo(particleArray[i].x, particleArray[i].y);
        bgCtx.lineTo(particleArray[j].x, particleArray[j].y);
        bgCtx.stroke();
      }
    }
  }

  requestAnimationFrame(animateBackground);
}

animateBackground();

window.addEventListener('resize', () => {
  bgCanvas.width = window.innerWidth;
  bgCanvas.height = window.innerHeight;
});

function resizeCanvas() {
  bgCanvas.width = window.innerWidth;
  bgCanvas.height = window.innerHeight;
}

window.addEventListener('resize', resizeCanvas);
resizeCanvas();

animateBackground();