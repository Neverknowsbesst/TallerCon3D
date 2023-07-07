import { Suspense } from "react";
import { Canvas, useLoader } from "@react-three/fiber";
import { Environment, OrbitControls } from "@react-three/drei";
import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader";

const Model = ({ modelPath }) => {
  const gltf = useLoader(GLTFLoader, modelPath);
  return (
    <>
      {/*escala es para las dimensiones del objeto*/}
      <primitive object={gltf.scene} scale={0.15} />
    </>
  );
};

export default function ObjetoThree({ modelPath }) {
  return (
    
        <Canvas shadows dpr={[1, 2]} rendersize={[100, 100]} camera={{ position: [0, 0, 4], fov: 100 }}>
        <ambientLight intensity={0.7} />
        <spotLight
            intensity={0.5}
            angle={0.1}
            penumbra={1}
            position={[10, 15, 10]}
            castShadow
        />
        <Suspense fallback={null}>
            <Model modelPath={modelPath} />
            {/* To add environment effect to the model */}
            <Environment preset="city" />
        </Suspense>
        <OrbitControls minDistance={0.8}/>
        </Canvas>
   
  );
}