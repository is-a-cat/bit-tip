<!DOCTYPE HTML PUBLIC "-//W3C//DTD HTML 4.01 Transitional//EN" "http://www.w3.org/TR/html4/loose.dtd">
<html>
<head>
<meta http-equiv="Content-Type" content="text/html;charset=iso-8859-1"/>
<title>Donate</title>
<link rel="shortcut icon" href="favicon.ico" type="image/x-icon"/>
<link rel="stylesheet" type="text/css" href=".css"/>
</head>
<body>
<center>
<div style='text-align:left; width:600px;'>
<h1 style='position:relative;right:40px;'><?php echo ($_GET["name"]."'s Bitcoin jar"); ?></h1>
<div id='donate'></div>
<script>
<?php
$max = $_GET["max"];
$add = $_GET["add"];
echo ("var address='".$add."';\n var max=".$max.";");
?>
</script>
<script src="http://bittip.net78.net/tipcoin.js"></script>
</div>
</center>
<h3><a href='index.html'><font color="#E0841B"> Get your own Bitcoin jar </a></h3></font>
</body>
</html>