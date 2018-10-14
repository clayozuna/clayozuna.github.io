<?php
$name = $_POST['name']; // The following three tags are the information sent from the contact form
$email = $_POST['email'];
$message = $_POST['message'];
$formcontent = "From: $name \n Message: $message"; //Should variable be {$name}?
$recipient = "clayozuna@tamu.edu"; //Where form will be sent to
$subject  ="Website Contact Form"; // Subject of mail sent to me
$mailheader = "From: $email \r\n";
mail($recipient, $subject, $formcontent, $mailheader)
echo "Thank you! I'll be in touch as soon as possible." . " -" . "<a href='../contact.html' style='text-decoration:none;color:#ff0099;'> Return Home</a>"; //What user will see after submitting form
?> //Above form is a test to see if page will return to contact form after emailing imformation to me.
