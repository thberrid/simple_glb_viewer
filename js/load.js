var fileInput = document.getElementById("file-input");
fileInput.addEventListener("change", function(){
	var request = new XMLHttpRequest();
	request.open("POST", "file/upload.php");
	var progress = document.getElementById("file-progress");
	progress.style.display = "block";
	request.upload.addEventListener("progress", function(event){
		progress.value = event.loaded;
		progress.max = event.total;
	});
	request.addEventListener("load", function(){
		console.log(request.responseText);
		if (request.responseText == "ok"){
			var canvas = document.getElementById("canvas");
			if (canvas){
				canvas.parentNode.removeChild(canvas);
				oldScript = document.getElementsByTagName("script")[3];
				oldScript.parentNode.removeChild(oldScript);
			}
			var newScript = document.createElement("script");
			newScript.src = "js/main.js";
			document.body.appendChild(newScript);
		}
		else
			alert(request.responseText);
	});
	var formData = new FormData();
	formData.append("file", fileInput.files[0]);
	request.send(formData);
});
