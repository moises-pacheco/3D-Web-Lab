import * as THREE from 'three';

//Obtener el canvas:

//1. Creamos la escena
const scene = new THREE.Scene();
//2. Creamos la perspectiva de la camara.
const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 100);
//3. Motor de renderizado:
const renderer = new THREE.WebGLRenderer();
document.body.appendChild(renderer.domElement); //Esto anade el canvas al HTML
//3.1 Establecer el tamanio de la ventana del render.
renderer.setSize(window.innerWidth, window.innerHeight);
renderer.setClearColor(0x0000f)

//Objetos:

//1. Creamos el cubo
const geometryCube = new THREE.BoxGeometry(1,1,1,);
const materialCube = new THREE.MeshStandardMaterial({color:"white"});
const cube = new THREE.Mesh(geometryCube, materialCube);

camera.position.z = 4;
camera.position.y = 2;
camera.lookAt(0,0,0);
scene.add(cube);

//2. Creamos la luz 
const light = new THREE.PointLight( "green", 400, 100)
light.position.y = 1;
light.position.z = 2;
scene.add(light);

const lightHelper = new THREE.PointLightHelper(light, 1);
scene.add(lightHelper);

const gridHelper = new THREE.GridHelper(10, 10);
scene.add(gridHelper);





//Los graficos necesitan actualizarse constantemente, por eso necesitamos una funcion:

function animate(){
    requestAnimationFrame(animate);
    renderer.render(scene, camera);
}

animate();

