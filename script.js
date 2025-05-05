// Генерація пароля
function generatePassword() {
  const lengthInput = document.getElementById("length");
  const errorElement = document.getElementById("error");
  let length = parseInt(lengthInput.value);
  
  errorElement.textContent = "";
  
  if (isNaN(length)) {
    errorElement.textContent = "Будь ласка, введіть число!";
    return;
  }
  
  if (length < 4) {
    errorElement.textContent = "Мінімум: 4 символи!";
    length = 4;
  } else if (length > 64) {
    errorElement.textContent = "Максимум: 64 символи!";
    length = 64;
  }
  
  lengthInput.value = length;
  
  const charset = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789!@#$%^&*()_+";
  let password = "";
  for (let i = 0; i < length; ++i) {
    password += charset.charAt(Math.floor(Math.random() * charset.length));
  }
  document.getElementById("result").textContent = password;
}

// Анекдот при кліку на місяць
document.getElementById('moon').addEventListener('click', function() {
  document.getElementById('jokeNotification').style.display = 'block';
});

// Закриття анекдоту
function closeJoke() {
  document.getElementById('jokeNotification').style.display = 'none';
}

// Ініціалізація
document.addEventListener('DOMContentLoaded', () => {
  // Зірки
  const starCount = window.innerWidth < 600 ? 50 : 100;
  for (let i = 0; i < starCount; i++) {
    const star = document.createElement('div');
    star.className = 'star';
    star.style.top = Math.random() * 100 + 'vh';
    star.style.left = Math.random() * 100 + 'vw';
    star.style.animationDelay = (Math.random() * 2) + 's';
    document.body.appendChild(star);
  }

  // Оптимізація анімацій для мобільних
  const isMobile = window.innerWidth < 600;
  const animals = document.querySelectorAll('.animal');
  animals.forEach(animal => {
    animal.style.animationDelay = `${Math.random() * 5}s`;
    if (isMobile) animal.style.animationDuration = `${15 + Math.random() * 10}s`;
  });
});