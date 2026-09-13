import { lazy, Suspense, useState } from "react";
import "./App.css";

const ProductScene = lazy(() => import("./components/ProductScene"));

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
      <div className="canvas-container">
        <Suspense
          fallback={
            <div
              style={{
                width: "100%",
                height: "100%",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                color: "#aeb8d0",
                fontSize: "14px",
              }}
            >
              Loading 3D product...
            </div>
          }
        >
          <ProductScene color={color} />
        </Suspense>

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

