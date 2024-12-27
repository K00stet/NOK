document.addEventListener('DOMContentLoaded', () => {
  const popupOverlay = document.getElementById('popupOverlay');
  const popup = document.getElementById('registrationPopup');
  const closeBtn = document.getElementById('closePopup');
  const registerTab = document.getElementById('registerTab');
  const loginTab = document.getElementById('loginTab');
  const registerForm = document.getElementById('registerForm');
  const loginForm = document.getElementById('loginForm');

  // Показать всплывающее окно при загрузке
  setTimeout(() => {
    popupOverlay.classList.add('active');
    popup.classList.add('active');
  }, 500);

  // Закрыть окно
  closeBtn.addEventListener('click', () => {
    popupOverlay.classList.remove('active');
    popup.classList.remove('active');
  });

  // Переключение между регистрацией и входом
  registerTab.addEventListener('click', () => {
    registerTab.classList.add('active');
    loginTab.classList.remove('active');
    registerForm.classList.remove('hidden');
    loginForm.classList.add('hidden');
  });

  loginTab.addEventListener('click', () => {
    loginTab.classList.add('active');
    registerTab.classList.remove('active');
    loginForm.classList.remove('hidden');
    registerForm.classList.add('hidden');
  });

  // Закрыть при клике вне окна
  window.addEventListener('click', (event) => {
    if (event.target === popupOverlay) {
      popupOverlay.classList.remove('active');
      popup.classList.remove('active');
    }
  });
});
