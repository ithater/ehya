const header = () => {
	const burgerButton = document.querySelector('.button-burger');
	const closeBtn = document.querySelector('.header-menu__button-close');
	const menu = document.querySelector('.header-menu');


	const openMenu = () =>  menu.classList.add('header-menu--active');
	const closeMenu = () =>  menu.classList.remove('header-menu--active');
	let isOpen = false;

	document.addEventListener('click', evt => {
		const target = evt.target;

		switch (target) {
			case burgerButton:
				isOpen = true;
				openMenu();
				break;
			case closeBtn:
				isOpen = false;
				closeMenu();
				break;
			default:
				if (isOpen) {
					isOpen = false;
					closeMenu();
				}
		}


	});
};

export default header;
