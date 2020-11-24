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

$champSource = 'dragontail-10.10.5/10.10.3224670';
$jsonChampions = file_get_contents("$champSource/data/en_US/championFull.json");
$champions = json_decode($jsonChampions, true);

if(isset($_POST['champIconName'])){
    $img = "./$champSource/img/champion/{$_POST['champIconName']}.png";
    header('Content-Type: image/png');
    readfile($img);
}

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

    $_API_KEY = "RGAPI-070f9e41-3b34-455e-9e88-43425491614a";

    error_reporting(0);

    switch ($_ACTION) {
        //SUMMONER
        case 'getSummonerData':
            $_REQUEST = "https://$_REGION.api.riotgames.com/lol/summoner/v4/summoners/by-name/$_NAME?api_key=$_API_KEY";
            break;
        //SUMMONER LEAGUE
        case 'getSummonerLeague':
            $_REQUEST = "https://$_REGION.api.riotgames.com/lol/league/v4/entries/by-summoner/$_ID?api_key=$_API_KEY";
            break;
        //MATCH HISTORY
        case 'getMatchHistory':
            $_REQUEST = "https://$_REGION.api.riotgames.com/lol/match/v4/matchlists/by-account/$_ACC_ID?api_key=$_API_KEY";
            break;
        //SPECTATOR DATA
        case 'getSpectatrData':
            $_REQUEST = "https://$_REGION.api.riotgames.com/lol/spectator/v4/active-games/by-summoner/$_ID?api_key=$_API_KEY";
            break;
        //MATCH DETAIL
        case 'getMatchDetail':
            $_REQUEST = "https://$_REGION.api.riotgames.com/lol/match/v4/matches/$_GAME_ID?api_key=$_API_KEY";
            break;
        
        default:
            # code...
            break;
    }

    $ch = curl_init();
    curl_setopt($ch, CURLOPT_RETURNTRANSFER, true);
    curl_setopt($ch, CURLOPT_URL, $_REQUEST);
    $content = curl_exec($ch);
    echo $content;
}
    
?>