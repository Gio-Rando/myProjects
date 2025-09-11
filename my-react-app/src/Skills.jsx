import {Canvas, useFrame , useThree } from "@react-three/fiber"
import { useGLTF,  CameraControls, OrbitControls} from '@react-three/drei'
import { useRef , useEffect, forwardRef, useImperativeHandle, useState } from "react"
import { AnimationMixer,  CubeTextureLoader } from 'three'
import brake from "./assets/brake.png"
import sky from "./assets/sky.webp";
import * as THREE from 'three';

const Camera = forwardRef((props,ref)=>{
  let clear = 0
  const camera = useRef()
  let [i,setI] = useState(0)
  const [isPaused, setIsPaused] = useState(false);
  const positions = [
  new THREE.Vector3(13.79023164760027, 2.3798853730546528, 0.4717591722949635),
  new THREE.Vector3(0.3172315478604169, 2.3798853730546528, -13.794651490928018),
  new THREE.Vector3(-13.7937104757925, 2.3798853730546528, -0.3558046108930727),
  new THREE.Vector3(-0.4717591722949635, 2.3798853730546528, 13.79023164760027)
];

  useEffect(()=>{
    camera.current?.setLookAt(0, 2.37, 13.8, 0, 0, 0, false)
  },[])
  useImperativeHandle(ref,()=>({
    rotate:(i, func)=>{
        setI(i)
        setIsPaused(true);
        setTimeout(()=>{
          setTimeout(()=>{
            camera.current?.setLookAt(positions[i].x, positions[i].y, positions[i].z, 0, 0, 0, false)
            func()
          },500)
          
        },[3300,3800,3750,3650][i]
      )
  }
}))


useFrame((state, delta) => {
  if ([camera.current.camera.position.x < positions[i].x - 0.565 && camera.current.camera.position.z > positions[i].z ,
    camera.current.camera.position.x - 3.5 > positions[i].x && camera.current.camera.position.z  > positions[i].z, 
    camera.current.camera.position.x  > positions[i].x+0.53 && camera.current.camera.position.z  < positions[i].z,
  camera.current.camera.position.x  < positions[i].x - 3.5  && camera.current.camera.position.z < positions[i].z][i] && isPaused) {

    clear++
    if (clear>100) {
      console.clear(
        clear=0
      )
    }
    camera.current?.rotate(0.017, 0, true)
  }
})
  return <CameraControls enabled={false} minPolarAngle={1.4} maxPolarAngle={1.4} maxDistance={14} minDistance={14} ref={camera}/>
})

const Background = ()=> {
    const {scene} = useThree()

  useEffect(() => {
    const loader = new CubeTextureLoader()
    const texture = loader.load([sky, sky, sky, sky, sky, sky])
    scene.background = texture

    return () => {
      scene.background = null 
    }
  }, [scene])
    return null
}

const Island = forwardRef( (props,ref)=>{
  const group = useRef()
  const { scene, animations } = useGLTF("/island.glb" )
  const mixer = useRef()
  const actions = useRef([])
  const isPaused = useRef(false)
  useImperativeHandle(ref,()=>({
    next : (i) => {
     if (actions.current && isPaused.current) {
        isPaused.current = false
        setTimeout(()=>{
          isPaused.current = true
          if (i==3) {
          actions.current.forEach(action => {
    action.stop();   
    action.reset(); 
    action.play();   
    action.time = 0; 
  });
          }
        },[3300,3800,3750,3500][i])
      }
      
  },
dispose: () => {
  if (scene.isObject3D) {
    scene.traverse((child) => {
      if (child.isMesh) {
        child.geometry?.dispose();
        if (Array.isArray(child.material)) {
          child.material.forEach(disposeMaterial);
        } else {
          disposeMaterial(child.material);
        }
      }
    });
  }
},
}));
useEffect(() => {
  if (!scene || !animations.length) return;

  mixer.current = new AnimationMixer(scene);
  actions.current = animations.map(clip => {
    const action = mixer.current.clipAction(clip);
    action.reset().play();
    return action;
  });
  actions.current.forEach(action => {
    isPaused.current = false;
    action.stop();   
    action.reset(); 
    action.play();   
    action.time = 0; 
    isPaused.current = true;
  });
}, [animations, scene]);

 useFrame((_, delta) => {  
    if (mixer.current  && !isPaused.current) {
      mixer.current.update(delta)
    }
  })

  return <primitive ref={group} object={scene} />
})
function disposeMaterial(material) {
  material.map?.dispose();
  material.lightMap?.dispose();
  material.bumpMap?.dispose();
  material.normalMap?.dispose();
  material.specularMap?.dispose();
  material.envMap?.dispose();
  material.roughnessMap?.dispose();
  material.metalnessMap?.dispose();
  material.alphaMap?.dispose();
  material.emissiveMap?.dispose();
  material.dispose?.();
}

function Skills(){
  const glRef = useRef();
  const islandRef = useRef()
  const camera = useRef()
  const button = useRef()
  let [i,seti] = useState(0)
  let [pause,setPause] = useState(false)
  const next=(ref)=>{    
    if (!pause && camera.current && islandRef.current) {
      setPause(true)
      ref.current.classList.add()
      islandRef.current?.next(i)
      camera.current?.rotate(i,()=>{
        seti(i => (i >= 3 ? 0 : i + 1)) 
        setPause(false)}
      )
    }
    
  }
  

useEffect(() => {
  return () => {
    useGLTF.clear("/island.glb");

    if (islandRef.current?.dispose) {
      islandRef.current.dispose();
    }
    glRef.current?.getContext?.()?.loseContext?.();
  };
}, []);
    return(<>
    <button onClick={()=>{next(button)}} ref={button} className={`absolute z-1 -translate-x-1/2 -translate-y-1/2  left-1/2 top-6/7  py-3 px-3.5  border-0 rounded-[50%] text-[30px] cursor-pointer ${pause ? 'bg-white shadow-[0_0_20px_white]' : 'animate-[glow_1s_infinite_alternate] bg-white hover:animate-none '} transition-all duration-100 `}><img src={brake} className={`w-15 transform ${pause ? "" : "-scale-x-[1]"} `} alt=""/></button>
    <Canvas onCreated={({ gl }) => {glRef.current = gl;}}  className="!h-[100vh] !w-full lg:mt-[106.45px] flex justify-center items-center overflow-y-visible">
      <Camera ref={camera}/>
        <ambientLight intensity={2} color={0xf0f0f0} />
        <Background />
        <color attach={"background"} args={["#071420"]} />
        <Island ref={islandRef}/>
    </Canvas>
    </>)
    
}

function SkillsMobile(){
  let camera = useRef()
  useEffect(()=>{
    camera.current?.setLookAt(0, 2.37, 13.8, 0, 0, 0, false)
  },[])
  const { scene, animations } = useGLTF("/mobile.glb" )
  return (<>
      <Canvas   className="!h-[110vh] sm:!h-[120vh] !w-[160%] -top-15 sm:-top-30 -left-20 sm:-left-30 -rotate-12">
      <Background />
      <OrbitControls panSpeed={0} ref={camera} minPolarAngle={1.4} maxPolarAngle={1.4} maxDistance={14} minDistance={14}/>
        <ambientLight intensity={2} color={0xf0f0f0} />
        <color attach={"background"} args={["#071420"]} />
        <primitive object={scene} />
    </Canvas>
    </>)

}

function SkillsPage(){
  let [visible,setVisible] = useState(window.innerWidth < 1024)
  let setHeader=()=>{
    setVisible(window.innerWidth < 1024)
    console.log(visible);
    
  }
  useEffect(()=>{
    window.addEventListener("resize",setHeader)
    return () => window.removeEventListener("resize",setHeader)
  },[])

  return !visible ? <Skills /> : <SkillsMobile />
}

export default SkillsPage