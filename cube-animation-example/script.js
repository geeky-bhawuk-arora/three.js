// import * as THREE from 'https://cdn.jsdelivr.net/npm/three@0.160.0/build/three.module.js';

const scene = new THREE.Scene();
const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);

const geometry = new THREE.BoxGeometry(1, 1, 1);
const material = new THREE.MeshBasicMaterial({ color: 0x00ff00 });
const cube = new THREE.Mesh(geometry, material);
scene.add(cube);

camera.position.z = 5;

const canvas = document.querySelector("#draw");
const renderer = new THREE.WebGLRenderer({ canvas: canvas, antialias: true });
renderer.setSize(window.innerWidth, window.innerHeight); 

// const clock = new THREE.Clock();

function animate() {
    window.requestAnimationFrame(animate);
    cube.rotation.x += 0.01;
    // cube.rotation.x += clock.getElapsedTime();
    cube.rotation.z += 0.01;
    renderer.render(scene, camera);
}

animate(); 