const form = document.getElementById('form');
const emailInput = document.getElementById('email');
const emailError = document.getElementById('email__error');

form.addEventListener('submit', (e) => {
  const emailValue = emailInput.value.trim();

  if (emailValue === '') {
    emailError.textContent = 'Whoops! It looks like you forgot to add your email';
    emailInput.classList.add('input--error');
    e.preventDefault();
  } else if (!validateEmail(emailValue)) {
    emailError.textContent = 'Please provide a valid email address';
    emailInput.classList.add('input--error');
    e.preventDefault();
  } else {
    emailError.textContent = '';
    emailInput.classList.remove('input--error');
  }
});

function validateEmail(email) {
  const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
  return emailRegex.test(email);
}