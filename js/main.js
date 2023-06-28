
const menuItems = document.querySelectorAll('.menu-item');// selecciono los item 

menuItems.forEach(function(item) {
  item.addEventListener('click', function(e) {
    // Elimino la clase 'active' de todos los elementos del menú
    menuItems.forEach(function(item) {
      item.classList.remove('active');
    });
    
    // agrego la clase 'active' al elemento que fue clickeado
    e.target.classList.add('active');
  });
});
