document.addEventListener('DOMContentLoaded', function () {
  // Tu código JavaScript para cargar eventos y habilidades aquí

// Array de objetos para representar las habilidades
const skillsData = [
  {
    name: 'HTML',
    image: 'https://upload.wikimedia.org/wikipedia/commons/6/61/HTML5_logo_and_wordmark.svg',
    percent: '70%'
  },
  {
    name: 'CSS',
    image: 'https://img.icons8.com/color/452/css3.png',
    percent: '70%'
  },
  {
    name: 'Bootstrap',
    image: 'https://getbootstrap.com/docs/5.0/assets/brand/bootstrap-social-logo.png',
    percent: '70%'
  },
  {
    name: 'JavaScript',
    image: 'https://www.freepnglogos.com/uploads/javascript-png/javascript-logo-transparent-logo-javascript-images-3.png',
    percent: '70%'
  },
  {
    name: 'GitHub',
    image: 'https://github.githubassets.com/images/modules/logos_page/GitHub-Mark.png',
    percent: '70%'
  },
  {
    name: 'Git',
    image: './assets/git.jpg',
    percent: '70%'
  },
  {
    name: 'Angular',
    image: './assets/angular.png',
    percent: '60%'
  },
  {
    name: 'Vue.js',
    image: 'assets/vue.png',
    percent: '60%'
  },
  {
    name: 'Figma',
    image: 'assets/figma.png',
    percent: '40%'
  },
  {
    name: 'Materialize',
    image: './assets/materialize.jpg',
    percent: '50%'
  },
  {
    name: 'Java',
    image: './assets/java.jpg',
    percent: '70%'
  },
  {
    name: 'Python',
    image: './assets/python.jpg',
    percent: '70%'
  },
  {
    name: 'MySQL',
    image: './assets/mysql.jpg',
    percent: '70%'
  },
  {
    name: 'PostgreSQL',
    image: './assets/postgres.jpg',
    percent: '50%'
  },
  {
    name: 'Postman',
    image: './assets/postman.jpg',
    percent: '50%'
  }
];      // Recorre el array de habilidades y genera el HTML dinámicamente
const skillsContainer = document.querySelector('.skills-container');
const skillsCarousel = document.querySelector('.skills-carousel');


for (const skill of skillsData) {
  // Calcula la longitud total de la circunferencia
  const circumference = Math.PI * 2 * 40; // 40 es el radio del círculo

  // Calcula la longitud del trazo en función del porcentaje
  const dashArray = (parseFloat(skill.percent) / 100) * circumference;

  // Establece el color del trazo en base al porcentaje
  const strokeColor = parseFloat(skill.percent) >= 70 ? '#4CAF50' : '#FFC107'; // Verde oscuro y Amarillo oscuro

  const htmlSkill = `
    <div class="iconohtml">
      <svg viewBox="0 0 100 100">
        <circle cx="50" cy="50" r="45" fill="#000000" /> <!-- Cambiado a negro -->
        <image href="${skill.image}" x="20" y="20" width="60" height="60" />
        <path fill="none" stroke-linecap="round" stroke-width="5" stroke="${strokeColor}" stroke-dasharray="${dashArray},${circumference}" d="M50 10 a 40 40 0 0 1 0 80 a 40 40 0 0 1 0 -80" />
        <text x="40" y="17" text-anchor="middle" dy="7" font-size="22" font-weight="bold" fill="${strokeColor}">${skill.percent}</text> <!-- Ajustado tamaño, peso y color -->
      </svg>
    </div>`;

  skillsContainer.innerHTML += htmlSkill;
}
  // Clona solo la cantidad necesaria de elementos para crear una cinta continua
  const originalContent = skillsContainer.innerHTML;
  const numClones = Math.ceil(skillsCarousel.offsetWidth / skillsContainer.offsetWidth);
  for (let i = 0; i < numClones; i++) {
    skillsContainer.innerHTML += originalContent;
  }

  // Configura el tamaño del contenedor del carrusel
  skillsCarousel.style.width = `${(skillsData.length + numClones) * 200}px`; // Ajusta según tus necesidades

  // Función para animar el carrusel
  function animateCarousel() {
    const scrollAmount = 1.5; // Puedes ajustar la velocidad de desplazamiento
    skillsCarousel.scrollLeft += scrollAmount;

    // Cuando llega al final, ajusta el desplazamiento para mantener la cinta continua
    if (skillsCarousel.scrollLeft >= skillsContainer.offsetWidth * (skillsData.length + numClones - 1)) {
      skillsCarousel.scrollLeft -= skillsContainer.offsetWidth;
    }
  }

  // Inicia la animación del carrusel
  setInterval(animateCarousel, 10); // Puedes ajustar el intervalo de tiempo
});


   // Función para obtener la ubicación y mostrar el mapa
   function mostrarMapa() {
    navigator.geolocation.getCurrentPosition(function (position) {
        // Obtiene las coordenadas
        const latitud = position.coords.latitude;
        const longitud = position.coords.longitude;

        // Crea la URL del mapa embebido de Google Maps con las coordenadas
        const mapaUrl = `https://www.google.com/maps/embed/v1/view?key=TU_API_KEY&center=${latitud},${longitud}&zoom=15`;

        // Crea el elemento iframe y establece sus atributos
        const iframe = document.createElement('iframe');
        iframe.src = mapaUrl;
        iframe.width = '100%';
        iframe.height = '400';
        iframe.frameborder = '0';
        iframe.style.border = '0';

        // Agrega el iframe al contenedor
        document.getElementById('mapa-container').appendChild(iframe);
    });
}

// Llama a la función al cargar la página
mostrarMapa();