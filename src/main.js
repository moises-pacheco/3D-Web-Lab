import * as THREE from 'three';

//Obtener el canvas:

const canva = document.getElementById('miCanvas');

//1. Creamos la escena
const scene = new THREE.Scene();
//2. Creamos la perspectiva de la camara.
const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 100);
//3. Motor de renderizado:
const renderer = new THREE.WebGLRenderer();
document.body.appendChild(renderer.domElement); //Esto anade el canvas al HTML
//3.1 Establecer el tamanio de la ventana del render.
renderer.setSize(window.innerHeight, window.innerHeight);

//Los graficos necesitan actualizarse constantemente, por eso necesitamos una funcion:

function animate(){
    requestAnimationFrame(animate);
    renderer.render(scene, camera);
}

