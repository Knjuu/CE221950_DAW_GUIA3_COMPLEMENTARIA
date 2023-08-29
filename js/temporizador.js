function crearTemporizador() {
    let tiempo = 0;
    let intervalId;
  
    function iniciar() {
      intervalId = setInterval(() => {
        tiempo++;
        actualizarTiempo();
      }, 1000);
    }
  
    function detener() {
      clearInterval(intervalId);
    }
  
    function actualizarTiempo() {
      const timerDisplay = document.getElementById('timerDisplay');
      timerDisplay.textContent = `Tiempo: ${tiempo} segundos`;
    }
  
    return {
      iniciar,
      detener
    };
  }
  
  const startBtn = document.getElementById('startBtn');
  const stopBtn = document.getElementById('stopBtn');
  
  const temporizador = crearTemporizador();
  
  startBtn.addEventListener('click', () => {
    temporizador.iniciar(); 
  });
  
  stopBtn.addEventListener('click', () => {
    temporizador.detener(); 
  });
  