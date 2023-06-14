const contenedorExterno = document.getElementById('contenedor-externo');
const contenedorInterno = document.getElementById('contenedor-interno');

contenedorExterno.addEventListener('click', function() {
  const color = window.getComputedStyle(contenedorExterno).backgroundColor;
  mostrarColor(color);
});

contenedorInterno.addEventListener('click', function(event) {
  event.stopPropagation(); 
  const color = window.getComputedStyle(contenedorInterno).backgroundColor;
  mostrarColor(color);
});

  function mostrarColor(color) {
    const colorText = document.getElementById('color-text');
    let nombreColor;
  
    if (color === 'rgb(255, 255, 0)') {
      nombreColor = `Color: Amarillo`;
    } else if (color === 'rgb(0, 128, 0)') {
        nombreColor = `Color: Verde`;
    } else {
      nombreColor = 'Desconocido';
    }
  
    colorText.textContent = nombreColor;
  }
  
  
  