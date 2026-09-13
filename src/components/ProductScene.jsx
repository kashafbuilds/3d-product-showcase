import { Canvas } from "@react-three/fiber";
import {
  OrbitControls,
  RoundedBox,
} from "@react-three/drei";

function Product({ color }) {
  return (
    <RoundedBox
      position={[0, 1.4, 0]}
      rotation={[0.2, 0.4, 0]}
      args={[2.5, 2.5, 2.5]}
      radius={0.18}
      smoothness={6}
      castShadow
      receiveShadow
    >
      <meshStandardMaterial
        color={color}
        metalness={0.65}
        roughness={0.18}
      />
    </RoundedBox>
  );
}

function Floor() {
  return (
    <mesh
      rotation={[-Math.PI / 2, 0, 0]}
      position={[0, 0, 0]}
      receiveShadow
    >
      <planeGeometry args={[12, 12]} />
      <meshStandardMaterial
        color="#111827"
        roughness={0.65}
        metalness={0.15}
      />
    </mesh>
  );
}

function ProductScene({ color }) {
  return (
    <Canvas
      shadows
      frameloop="demand"
      dpr={[1, 1.25]}
      camera={{
        position: [4, 3.5, 6],
        fov: 50,
      }}
    >
      <ambientLight intensity={0.45} />

      <directionalLight
        position={[5, 8, 5]}
        intensity={3}
        castShadow
        shadow-mapSize-width={1024}
        shadow-mapSize-height={1024}
        shadow-camera-near={0.5}
        shadow-camera-far={20}
      />

      <pointLight
        position={[-4, 4, 2]}
        intensity={1.5}
        distance={10}
      />

      <pointLight
        position={[3, 4, -5]}
        intensity={2}
        distance={10}
      />

      <Product color={color} />

      <Floor />

      <OrbitControls
        enablePan={false}
        minDistance={4}
        maxDistance={8}
        enableDamping
        dampingFactor={0.08}
      />
    </Canvas>
  );
}

export default ProductScene;

