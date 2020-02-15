<?php

header("Access-Control-Allow-Origin: *");
//header("Access-Control-Allow-Credentials: true");
//header("Access-Control-Allow-Methods: POST, GET");
//header('P3P: CP="CAO PSA OUR"'); // Makes IE to support cookies
//header('content-type: text/plain');  
//header("content-type: application/x-www-form-urlencoded");
//header("Access-Control-Allow-Headers: Content-Type, Authorization, X- 
//Requested-With");
//header("Access-Control-Max-Age: 172800");

if(isset($_POST))
{
    $_ACC_ID = file_get_contents("php://input");
    $_API_KEY = "RGAPI-1c998c16-634a-4ba2-a775-5ba6364fc712";

    $ch = curl_init();
    curl_setopt($ch, CURLOPT_RETURNTRANSFER, true);
    curl_setopt($ch, CURLOPT_URL, "https://eun1.api.riotgames.com/lol/match/v4/matchlists/by-account/".$_ACC_ID."?api_key=".$_API_KEY);
    $content = curl_exec($ch);
    echo $content;
}
    
?>