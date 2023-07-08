import React, { Suspense  } from "react";

import { Canvas } from "@react-three/fiber";
import { OrbitControls, Preload } from "@react-three/drei";
import CanvasLoader from "../Loader/Loader";
import { Model } from "../Moon";

function Three() {
  return (
    <Canvas 
    shadows
    frameloop='demand'
    dpr={[1, 2]}
    gl={{ preserveDrawingBuffer: true }}
    camera={{
      fov: 45,
      near: 0.1,
      far: 200,
      position: [-4, 3, 6],
    }}
    
    >
      <Suspense fallback={<CanvasLoader/>}>
      <OrbitControls  
      
      autoRotate
      enableZoom={false}
      maxPolarAngle={Math.PI / 2}
      minPolarAngle={Math.PI / 2}
      />
      <ambientLight intensity={0.5} />
      <directionalLight position={[-1, 4, 1]} intensity={1} />
      <Model />
      <Preload all />
      </Suspense>
    </Canvas>
  )
}

export default Three;