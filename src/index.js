// css linking
import './styles/style.css';
// image dir
import fbIcon from './img/facebook-logo-icon.png';
import fbLogo from './img/facebook-logo.png';
import igIcon from './img/instagram-logo-icon.png';
import iglogo from './img/instagram-logo.png';
import liIcon from './img/linkedin-logo-icon.png';
import liLogo from './img/linkedin-logo.png';
import ghIcon from './img/github-logo-icon.png';
import ghLogo from './img/github-logo.png';
import { engineering, digitalCreation, softSkill } from './data/data';
// -------------------------

document.addEventListener('DOMContentLoaded', () => {
  const navbar = document.querySelector('nav');
  const navPos = navbar.offsetTop;
  const hamburgerMenu = document.querySelector('#hamburgerMenu');
  const hamburgerBack = document.querySelector('nav ul.menu-list > li:nth-of-type(1)');
  const menu = document.querySelector('.menu-list');
  const socialMedia = document.querySelector('.social-media');
  const socialMediaItems = document.querySelectorAll('.soc-item');
  const socFacebook = document.querySelector('#social1');
  const socInstagram = document.querySelector('#social2');
  const socLinkedin = document.querySelector('#social3');
  const socGithub = document.querySelector('#social4');
  const skillsetsContainer = document.querySelector('.skills-container');
  const skillButtons = document.querySelectorAll('.skillsets-select button');

  const navbarPosition = () => {
    if (window.pageYOffset > navPos) {
      navbar.classList.add('sticky-navbar');

      document.body.style.paddingTop = `${navbar.clientHeight}px`;
    } else {
      navbar.classList.remove('sticky-navbar');

      document.body.style.paddingTop = 0;
    }
  };

  const skillTemplate = (data) => {
    data.forEach((item, i) => {
      skillsetsContainer.innerHTML += `
        <style>
          #skills .skills-container .skill-card${i} .skill-bar .bar .bar-level {
            width: ${item.skill}%;
          }
        </style>
  
        <div class="skill-card skill-card${i}">
          <h3 class="skillName">${item.name}</h3>
          <div class="skill-bar">
            <div class="bar">
              <div class="bar-level"></div>
            </div>
            <h4 class="level">${item.skill}%</h4>
          </div>
        </div>
      `;
    });
  };
  skillTemplate(engineering);

  skillButtons.forEach((item, i) => {
    item.addEventListener('click', () => {
      switch (i) {
        case 0:
          skillsetsContainer.innerHTML = '';
          skillTemplate(engineering);
          break;
        case 1:
          skillsetsContainer.innerHTML = '';
          skillTemplate(digitalCreation);
          break;
        case 2:
          skillsetsContainer.innerHTML = '';
          skillTemplate(softSkill);
          break;
      }
    });
  });

  const socialMediaIcon = () => {
    socialMedia.style.bottom = `-${socialMedia.clientHeight / 2}px`;
    if (window.innerWidth <= 576) {
      socFacebook.setAttribute('src', fbIcon);
      socInstagram.setAttribute('src', igIcon);
      socLinkedin.setAttribute('src', liIcon);
      socGithub.setAttribute('src', ghIcon);
    } else {
      socFacebook.setAttribute('src', fbLogo);
      socInstagram.setAttribute('src', iglogo);
      socLinkedin.setAttribute('src', liLogo);
      socGithub.setAttribute('src', ghLogo);
    }
  };

  socialMediaItems.forEach((item, i) => {
    item.addEventListener('click', () => {
      switch (i) {
        case 0:
          window.open('https://web.facebook.com/muh.ab.azis');
          break;
        case 1:
          window.open('https://www.instagram.com/muh_abdulazis/');
          break;
        case 2:
          window.open('https://www.linkedin.com/in/muhabdulazis/');
          break;
        case 3:
          window.open('https://github.com/muhAzis');
          break;
      }
    });
  });

  hamburgerMenu.addEventListener('click', () => {
    menu.classList.add('hamburgerControl');
  });

  hamburgerBack.addEventListener('click', () => {
    menu.classList.remove('hamburgerControl');
  });

  navbarPosition();
  socialMediaIcon();

  window.onscroll = () => {
    navbarPosition();
  };

  window.onresize = () => {
    socialMediaIcon();
  };
});
