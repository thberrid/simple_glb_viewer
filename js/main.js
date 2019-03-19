var scene = new THREE.Scene();
var camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
var renderer = new THREE.WebGLRenderer({"antialias": true});
renderer.setSize(window.innerWidth, window.innerHeight);
renderer.setClearColor(0xe2e2e2, 1);
document.body.appendChild(renderer.domElement);
renderer.domElement.id = "canvas";

var geometry = new THREE.BoxGeometry(1,1,1);
var material = new THREE.MeshBasicMaterial({color: 0x00ff00});
var objectLoader = new THREE.ObjectLoader();
camera.position.z = 5;
var loader = new THREE.GLTFLoader().setPath("file/");

loader.load("object.glb", function(object){
	scene.add(object.scene);
	var rotate = function () {
		requestAnimationFrame(rotate);
		object.scene.rotation.y += 0.01;
		renderer.render(scene, camera);
	}
	rotate();
});

window.addEventListener("resize", function(){
	camera.aspect = window.innerWidth / window.innerHeight;
	camera.updateProjectionMatrix();
	renderer.setSize(window.innerWidth, window.innerHeight);
},false);
