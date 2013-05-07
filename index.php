<?PHP
if(isset($_GET['_escaped_fragment'])){
	$_escaped_fragment = $_GET['_escaped_fragment'];
	include("cache/$_escaped_fragment.html");
	exit();
};

?>
<!DOCTYPE html>
<html lang="en">
<head>
	<meta charset="utf-8">
	<title>Phapplejax</title>
	<meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=no">
	<meta name="description" content="A Boilerplate for PHP+Bootstrap+AJAX Apps">
	<meta name="author" content="Karmanetics">
	<!-- Le styles -->
	<link href="assets/css/bootstrap.css" rel="stylesheet">
	<style>
	  body { padding-top: 80px; /* 60px to make the container go all the way
	  to the bottom of the topbar */ }
	</style>
	<link href="assets/css/bootstrap-responsive.css" rel="stylesheet">
	<!-- Le HTML5 shim, for IE6-8 support of HTML5 elements -->
	<!--[if lt IE 9]>
	  <script src="http://html5shim.googlecode.com/svn/trunk/html5.js">
	  </script>
	<![endif]-->
	<!-- Le fav and touch icons -->
	<link rel="shortcut icon" href="assets/ico/favicon.ico">
	<link rel="apple-touch-icon-precomposed" sizes="144x144" href="assets/ico/apple-touch-icon-144-precomposed.png">
	<link rel="apple-touch-icon-precomposed" sizes="114x114" href="assets/ico/apple-touch-icon-114-precomposed.png">
	<link rel="apple-touch-icon-precomposed" sizes="72x72" href="assets/ico/apple-touch-icon-72-precomposed.png">
	<link rel="apple-touch-icon-precomposed" href="assets/ico/apple-touch-icon-57-precomposed.png">
	<link rel="stylesheet" href="assets/css/phapplejax.css">
</head>
<body>
	<div id="navbar" class="navbar navbar-fixed-top navbar-inverse"></div>
	<div id="mainContainer" class="container"></div>
	<div id="modal" class="modal hide fade" tabindex="-1" role="dialog" aria-labelledby="modalLabel" aria-hidden="true"></div>
	<script src="assets/js/jquery.js"></script>
	<script src="assets/js/json2.js"></script>
	<script src="assets/js/underscore.js"></script>
	<script src="assets/js/backbone.js"></script>
	<script src="assets/js/bootstrap.js"></script>
	<script src="assets/js/epona.js"></script> 
</body>
</html>
