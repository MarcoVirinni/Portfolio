/* // Datos de habilidades
var data = [
    {label: "HTML", value: 50},
    {label: "CSS", value: 50},
    {label: "Bootstrap", value: 40},
    {label: "JavaScript", value: 40}
  ];
  
  // Selección de los elementos SVG
  var circles = document.querySelectorAll(".skill-progress");
  
  // Cálculo del perímetro del círculo
  var radius = circles[0].getAttribute("r");
  var circumference = 2 * Math.PI * radius;
  
  // Asignación de stroke-dasharray proporcional al valor de habilidad
  for (var i = 0; i < circles.length; i++) {
    var skillValue = data[i].value;
    var dasharrayValue = (circumference * skillValue) / 100 + " " + circumference;
    circles[i].setAttribute("stroke-dasharray", dasharrayValue);
  } */
  document.addEventListener('DOMContentLoaded', function () {
    // Obtener el contenedor del carrusel
    var carouselContainer = document.getElementById('hard-carousel');

    // Lista de habilidades con rutas de imágenes y porcentajes
    var skills = [
        { name: 'Habilidad 1', image: 'assets/git.jpg', percentage: 80 },
        { name: 'Habilidad 2', image: 'assets/css.jpg', percentage: 65 },
        // ... (Repite el patrón para las habilidades restantes)
        { name: 'Habilidad 15', image: 'ruta-de-la-imagen-15.jpg', percentage: 90 }
    ];

    // Generar elementos para cada habilidad
    skills.forEach(function (skill, index) {
        var iconElement = document.createElement('i');
        iconElement.className = 'icono' + (index + 1);

        var imgElement = document.createElement('img');
        imgElement.setAttribute('src', skill.image);
        imgElement.setAttribute('alt', skill.name);

        var circleElement = document.createElement('div');
        circleElement.className = 'percentage-circle';

        var svgElement = document.createElementNS('http://www.w3.org/2000/svg', 'svg');
        svgElement.setAttribute('viewBox', '0 0 100 100');

        var circlePath = document.createElementNS('http://www.w3.org/2000/svg', 'circle');
        circlePath.setAttribute('cx', '50');
        circlePath.setAttribute('cy', '50');
        circlePath.setAttribute('r', '45');
        circlePath.setAttribute('fill', 'none');
        circlePath.setAttribute('stroke-linecap', 'round');
        circlePath.setAttribute('stroke-width', '5');
        circlePath.setAttribute('stroke', '#fff');
        circlePath.setAttribute('stroke-dasharray', skill.percentage * 1.256 + ', 125.6');
        circlePath.setAttribute('transform', 'rotate(-90 50 50)');

        svgElement.appendChild(circlePath);
        circleElement.appendChild(svgElement);

        iconElement.appendChild(imgElement);
        iconElement.appendChild(circleElement);
        carouselContainer.appendChild(iconElement);
    });
});

/* ----------------------------loginButton-------------------------- */
  const loginButton = document.getElementById('login-button');

// Si el usuario está conectado, agregue el botón de cierre de sesión
if (userIsLoggedIn) {
  loginButton.innerHTML = '<button onclick="logout()">Cerrar sesión</button>';
}
// Si el usuario no está conectado, agregue el botón de inicio de sesión
else {
  loginButton.innerHTML = '<button onclick="login()">Iniciar sesión</button>';
}


