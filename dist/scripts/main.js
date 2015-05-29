$(document).ready(function() {
	$('#submit-button').click(function (e) {
		e.preventDefault(); 

		var error = false; 
		var name = $('#name').val();
		var email = $('#email').val();
		var website = $('#website').val();
		var message = $('#message').val();

		if(name.length == 0) {
			error = true;
			$('#name-error').show();
		}
		else {
			$('#name-error').hide();
		}


		if (email.length == 0) {
			error = true;
			$('#email-error').show();
		}
		else {
			$('#email-error').hide();
		}

		if (email.indexOf('@') < 0) {
			error = true; 
			$('#email-error2').show();
		}
		else {
			$('#email-error2').hide();
		}


		if (website.length == 0) {
			error = true;
			$('#website-error').show();
		}
		else {
			$('#website-error').hide();
		}
		if (website.indexOf('http://') < 0) {
			error = true; 
			$('#website-error2').show();
		}
		else {
			$('#website-error2').hide();
		}


		if(message.length == 0) {
			error = true;
			$('#message-error').show();
		}
		else {
			$('#message-error').hide();
		}

		// if (error == false) {
		
	});
})
