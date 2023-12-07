const skillsData = [
    {
        icon: "https://upload.wikimedia.org/wikipedia/commons/6/61/HTML5_logo_and_wordmark.svg",
        percentage: 50,
        name: "HTML",
    },
    {
        icon: "https://img.icons8.com/color/452/css3.png",
        percentage: 50,
        name: "CSS",
    },
    {
        icon: "https://getbootstrap.com/docs/5.0/assets/brand/bootstrap-social-logo.png",
        percentage: 50,
        name: "Bootstrap",
    },
    {
        icon: "https://www.freepnglogos.com/uploads/javascript-png/javascript-logo-transparent-logo-javascript-images-3.png",
        percentage: 50,
        name: "JavaScript",
    },
    {
        icon: "https://github.githubassets.com/images/modules/logos_page/GitHub-Mark.png",
        percentage: 50,
        name: "GitHub",
    },
    {
        icon: "./assets/git.jpg",
        percentage: 50,
        name: "Git",
    },
];

function generateSkillHTML(skill) {
    return `
        <i>
            <svg viewBox="0 0 100 100">
                <circle cx="50" cy="50" r="45" fill="#FDB900" />
                <image href="${skill.icon}" x="20" y="20" width="60" height="60" />
                <path fill="none" stroke-linecap="round" stroke-width="5" stroke="#fff"
                    stroke-dasharray="125.6,125.6" d="M50 10 a 40 40 0 0 1 0 80 a 40 40 0 0 1 0 -80" />
                <text x="50" y="30" text-anchor="middle" dy="7" font-size="20" fill="#fff">${skill.percentage}%</text>
            </svg>
        </i>
    `;
}

const hardContainer = document.getElementById('hard-container');

skillsData.forEach((skill) => {
    const skillHTML = generateSkillHTML(skill);
    hardContainer.innerHTML += skillHTML;
});
