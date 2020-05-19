(function () {
	var button = document.querySelector('.header__button');
	var sidebar = document.querySelector('.sidebar');

	var body = document.body;
	button.onclick = function () {
		var overflow = body.style.overflowY;
		var paddingRight = body.style.paddingRight;
		var paddingValue = window.innerWidth - body.offsetWidth + 'px';

		body.style.overflowY = overflow === 'hidden' ? 'scroll' : 'hidden';
		body.style.paddingRight =
			paddingRight === paddingValue ? '0px' : paddingValue;

		sidebar.classList.toggle('show');
	};
})();
