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
    $input = file_get_contents("php://input");
    $data = array();
    parse_str($input, $data);

    $_ID = $data["id"];
    $_REGION = $data["region"];
    $_API_KEY = "RGAPI-454ed027-c5ac-4845-89f4-94c6a13724f6";

    $ch = curl_init();
    curl_setopt($ch, CURLOPT_RETURNTRANSFER, true);
    curl_setopt($ch, CURLOPT_URL, "https://".$_REGION.".api.riotgames.com/lol/spectator/v4/active-games/by-summoner/".$_ID."?api_key=".$_API_KEY);
    $content = curl_exec($ch);
    echo $content;
}
    
?>