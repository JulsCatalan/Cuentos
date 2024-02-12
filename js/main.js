// Función para manejar el evento de desplazamiento
function handleScroll() {
    // Obtener la cantidad de scroll vertical
    var scrollTop = window.scrollY;
    var navbar = document.querySelector('.navbar');

    // Si la cantidad de scroll es mayor que 500, cambiar el color de fondo del navbar
    if (scrollTop > 400) {
        navbar.style.backgroundColor = 'rgba( 0,0,0, 0.8)';
        navbar.sty

    } else {
        navbar.style.backgroundColor = '';
    }
}

// Agregar un evento de desplazamiento al objeto window
window.addEventListener("scroll", handleScroll);


