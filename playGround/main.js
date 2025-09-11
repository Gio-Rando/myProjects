import * as THREE from "three"
// Create Scene
const scene = new THREE.Scene();
scene.background = new THREE.Color("#F0F0F0")

// Create Camera

const camera = new THREE.PerspectiveCamera(60, window.innerWidth / window.innerHeight)
camera.position.z = 5

// Create and add cube OBJECT

const geometry = new THREE.ConeGeometry();
const material = new THREE.MeshPhysicalMaterial({color:"#468585", emissive: "#468585", clearcoat: 10,clearcoatRoughness:0,})

const cube = new THREE.Mesh(geometry,material)
scene.add(cube)

// add lighting
const light = new THREE.DirectionalLight(0x9cdba6, 10)
light.position.set(1,1,1)
scene.add(light)

// render
const renderer = new THREE.WebGLRenderer()
renderer.setSize(window.innerWidth  , window.innerHeight -1)

document.body.appendChild(renderer.domElement)

// render and animate scene

function animate(){
    requestAnimationFrame(animate)
    document.addEventListener("mousemove",(e)=>{
        e.preventDefault()
        console.log(e);
        camera.position.x = e.clientX / 10000
        camera.position.y = e.clientY / 10000
    })
    renderer.render(scene,camera)
}
animate()