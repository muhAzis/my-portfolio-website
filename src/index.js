import './styles/style.css';

document.getElementsByTagName('button')[0].addEventListener('click', () => {
  colorChange();
});

const colorChange = () => {
  document.getElementsByTagName('nav')[0].style.backgroundColor = 'red';
};
