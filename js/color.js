const botonCambiarColores = document.getElementById('cambiarColores');
const imagen_landing = document.querySelector('.general_header');
let coloresCambiados = false;

botonCambiarColores.addEventListener('click', () => {
    if (!coloresCambiados) {
        document.documentElement.style.setProperty('--white', '#1c1c1c');
        document.documentElement.style.setProperty('--black', '#F8F6F0');
        imagen_landing.style.transition = 'background-image 0.5s ease'; // Transición suave
        imagen_landing.style.backgroundImage = 'url(../img/desert_3.png)';
        coloresCambiados = true;
    } else {
        document.documentElement.style.setProperty('--white', ''); // Revertir a valor original
        document.documentElement.style.setProperty('--black', ''); // Revertir a valor original
        imagen_landing.style.transition = 'background-image 0.5s ease'; // Transición suave
        imagen_landing.style.backgroundImage = 'url(../img/desert_1.png)';
        coloresCambiados = false;
    }
});
