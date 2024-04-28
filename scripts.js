// Usamos Java Script para lograr barra lateral derecha dinámica
 
function toggleRightSidebar() {
    const body = document.body;
    const rightSidebar = document.querySelector('.right-sidebar');

    // Toggle la clase para ocultar/mostrar la barra lateral derecha
    body.classList.toggle('right-sidebar-hidden');
}
