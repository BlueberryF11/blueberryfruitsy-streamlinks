const canvas = document.getElementById('noise');
const ctx = canvas.getContext('2d');

function resize() {
  const dpr = Math.min(window.devicePixelRatio || 1, 2);
  canvas.width = innerWidth * dpr;
  canvas.height = innerHeight * dpr;
  canvas.style.width = `${innerWidth}px`;
  canvas.style.height = `${innerHeight}px`;
  ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
}

function noise() {
  ctx.clearRect(0, 0, innerWidth, innerHeight);
  const count = Math.floor((innerWidth * innerHeight) / 9000);
  for (let i = 0; i < count; i++) {
    const x = Math.random() * innerWidth;
    const y = Math.random() * innerHeight;
    const size = Math.random() * 1.4;
    ctx.fillStyle = `rgba(255,255,255,${Math.random() * .5})`;
    ctx.fillRect(x, y, size, size);
  }
  requestAnimationFrame(noise);
}

resize();
noise();
window.addEventListener('resize', resize);

document.getElementById('year').textContent = new Date().getFullYear();

document.querySelectorAll('a[href^="#"]').forEach(link => {
  link.addEventListener('click', event => {
    const target = document.querySelector(link.getAttribute('href'));
    if (target) {
      event.preventDefault();
      target.scrollIntoView({ behavior: 'smooth' });
    }
  });
});
