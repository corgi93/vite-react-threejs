import { useRef } from "react";
import { useFrame } from "@react-three/fiber";

const AnimatedBox = () => {
  // uesRef로 직접 지정. TRHEE.Mesh로 Geometry + textrue를 줄 수 있는 Mesh타입으로 지정함
  const meshRef = useRef<THREE.Mesh>(null);

  useFrame(() => {
    console.log("useFrame..");

    if (meshRef.current) {
      meshRef.current.rotation.x += 0.01;
    }
  });

  return (
    <mesh ref={meshRef} scale={[1.5, 1.5, 0.5]}>
      {/* Geometry 형태 */}
      <boxGeometry args={[2, 2, 2]} attach={"geometry"} />
      <meshStandardMaterial />
    </mesh>
  );
};

export default AnimatedBox;
