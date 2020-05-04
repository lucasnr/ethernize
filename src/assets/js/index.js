const form = document.querySelector('#login-form');
form.onsubmit = function (event) {
	event.preventDefault();
	window.location.replace('./dashboard.html');
};
