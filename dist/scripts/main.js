$(document).ready(function() {
	$('#submit_button').click(function (e) {
		e.preventDefault(); 

		var error = false; 
		var name = $('#name').val();
		var email = $('#email').val();
		var website = $('#website').val();
		var message = $('#message').val();

		if(name.length == 0) {
			error = true;
			$('#name_error').fadeIn(500);
		}
		else {
			$('#name_error').fadeOut(500);
		}


		if (email.length == 0) {
			error = true;
			$('#email_error').fadeIn(500);
		}
		else {
			$('#email_error').fadeOut(500);
		}

		if (email.indexOf('@') == '-1') {
			error = true; 
			$('#email_error2').fadeIn(500);
		}
		else {
			$('#email_error2').fadeOut(500);
		}


		if (website.length == 0) {
			error = true;
			$('#website_error').fadeIn(500);
		}
		else {
			$('#website_error').fadeOut(500);
		}
		if (website.indexOf('http://') == '-1') {
			error = true; 
			$('#website_error2').fadeIn(500);
		}
		else {
			$('#website_error2').fadeOut(500);
		}


		if(message.length == 0) {
			error = true;
			$('#message_error').fadeIn(500);
		}
		else {
			$('#message_error').fadeOut(500);
		}

		// if (error == false) {
		
	});
})
