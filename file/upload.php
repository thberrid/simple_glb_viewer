<?php

if ($_FILES['file']['error'] > 0)
	echo "upload error";
else if (!$_FILES['file']['size'])
	echo "size over";
else {
	$extension = strtolower(substr(strrchr($_FILES['file']['name'], '.'), 1));
	if ($extension != "glb")
		echo "wrong extension";
	else {
		if (file_exists("object.glb"))
			unlink("object.glb");
		if (!(move_uploaded_file($_FILES['file']['tmp_name'], "object.glb")))
			echo "transfert failure";
		else
			echo "ok";
	}
}
