<?php

require 'libs/phpmailer/PHPMailerAutoload.php';
$mail = new PHPMailer;
$mail->CharSet = 'utf-8';

$name = $_POST['name'];
$style = $_POST['style'];
$color = $_POST['color'];
$material = $_POST['material'];
$money = $_POST['money'];
$phone = $_POST['phone'];
$Email = $_POST['mail'];
$text = $_POST['text'];
$theme = $_POST['theme'];

//$mail->SMTPDebug = 3;                               // Enable verbose debug output

$mail->isSMTP();                                      // Set mailer to use SMTP
$mail->Host = 'smtp.mail.ru';  																							// Specify main and backup SMTP servers
$mail->SMTPAuth = true;                               // Enable SMTP authentication
$mail->Username = 'as@reallife.pro'; // Ваш логин от почты с которой будут отправляться письма
$mail->Password = 'qweasdzxc777zxc'; // Ваш пароль от почты с которой будут отправляться письма
$mail->SMTPSecure = 'ssl';                            // Enable TLS encryption, `ssl` also accepted
$mail->Port = 465; // TCP port to connect to / этот порт может отличаться у других провайдеров

$mail->setFrom('as@reallife.pro'); // от кого будет уходить письмо?
$mail->addAddress('i.shurmanov@reallife.pro');     // Кому будет уходить письмо
//$mail->addAddress('ellen@example.com');               // Name is optional
//$mail->addReplyTo('info@example.com', 'Information');
//$mail->addCC('cc@example.com');
//$mail->addBCC('bcc@example.com');
//$mail->addAttachment('/var/tmp/file.tar.gz');         // Add attachments
//$mail->addAttachment('/tmp/image.jpg', 'new.jpg');    // Optional name
$mail->isHTML(true);                                  // Set email format to HTML

$mail->Subject = 'Заявка с тестового сайта';
$mail->Body    = 'Пользователь:  ' . $name . '  ' . $phone . '  ' . $Email . '  оставил заявку <br>' . $style . '<br>' . $color . '<br>' . $material . '<br>' . $money;
$mail->AltBody = '';

?>
