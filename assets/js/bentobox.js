var Bento = (function() {
	var main = {};

	return main;
}());

Bento.Utils = (function() {
	var utils = {};
	
	utils.isMobile = function() {
		return (window.matchMedia("(max-width: 800px)").matches);
	}

	return utils;
}());


Bento.Newsletter = (function() {
	var newsletter = {};

	newsletter.options = {
		formSelector: 'form#email_newsletter',
		successMessage: 'div.success',
		errorContainer: 'div.error',
	};

	newsletter.handleFormSubmit = function(event) {
		event.preventDefault();
		var form = $(this);

		$.ajax({
			type: 'POST',
			url: form.attr('action'),
			data: form.serialize(),
			success: newsletter.formSuccess,
			error: newsletter.formError,
		});
	};

	newsletter.formSuccess = function(result) {
		$(newsletter.options.successMessage).fadeIn();
	};

	newsletter.initialize = function(options) {
		for (var attributeName in options) {
			newsletter.options[attributeName] = options[attributeName];
		}

		if (newsletter.options.formSelector !== undefined) {
			$(newsletter.options.formSelector).on('submit', newsletter.handleFormSubmit);
		}
	};

	return newsletter;	
}());


Bento.Reservations = (function() {
	var reservations = {};
	
	options = {
		selector: "a.reserve",
	};

	reservations.handleOpentable = function(event) {
		var reserveUrl = 'http://www.opentable.com/single.aspx?rid=' + options.opentable_id + '&amp;restref=' + options.opentable_id;

		if (Bento.Utils.isMobile()) {
			window.location.href = reserveUrl;
		}

		// Needs code to show modal
	};

	reservations.handleReservation = function(event) {
		event.preventDefault();
		console.log(options.provider);
		switch(options.provider) {
			case 'opentable':
				reservations.handleOpentable();
			default: 
				return;
		}
	};

	reservations.initialize = function(userOptions) {
		for (var attributeName in userOptions) {
			options[attributeName] = userOptions[attributeName];
		}
		console.log(options);
		$(options.selector).on('click', reservations.handleReservation);
	};

	return reservations;	
}());

Bento.Reservations.initialize({provider: 'opentable', opentable_id: '123123'});
