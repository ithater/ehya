<?php
// Файлы phpmailer
require 'PHPMailer/PHPMailer.php';
require 'PHPMailer/SMTP.php';
require 'PHPMailer/Exception.php';

//Почта получателя
$destination = 'email@mail.ru'

// Переменные, которые отправляет пользователь
$email = $_POST['email'];

// Формирование самого письма
$title = "  ";

$body = "
<h2>Новое обращение</h2>
<b>Почта:</b><br>$email
";

$Host = ""; // Host SMTP сервера вашей почты
$Login = ""; // Логин на почте
$SenderName = "";
$Password = ""; // Пароль на почте
$SMTPSecure = "ssl";
$Port = 465;
$title = "";


// Настройки PHPMailer
$mail = new PHPMailer\PHPMailer\PHPMailer();
try {
    $mail->isSMTP();   
    $mail->CharSet = "UTF-8";
    $mail->SMTPAuth   = true;
    // $mail->SMTPDebug = 2;
    $mail->Debugoutput = function($str, $level) {$GLOBALS['status'][] = $str;};

    // Настройки вашей почты
    $mail->Host       = $Host;
    $mail->Username   = $Login; 
    $mail->Password   = $Port; 
    $mail->SMTPSecure = $SMTPSecure = "ssl";;
    $mail->Port       = $Port;
    $mail->setFrom($Login, $SenderName); // Адрес самой почты и имя отправителя

    // Получатель письма
    $mail->addAddress($destination);  

// Отправка сообщения
$mail->isHTML(true);
$mail->Subject = $title;
$mail->Body = $body;    

// Проверяем отравленность сообщения
if ($mail->send()) {$result = "success";} 
else {$result = "error";}

} catch (Exception $e) {
    $result = "error";
    $status = "Сообщение не было отправлено. Причина ошибки: {$mail->ErrorInfo}";
}

// Отображение результата
// echo json_encode(["result" => $result, "resultfile" => $rfile, "status" => $status]);
// header('Location: thankyou.html');