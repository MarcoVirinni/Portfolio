// Datos de habilidades
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
  }
  