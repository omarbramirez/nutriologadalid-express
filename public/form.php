<?php

if (isset($_POST['send'])) {
	if(!empty($_POST['name']) && !empty($_POST['email']) && !empty($_POST['message'])) {
		$name = $_POST['name'];
		$sender = $_POST['email'];
		$receiver = "omar.ramirez94@hotmail.es";
		$message = $_POST['message'];
		$subject = "Formulario";
		$header = "From: $sender" . "\r\n";
		$header.= "Reply-To: $receiver" . "\r\n";
		$header.= "X-Mailer: PHP/" . phpversion();
		$mail = @mail($receiver,$subject,$message,$header);
	}
}
?>
