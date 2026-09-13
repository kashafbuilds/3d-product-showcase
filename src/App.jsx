import { useState } from "react";
import { Canvas } from "@react-three/fiber";
import {
  OrbitControls,
  RoundedBox,
} from "@react-three/drei";
import "./App.css";

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

function App() {
  const colors = [
    { name: "Blue", value: "#64B5F6" },
    { name: "Red", value: "#EF4444" },
    { name: "Green", value: "#22C55E" },
    { name: "Gold", value: "#F59E0B" },
  ];

  const [color, setColor] = useState("#64B5F6");

  const selectedColor =
    colors.find((item) => item.value === color)?.name || "Blue";

  return (
    <div className="app">

      <div className="header">
        <span className="eyebrow">INTERACTIVE 3D EXPERIENCE</span>

        <h1>3D Product Showcase</h1>

        <p>
          Rotate, explore and customize the product
        </p>
      </div>

      <div className="canvas-container">

        <Canvas
          shadows
          dpr={[1, 1.5]}
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
            shadow-mapSize-width={2048}
            shadow-mapSize-height={2048}
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

        <div className="interaction-hint">
          🖱️ Drag to rotate &nbsp; • &nbsp; Scroll to zoom
        </div>

      </div>

      <section className="product-info">

        <div className="info-content">

          <div className="product-text">
            <span className="product-label">
              PREMIUM 3D PRODUCT
            </span>

            <h2>Modern Cube</h2>

            <p>
              Explore this interactive 3D product and
              customize its appearance with different
              colors. Rotate and zoom the model to view
              it from every angle.
            </p>
          </div>

          <div className="selected-color">
            <span>Selected Color</span>

            <div className="selected-color-value">
              <span
                className="selected-color-circle"
                style={{
                  backgroundColor: color,
                }}
              />

              <strong>{selectedColor}</strong>
            </div>
          </div>

        </div>

        <div className="features">

          <div className="feature">
            <span>↻</span>
            <div>
              <strong>360° View</strong>
              <p>Rotate the product</p>
            </div>
          </div>

          <div className="feature">
            <span>⌕</span>
            <div>
              <strong>Zoom</strong>
              <p>Explore product details</p>
            </div>
          </div>

          <div className="feature">
            <span>✦</span>
            <div>
              <strong>Custom Colors</strong>
              <p>Choose your favorite</p>
            </div>
          </div>

        </div>

      </section>

      <div className="controls">

        <h2>Choose Product Color</h2>

        <div className="color-options">

          {colors.map((item) => (
            <button
              key={item.name}
              className={`color-button ${
                color === item.value ? "active" : ""
              }`}
              onClick={() => setColor(item.value)}
              aria-label={`Choose ${item.name} color`}
            >
              <span
                className="color-circle"
                style={{
                  backgroundColor: item.value,
                }}
              />

              <span>{item.name}</span>

              {color === item.value && (
                <span className="check">✓</span>
              )}
            </button>
          ))}

        </div>

      </div>

    </div>
  );
}

export default App;