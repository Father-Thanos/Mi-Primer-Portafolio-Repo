// Animación al hacer scroll
window.addEventListener('scroll', () => {
  const sections = document.querySelectorAll('section');
  sections.forEach(sec => {
    const position = sec.getBoundingClientRect().top;
    const screenPosition = window.innerHeight / 1.3;
    if (position < screenPosition) {
      sec.style.transition = "all 0.8s ease";
      sec.style.opacity = "1";
      sec.style.transform = "translateY(0)";
    }
  });
});

// Inicialización visual
document.querySelectorAll('section').forEach(sec => {
  sec.style.opacity = '0';
  sec.style.transform = 'translateY(50px)';
});

// --- Modo oscuro ---
const toggleButton = document.getElementById('theme-toggle');
const body = document.body;

// Cargar preferencia previa
if (localStorage.getItem('theme') === 'dark') {
  body.classList.add('dark');
  toggleButton.textContent = '☀️ Modo Claro';
}

toggleButton.addEventListener('click', () => {
  body.classList.toggle('dark');
  const isDark = body.classList.contains('dark');
  toggleButton.textContent = isDark ? '☀️ Modo Claro' : '🌙 Modo Oscuro';
  localStorage.setItem('theme', isDark ? 'dark' : 'light');
});
