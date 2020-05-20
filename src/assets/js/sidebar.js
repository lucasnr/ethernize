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

	var subitems = sidebar.querySelector('.sidebar__sub-items');
	var subitemsList = subitems.querySelector('ul');
	subitems.onclick = function() {
		var expanded = subitemsList.getAttribute('aria-expanded') === 'true';
		subitemsList.classList.toggle('show');
		subitemsList.setAttribute('aria-expanded', expanded ? 'false' : 'true');
	}

	document.addEventListener('click', function(event) {
		if (!subitems.contains(event.target))
			if(subitemsList.classList.contains('show')) {
				subitemsList.classList.remove('show');
				subitemsList.setAttribute('aria-expanded', 'false');
			}

		if (!sidebar.contains(event.target) && !button.contains(event.target))
			if(sidebar.classList.contains('show')) {
				sidebar.classList.remove('show');
				body.style.overflowY = 'scroll';
				body.style.paddingRight = '0px';
			}
	});
})();
