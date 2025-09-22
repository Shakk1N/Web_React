import { useRef } from "react";
import { useFrame } from "@react-three/fiber";
import * as THREE from "three";
import supermanImg from "../assets/notes-icon-in-trendy-flat-style-isolated-on-white-background-notes-silhouette-symbol-for-your-website-design-logo-app-ui-illustration-eps10-free-vector.jpg";
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
