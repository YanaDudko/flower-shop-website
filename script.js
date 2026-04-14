const burger = document.querySelector('.burger');
const nav = document.querySelector('.main-header__menu-nav');
const headerInner = document.querySelector('.main-header__inner');

burger.addEventListener('click', () => {
	burger.classList.toggle('burger--open');
	nav.classList.toggle('main-header__menu-nav--open');
	headerInner.classList.toggle('main-header__inner--open');

	const isOpen = burger.classList.contains('burger--open');

	burger.setAttribute('aria-expanded', isOpen ? 'true' : 'false');
	burger.setAttribute('aria-label', isOpen ? 'Закрыть меню' : 'Открыть меню');
});