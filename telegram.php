<?php

/* https://api.telegram.org/bot1305917178:AAEYr6XRf3WKCF2OkzKFtMo3OUdPCyM9Q9Y/getUpdates,
где, XXXXXXXXXXXXXXXXXXXXXXX - токен вашего бота, полученный ранее */

$name = $_POST['userName'];
$phone = $_POST['userPhone'];
$message = $_POST['userMessage'];
$token = "1305917178:AAEYr6XRf3WKCF2OkzKFtMo3OUdPCyM9Q9Y";
$chat_id = "-466475498";
$arr = array(
  'Имя пользователя: ' => $name,
  'Телефон: ' => $phone,
  'Сообщение' => $message
);

foreach($arr as $key => $value) {
  $txt .= "<b>".$key."</b> ".$value."%0A";
};

$sendToTelegram = fopen("https://api.telegram.org/bot{$token}/sendMessage?chat_id={$chat_id}&parse_mode=html&text={$txt}","r");

?>