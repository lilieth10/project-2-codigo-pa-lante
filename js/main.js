// SELECCIONAR TODOS LOS ITEMS DEL MENU
const menuItems = document.querySelectorAll('.menu li a');

// Recorro la lista de nodos y detectar el click en todos ellos
menuItems.forEach(function(item) {
  item.addEventListener('click', function(event) {
    event.preventDefault();

    // Quitar la clase "active" de todos los elementos del menú
    menuItems.forEach(function(item) {
      item.classList.remove('active');
    });

    // Agregar la clase "active" al elemento que fue clickeado
    this.classList.add('active');

    // Obtener el ID del objetivo del enlace
    const targetId = this.getAttribute('href').substring(1);

    // Obtener el elemento objetivo por su ID
    const target = document.getElementById(targetId);

    // aca un Desplazamiento suave hacia el elemento objetivo
    target.scrollIntoView({ behavior: 'smooth' });
  });
});

// clase "active" al elemento "Inicio" por defecto
menuItems[0].classList.add('active');
