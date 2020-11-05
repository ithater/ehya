const header = () => {
  const burgerButton = document.querySelector('.button-burger');
  const menu = document.querySelector('.header-menu');

  const toggleMenu = () => {
    menu.classList.toggle('header-menu--active');
  };


  burgerButton.addEventListener('click', toggleMenu);
};

export default header;
