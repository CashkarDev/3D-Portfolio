import { useLoader } from '@react-three/fiber'
import { TextureLoader } from "three";
import texture  from "../assets/images/wood.jpg";

export default function Box() {
  console.log('Texture Path:', texture);
  const colorMap = useLoader(TextureLoader,texture.src);

  return (
    <mesh rotation={[50, 90, 40]}>
      <boxGeometry  attach="geometry" args={[1, 3, 2]} />
      <meshStandardMaterial map={colorMap} />
     
    </mesh>
  );
}
