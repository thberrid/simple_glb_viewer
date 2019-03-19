<!doctype HTML>
<html lang="fr">
	<head>
		<meta charset="utf-8">
		<title>3d viewer</title>
		<meta name="viewport" content="width=device-width, maximum-scale=1.0, minimum-scale=1.0">
		<link rel="stylesheet" href="css/style.css" type="text/css" media="screen">
	</head>
	<body>
		<div id="import-box">
			<h1>import stuff</h1>
			<p>usage: stuff must be a <a target="_blank" href="https://en.wikipedia.org/wiki/GlTF">.glb</a> and up to 5Mo.</p>
			<form>
				<input type="hidden" name="MAX_FILE_SIZE" value="5242880">
				<label for="file">select a .glb</label>
				<input id="file-input" type="file" name="file">
				<progress id="file-progress" value="0"></progress>
			</form>
		</div>
		<script type="text/javascript" src="js/three.min.js"></script>
		<script type="text/javascript" src="js/GLTFLoader.js"></script>
		<script type="text/javascript" src="js/load.js"></script>
		<?php	$file = glob("file/*.glb");
			if (count($file)) : ?>
		<script type="text/javascript" src="js/main.js"></script>
		<?php	endif; ?>
	</body>
</html>
