/* ==========================================
   1. ALTERNÂNCIA DE MODO CLARO E ESCURO
   ========================================== */
const themeBtn = document.getElementById('themeBtn');
const themeIcon = document.getElementById('themeIcon');
const themeText = document.getElementById('themeText');

themeBtn.addEventListener('click', () => {
  const currentTheme = document.documentElement.getAttribute('data-theme');
  
  if (currentTheme === 'light') {
    document.documentElement.setAttribute('data-theme', 'dark');
    themeIcon.textContent = '🌙';
    themeText.textContent = 'Modo Escuro';
    showToast("Modo Escuro Ativado", "A interface foi alterada para tons escuros.");
  } else {
    document.documentElement.setAttribute('data-theme', 'light');
    themeIcon.textContent = '☀️';
    themeText.textContent = 'Modo Claro';
    showToast("Modo Claro Ativado", "A interface foi alterada para tons claros.");
  }
});

/* ==========================================
   2. FILTRO DE CATEGORIAS DE CARROS
   ========================================== */
function filterCars(category, btnElement) {
  // Atualizar classe do botão ativo
  const buttons = document.querySelectorAll('.cat-btn');
  buttons.forEach(btn => btn.classList.remove('active'));
  btnElement.classList.add('active');

  // Filtrar os cards
  const cards = document.querySelectorAll('.car-card');
  cards.forEach(card => {
    const carCategory = card.getAttribute('data-category');
    if (category === 'todos' || carCategory === category) {
      card.style.display = 'flex';
    } else {
      card.style.display = 'none';
    }
  });

  // Feedback visual para a ação
  showToast("Filtro Aplicado", `Mostrando modelos da categoria: ${category.toUpperCase()}`);
}

/* ==========================================
   3. SISTEMA DE NOTIFICAÇÃO VISUAL (ACESSIBILIDADE SURDOS)
   ========================================== */
function requestTestDrive(carName) {
  showToast("Test Drive Agendado!", `Recebemos seu interesse no ${carName}. Entraremos em contato via Texto/WhatsApp.`);
}

function showToast(title, message) {
  const toast = document.getElementById('visualToast');
  document.getElementById('toastTitle').textContent = title;
  document.getElementById('toastMessage').textContent = message;

  toast.classList.add('show');

  // Efeito visual na borda para chamar atenção sem som
  document.body.style.borderTop = "4px solid var(--secondary)";

  setTimeout(() => {
    toast.classList.remove('show');
    document.body.style.borderTop = "none";
  }, 4000);
}
