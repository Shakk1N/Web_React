import { useRef } from "react";
import { useFrame } from "@react-three/fiber";
import * as THREE from "three";
import supermanImg from "../assets/4901f122-a5cf-447c-a854-767d41ad24a8.jpeg";
const textureLoader = new THREE.TextureLoader();
const supermanTexture = textureLoader.load(supermanImg);

export default function Cube() {
  const meshRef = useRef();

  useFrame(() => {
    if (meshRef.current) {
      meshRef.current.rotation.x += 0.01;
      meshRef.current.rotation.y += 0.01;
    }
  });

  return (
    <mesh ref={meshRef}>
      <boxGeometry args={[1.5, 1.5, 1.5]} />
      <meshStandardMaterial map={supermanTexture} />
    </mesh>
  );
}
