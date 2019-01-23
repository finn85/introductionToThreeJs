///////////////////////////////////////////////
//scene setup
//////////////////////////////////////////////

var scene = new THREE.Scene();

var camera = new THREE.PerspectiveCamera(
  45,
  window.innerWidth / window.innerHeight,
  0.1,
  1000);
camera.position.set(3, 3, 5);
camera.lookAt(0,0,0);

var renderer = new THREE.WebGLRenderer({
  alpha: true,
  antialias: true
});
renderer.setSize(window.innerWidth, window.innerHeight);
document.body.appendChild(renderer.domElement);

///////////////////////////////////////////////
//controls
//////////////////////////////////////////////

var controls = new THREE.OrbitControls(camera);

///////////////////////////////////////////////
//lighting
//////////////////////////////////////////////

var ambientLight  = new THREE.AmbientLight('#555');
var hemiLight     = new THREE.HemisphereLight('#FAFAFA', '#FAFAFA', 0);
var light         = new THREE.PointLight('#FAFAFA', 1, 100);

hemiLight.position.set( 0, 1, 0 );
light.position.set( 2.5, 1.5, 2 );

scene.add( ambientLight );
scene.add( hemiLight );
scene.add( light );

///////////////////////////////////////////////
//utilities
//////////////////////////////////////////////

var gridHelper = new THREE.GridHelper(null, null, 'red', 'green');
scene.add( gridHelper );

///////////////////////////////////////////////
//geometry
//////////////////////////////////////////////

var geometry = new THREE.BoxGeometry( 1, 1, 1 );
var material = new THREE.MeshPhongMaterial( { color: 0x2222ff, specular: '#f70000' } );
var cube = new THREE.Mesh( geometry, material );
scene.add( cube );

function animate() {
  requestAnimationFrame( animate );

  // cube.rotation.x += 0.01;
  cube.rotation.y += 0.01;

  controls.update();
  renderer.render( scene, camera );
}

animate();