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

	var subitems = sidebar.querySelectorAll('.sidebar__sub-items');

	for(var i = 0; i < subitems.length; i++) {
		subitems[i].onclick = function() {
			var list = this.querySelector('ul');

			var expanded = list.getAttribute('aria-expanded') === 'true';
			list.classList.toggle('show');
			list.setAttribute('aria-expanded', expanded ? 'false' : 'true');
		}
	}

	document.addEventListener('click', function(event) {
		for(var i = 0; i < subitems.length; i++) {
			if (!subitems[i].contains(event.target)) {
				var list = subitems[i].querySelector('ul');
				if(list.classList.contains('show')) {
					list.classList.remove('show');
					list.setAttribute('aria-expanded', 'false');
				}
			}
		}

		if (!sidebar.contains(event.target) && !button.contains(event.target))
			if(sidebar.classList.contains('show')) {
				sidebar.classList.remove('show');
				body.style.overflowY = 'scroll';
				body.style.paddingRight = '0px';
			}
	});
})();
