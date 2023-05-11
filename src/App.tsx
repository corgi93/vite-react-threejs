import { Canvas } from "@react-three/fiber";
import AnimatedBox from "./components/three/AnimatedBox";
import CameraOrbitController from "./components/three/CameraOrbitController";
import "./App.css";

function App() {
  return (
    <div className="container">
      <h1>react to vite</h1>
      <h2>threejs(react-fiber)</h2>

      <Canvas style={{ width: "500px", height: "400px" }}>
        {/* 이 캔버스 안에 camera controller */}
        <CameraOrbitController />
        {/* Light주기 */}
        <ambientLight intensity={0.1} />
        {/* light 색상 */}
        <directionalLight color="#ff0000" position={[0, 0, 5]} />
        <AnimatedBox />
      </Canvas>
    </div>
  );
}

export default App;
