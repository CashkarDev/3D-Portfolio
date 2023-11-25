import { Sphere,MeshDistortMaterial,MeshWobbleMaterial } from "@react-three/drei";


export default function Sphereshape() {


  return (
<Sphere args={[1,100,200]} >
  <MeshDistortMaterial 
  color="#8352FD" 
  speed={1.8}
   roughness={0}
    attach={"material"} 
    distort={0.4}
     />
     

   
</Sphere>
  );
}
