<?
//get the values from url
$max = $_GET["max"];
$add = $_GET["add"];
//check blockchain
$raw = file_get_contents('http://blockchain.info/q/getreceivedbyaddress/'.$add.'?cors=true', true);
$ubtc = $raw/100000;
$nimg = round($ubtc/$max*24);
//get the right image
$img='http://bittip.net78.net/tip/'.$nimg.'.png';
header("Content-Type: image/png");
readfile($img);
?>