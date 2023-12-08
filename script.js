
document.addEventListener('DOMContentLoaded', function () {
  // Tu código JavaScript para cargar eventos y habilidades aquí

// Array de objetos para representar las habilidades
const skillsData = [
  {
    name: 'HTML',
    image: 'https://upload.wikimedia.org/wikipedia/commons/6/61/HTML5_logo_and_wordmark.svg',
    percent: '50%'
  },
  {
    name: 'CSS',
    image: 'https://img.icons8.com/color/452/css3.png',
    percent: '50%'
  },
  {
    name: 'Bootstrap',
    image: 'https://getbootstrap.com/docs/5.0/assets/brand/bootstrap-social-logo.png',
    percent: '50%'
  },
  {
    name: 'JavaScript',
    image: 'https://www.freepnglogos.com/uploads/javascript-png/javascript-logo-transparent-logo-javascript-images-3.png',
    percent: '50%'
  },
  {
    name: 'GitHub',
    image: 'https://github.githubassets.com/images/modules/logos_page/GitHub-Mark.png',
    percent: '50%'
  },
  {
    name: 'Git',
    image: './assets/git.jpg',
    percent: '50%'
  },
  {
    name: 'Angular',
    image: './assets/angular.png',
    percent: '50%'
  },
  {
    name: 'Vue.js',
    image: 'assets/vue.png',
    percent: '50%'
  },
  {
    name: 'Figma',
    image: 'assets/figma.png',
    percent: '50%'
  },
  {
    name: 'Materialize',
    image: './assets/materialize.jpg',
    percent: '50%'
  },
  {
    name: 'Java',
    image: './assets/java.jpg',
    percent: '50%'
  },
  {
    name: 'Postman',
    image: './assets/python.jpg',
    percent: '50%'
  },
  {
    name: 'MySQL',
    image: './assets/mysql.jpg',
    percent: '50%'
  },
  {
    name: 'PostgreSQL',
    image: './assets/postgres.jpg',
    percent: '50%'
  },
  {
    name: 'Python',
    image: './assets/postman.jpg',
    percent: '50%'
  }
];
  // Recorre el array de habilidades y genera el HTML dinámicamente
  const skillsContainer = document.querySelector('.skills-container');
  // Configura el contenedor para utilizar flexbox
  skillsContainer.style.display = 'flex';
  
  for (const skill of skillsData) {
      const htmlSkill = `
          <i class="iconohtml">
              <svg id="svg1" viewBox="0 0 100 100">
                  <circle cx="50" cy="50" r="45" fill="#FDB900" />
                  <image href="${skill.image}" x="20" y="20" width="60" height="60" />
                  <path fill="none" stroke-linecap="round" stroke-width="5" stroke="#fff" stroke-dasharray="125.6,125.6" d="M50 10 a 40 40 0 0 1 0 80 a 40 40 0 0 1 0 -80" />
                  <text x="20" y="90" text-anchor="middle" dy="7" font-size="20">${skill.percent}</text>
              </svg>
          </i>`;

      skillsContainer.innerHTML += htmlSkill;
  }
});