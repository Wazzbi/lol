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
    error_reporting(0);
    
    $input = file_get_contents("php://input");
    $data = array();
    parse_str($input, $data);
    
    $_ACTION = $data["action"];
    $_REGION = $data["region"];
    $_NAME = $data["name"]; //getSummonerData
    $_ID = $data["id"]; //getSummonerLeague + getSpectatrData
    $_ACC_ID = $data["accID"]; //getMatchHistory
    $_GAME_ID = $data["gameId"]; //getMatchDetail

    $_API_KEY = "RGAPI-5abc311f-6eca-4f84-85f6-4204782c8384";

    error_reporting(0);

    //SUMMONER
    if ($_ACTION == "getSummonerData") {
        $ch = curl_init();
        curl_setopt($ch, CURLOPT_RETURNTRANSFER, true);
        curl_setopt($ch, CURLOPT_URL, "https://".$_REGION.".api.riotgames.com/lol/summoner/v4/summoners/by-name/".$_NAME."?api_key=".$_API_KEY);
        $content = curl_exec($ch);
        echo $content;
    }
    //SUMMONER LEAGUE
    if ($_ACTION == "getSummonerLeague") {
        $ch = curl_init();
        curl_setopt($ch, CURLOPT_RETURNTRANSFER, true);
        curl_setopt($ch, CURLOPT_URL, "https://".$_REGION.".api.riotgames.com/lol/league/v4/entries/by-summoner/".$_ID."?api_key=".$_API_KEY);
        $content = curl_exec($ch);
        echo $content;
    }
    //MATCH HISTORY
    if ($_ACTION == "getMatchHistory") {
        $ch = curl_init();
        curl_setopt($ch, CURLOPT_RETURNTRANSFER, true);
        curl_setopt($ch, CURLOPT_URL, "https://".$_REGION.".api.riotgames.com/lol/match/v4/matchlists/by-account/".$_ACC_ID."?api_key=".$_API_KEY);
        $content = curl_exec($ch);
        echo $content;
    }
    //SPECTATOR DATA
    if ($_ACTION == "getSpectatrData") {
        $ch = curl_init();
        curl_setopt($ch, CURLOPT_RETURNTRANSFER, true);
        curl_setopt($ch, CURLOPT_URL, "https://".$_REGION.".api.riotgames.com/lol/spectator/v4/active-games/by-summoner/".$_ID."?api_key=".$_API_KEY);
        $content = curl_exec($ch);
        echo $content;
    }
    //MATCH DETAIL
    if ($_ACTION == "getMatchDetail") {
        $ch = curl_init();
        curl_setopt($ch, CURLOPT_RETURNTRANSFER, true);
        curl_setopt($ch, CURLOPT_URL, "https://".$_REGION.".api.riotgames.com/lol/match/v4/matches/".$_GAME_ID."?api_key=".$_API_KEY);
        $content = curl_exec($ch);
        echo $content;
    }
}
    
?>