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
    image: './assets/vue.png',
    percent: '50%'
  },
  {
    name: 'Figma',
    image: './assets/figma.png',
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
 // Función para generar las habilidades dinámicamente
/*  function generateSkills() {
  const hardSkillsContainer = document.querySelector('.hard-skills-container');

  skillsData.forEach(skill => {
      const skillElement = document.createElement('div');
      skillElement.classList.add('skill');

      const circleElement = document.createElement('div');
      circleElement.classList.add('circle');
      circleElement.style.backgroundColor = '#FDB900';

      const imageElement = document.createElement('img');
      imageElement.src = skill.image;
      imageElement.alt = skill.name;

      const percentElement = document.createElement('p');
      percentElement.classList.add('percent');
      percentElement.textContent = skill.percent;

      circleElement.appendChild(imageElement);
      skillElement.appendChild(circleElement);
      skillElement.appendChild(percentElement);

      hardSkillsContainer.appendChild(skillElement);
  });
}

// Llama a la función para generar las habilidades cuando la página está lista
document.addEventListener('DOMContentLoaded', generateSkills);
 */
// Función para generar las habilidades dinámicamente


    // Función para generar las habilidades dinámicamente
    function generateSkills() {
      const hardSkillsContainer = document.querySelector('.hard-skills-container');

      skillsData.forEach(skill => {
          const skillElement = document.createElement('i');
          skillElement.classList.add('skill');

          const circleElement = document.createElement('div');
          circleElement.classList.add('circle');
          circleElement.style.backgroundColor = '#FDB900';

          const imageElement = document.createElement('img');
          imageElement.src = skill.image;
          imageElement.alt = skill.name;

          const percentElement = document.createElement('p');
          percentElement.classList.add('percent');
          percentElement.textContent = skill.percent;

          circleElement.appendChild(imageElement);
          skillElement.appendChild(circleElement);
          skillElement.appendChild(percentElement);

          hardSkillsContainer.appendChild(skillElement);
      });
  }

  // Llama a la función para generar las habilidades cuando la página está lista
  generateSkills();
});