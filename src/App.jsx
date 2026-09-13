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
    <main className="app">

      {/* Header */}
      <header className="header">
        <span className="eyebrow">
          INTERACTIVE 3D EXPERIENCE
        </span>

        <h1>3D Product Showcase</h1>

        <p>
          Rotate, explore and customize the product
        </p>
      </header>

      {/* 3D Product Viewer */}
      <div
        className="canvas-container"
        aria-label="Interactive 3D product viewer"
      >
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

        <div
          className="interaction-hint"
          aria-hidden="true"
        >
          🖱️ Drag to rotate &nbsp; • &nbsp; Scroll to zoom
        </div>
      </div>

      {/* Product Information */}
      <section
        className="product-info"
        aria-labelledby="product-title"
      >
        <div className="info-content">

          <div className="product-text">
            <span className="product-label">
              PREMIUM 3D PRODUCT
            </span>

            <h2 id="product-title">
              Modern Cube
            </h2>

            <p>
              Explore this interactive 3D product and
              customize its appearance with different
              colors. Rotate and zoom the model to view
              it from every angle.
            </p>
          </div>

          {/* Selected Color */}
          <div className="selected-color">
            <span>Selected Color</span>

            <div
              className="selected-color-value"
              aria-live="polite"
              aria-atomic="true"
            >
              <span
                className="selected-color-circle"
                style={{
                  backgroundColor: color,
                }}
                aria-hidden="true"
              />

              <strong>{selectedColor}</strong>
            </div>
          </div>

        </div>

        {/* Features */}
        <div className="features">

          <div className="feature">
            <span aria-hidden="true">↻</span>

            <div>
              <strong>360° View</strong>
              <p>Rotate the product</p>
            </div>
          </div>

          <div className="feature">
            <span aria-hidden="true">⌕</span>

            <div>
              <strong>Zoom</strong>
              <p>Explore product details</p>
            </div>
          </div>

          <div className="feature">
            <span aria-hidden="true">✦</span>

            <div>
              <strong>Custom Colors</strong>
              <p>Choose your favorite</p>
            </div>
          </div>

        </div>
      </section>

      {/* Color Controls */}
      <section
        className="controls"
        aria-labelledby="color-heading"
      >
        <h2 id="color-heading">
          Choose Product Color
        </h2>

        <div className="color-options">

          {colors.map((item) => (
            <button
              key={item.name}
              type="button"
              className={`color-button ${
                color === item.value ? "active" : ""
              }`}
              onClick={() => setColor(item.value)}
              aria-label={`Choose ${item.name} color`}
              aria-pressed={color === item.value}
            >
              <span
                className="color-circle"
                style={{
                  backgroundColor: item.value,
                }}
                aria-hidden="true"
              />

              <span>{item.name}</span>

              {color === item.value && (
                <span
                  className="check"
                  aria-hidden="true"
                >
                  ✓
                </span>
              )}
            </button>
          ))}

        </div>
      </section>

    </main>
  );
}

export default App;