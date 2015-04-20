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
			
			});