function crearContador() {
  let count = 0;

  function incrementar() {
    count++;
    return count;
  }

  return incrementar;
}

const incrementBtn = document.getElementById('incrementBtn');
const counterDisplay = document.getElementById('counterDisplay');

const contador = crearContador();

incrementBtn.addEventListener('click', () => {
  const nuevoContador = contador(); 
  counterDisplay.textContent = `Contador: ${nuevoContador}`;
});
