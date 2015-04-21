$(document).ready(function(){
				
	$('#linkHome').click(function(){
	
		$('html,body').animate({
		
			scrolltop: $( $(this).attr('href') ).offset().top
		
		}, 500);
	
	});
	
	$('#linkAbout').click(function(){
		
		$('html,body').animate({
		
			scrolltop: $( $(this).attr('href') ).offset().top
		
		}, 500);
	
	});
	
	
	$('#linkContact').click(function(){
		
		$('html,body').animate({
			
			scrolltop: $( $(this).attr('href') ).offset().top
		
		}, 500);
	
	});
			
	$('#btnSend').click(function(){
		
		$.ajax({
		
			url:'/php/sendEmail.php',
			type: 'POST',
			datatype: 'json',
			data: {
				name: $('#contactName').val(),
				subject: $('#emailSubject').val(),
				message: $('#emailMessage').val(),
				email: $('#emailSender').val(),
			},
			success: function(){
				alert('Thank you!');
			}
		
		});
	
	});
});