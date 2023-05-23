const form = document.getElementById('myForm');
const successMessage = document.getElementById('successMessage');
const errorMessage = document.getElementById('errorMessage');

form.addEventListener('submit', function(event) {
  event.preventDefault(); // Evita o envio do formulário

  const campoA = parseInt(document.getElementById('campoA').value);
  const campoB = parseInt(document.getElementById('campoB').value);

  if (campoB > campoA) {
    successMessage.textContent = 'Formulário válido';
    successMessage.style.display = 'block';
    errorMessage.style.display = 'none';
  } else {
    errorMessage.textContent = 'Formulário inválido';
    errorMessage.style.display = 'block';
    successMessage.style.display = 'none';
  }
});
