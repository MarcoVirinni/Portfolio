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
  $(document).ready(function () {
    // Función para animar las barras de progreso
    function animateSkills() {
        // Selecciona todas las habilidades con la clase 'skill-progress'
        $('.skill-progress').each(function () {
            var $bar = $(this).find('path');
            var $text = $(this).find('text');
            var progress = $text.text().replace('%', '');
            
            // Calcula el porcentaje de la barra de progreso
            var radius = $bar.attr('r');
            var circumference = 2 * Math.PI * radius;
            var strokeDashoffset = circumference * (1 - progress / 100);
            
            // Aplica la animación de la barra de progreso
            $bar.css({
                'stroke-dasharray': circumference,
                'stroke-dashoffset': circumference,
            }).animate({
                'stroke-dashoffset': strokeDashoffset,
            }, 1500);
        });
    }

    // Llama a la función para animar las barras de progreso
    animateSkills();
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


