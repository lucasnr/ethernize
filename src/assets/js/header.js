(function () {
	var user = document.querySelector('.header .header__user');
	var userActions = user.querySelector('.header__user-actions');

	var timeout;

	user.onmouseleave = function () {
		timeout = setTimeout(function () {
			userActions.style.zIndex = '-25';
		}, 200);
	};

	user.onmouseenter = function () {
		clearTimeout(timeout);
		userActions.style.zIndex = '25';
	};
})();
