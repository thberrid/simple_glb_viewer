<?php

if ($_FILES['file']['error'] > 0)
	echo "upload error";
else if ($_FILES['file']['size'] > 5000000)
	echo "upload error";
else {
	$extension = strtolower(substr(strrchr($_FILES['file']['name'], '.'), 1));
	if ($extension != "glb")
		echo "incorrect extension";
	else {
		if (file_exists("object.glb"))
			unlink("object.glb");
		if (!(move_uploaded_file($_FILES['file']['tmp_name'], "object.glb")))
			echo "transfert failure";
		else
			echo "ok";
	}
}
