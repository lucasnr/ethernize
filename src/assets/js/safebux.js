(function () {
	var main = $('main');
	var tabs = main.find('.tabs ul li');
	var sections = main.find('.tabs ~ section');

	tabs.each(tabCallback);

	function tabCallback(index, tab) {
		$(tab).click(function () {
			if ($(this).hasClass('selected')) return;
			tabs.each(removeClass);
			sections.each(removeClass);

			$(tabs[index]).addClass('selected');
			$(sections[index]).addClass('selected');
		});
	}

	function removeClass(index, element) {
		$(element).removeClass('selected');
	}
})();
