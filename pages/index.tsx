
import { Canvas } from "@react-three/fiber";
import { Suspense, useEffect, useState } from "react";
import { Island } from "../components/Island";
import { Sky } from "../components/Sky";
import Navbar from "../components/Navbar";
import { Bird } from "../components/Bird";
import { Plane } from "../components/Plane";
import HomeInfo from "../components/HomeInfo";
import LoaderCompo from "../components/Loader";





export default function App() {
  const [currentStage, setCurrentStage] = useState(1);
  const [isRotating,setIsRotating]=useState(false)
  const adjustIslandForScreenSize = () => {
    let screenScale:[number,number,number], screenPosition:[number,number,number];
  // If screen width is less than 768px, adjust the scale and position
    if (global.innerWidth < 768) {
      screenScale = [0.7, 0.7, 0.7];
      screenPosition = [0, -6.5, -43.4];
    } else {
      screenScale = [1, 1, 1];
      screenPosition = [2, -6.5, -43.4];
    }
    return [screenScale, screenPosition];
  };

  const adjustBiplaneForScreenSize = () => {
    let screenScale:[number,number,number], screenPosition:[number,number,number];

    // If screen width is less than 768px, adjust the scale and position
    if (global.innerWidth < 768) {
      screenScale = [1.2, 1.2, 1.2];
      screenPosition = [0, -1.5, 0];
    } else {
      screenScale = [3, 3, 3];
      screenPosition = [0, -4, -4];
    }

    return [screenScale, screenPosition];
  };


const [islandScale, islandPosition] = adjustIslandForScreenSize();
const [biplaneScale, biplanePosition] = adjustBiplaneForScreenSize();
  return (
    <div className="h-screen App relative">
      {/* <LoaderCompo/> */}
  <div className="absolute inset-0 z-20 h-[80px] max-w-5xl mx-auto">
    <Navbar/>
  </div>


<div className='absolute top-28 left-0 right-0 z-10 flex items-center justify-center'>
        {currentStage!=null && <HomeInfo currentStage={currentStage} />}
      </div>
<Canvas
        className={`w-full h-screen bg-transparent ${
          isRotating ? "cursor-grabbing" : "cursor-grab"
        }`}
        camera={{ near: 0.1, far: 1000 }}
      >
   <Suspense fallback={<LoaderCompo/>}>
    {/* <LoaderCompo/> */}
     <Island position={islandPosition} setCurrentStage={setCurrentStage} isRotating={isRotating}  setIsRotating={setIsRotating}   scale={islandScale}    rotation={[0.1, 4.7077, 0]} />
     <Sky    isRotating={isRotating}  />
     <Plane             
     isRotating={isRotating}
            position={biplanePosition}
            rotation={[0, 20.1, 0]}
            scale={biplaneScale}
            setIsRotating={setIsRotating}/>
     <Bird position={[-5, 2, 1]}  />
          <ambientLight intensity={1}/>
          <directionalLight position={[1,1,1]} intensity={0.8} castShadow={true} />
        <spotLight penumbra={15} position={[0,0,0]} intensity={1} />
     <hemisphereLight
            color='#b1e1ff'
            groundColor='#000000'
            intensity={0.6}
          />
        </Suspense>
    </Canvas>   
    </div>
  );
}
