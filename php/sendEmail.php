<?php
	
	$name = $_POST["name"];
	$subject = $_POST["subject"];
	$msg = $_POST["message"];
	$email = $_POST["email"];
	
	mail("braggnickp@gmail.com",$subject, $msg);

?>