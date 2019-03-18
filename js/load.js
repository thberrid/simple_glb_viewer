function loadScripts(scripts){
	console.log(scripts);
	var newScript = document.createElement("script");
	newScript.src = "js/" + scripts[0];
	newScript.addEventListener("load", function(){
		console.log(scripts[0] + " added");
		scripts.shift();
		if (scripts.length)
			loadScripts(scripts);
	});
	document.body.appendChild(newScript);
}

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
		if (request.responseText == "ok")
			loadScripts(["three.min.js", "GLTFLoader.js", "main.js"]);
	});
	var formData = new FormData();
	formData.append("file", fileInput.files[0]);
	request.send(formData);
});
