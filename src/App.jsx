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
  const [sceneReady, setSceneReady] = useState(false);

  const selectedColor =
    colors.find((item) => item.value === color)?.name || "Blue";

  return (
    <main className="app">
      <header className="header">
        <span className="eyebrow">
          INTERACTIVE 3D EXPERIENCE
        </span>

        <h1>3D Product Showcase</h1>

        <p>Rotate, explore and customize the product</p>
      </header>

      <div className="canvas-container">
        {!sceneReady ? (
          <div
            style={{
              width: "100%",
              height: "100%",
              minHeight: "420px",
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              justifyContent: "center",
              gap: "18px",
              textAlign: "center",
              color: "#aeb8d0",
              background:
                "linear-gradient(180deg, #182444 0%, #0d1428 65%, #080d1b 100%)",
            }}
          >
            <div
              style={{
                fontSize: "18px",
                fontWeight: "600",
                color: "#ffffff",
              }}
            >
              Interactive 3D Product Viewer
            </div>

            <p
              style={{
                margin: 0,
                fontSize: "14px",
                maxWidth: "360px",
                lineHeight: "1.6",
              }}
            >
              Load the interactive viewer to rotate, zoom and customize
              the product.
            </p>

            <button
              type="button"
              onClick={() => setSceneReady(true)}
              style={{
                border: "none",
                borderRadius: "10px",
                padding: "12px 22px",
                background: "#64B5F6",
                color: "#08111f",
                fontSize: "14px",
                fontWeight: "700",
                cursor: "pointer",
                boxShadow: "0 8px 24px rgba(100, 181, 246, 0.25)",
              }}
            >
              Load 3D Viewer
            </button>
          </div>
        ) : (
          <Suspense
            fallback={
              <div
                style={{
                  width: "100%",
                  height: "100%",
                  minHeight: "420px",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  color: "#aeb8d0",
                  fontSize: "14px",
                  background:
                    "linear-gradient(180deg, #182444 0%, #0d1428 65%, #080d1b 100%)",
                }}
              >
                Loading 3D product...
              </div>
            }
          >
            <ProductScene color={color} />
          </Suspense>
        )}

        {sceneReady && (
          <div className="interaction-hint" aria-hidden="true">
            🖱️ Drag to rotate &nbsp; • &nbsp; Scroll to zoom
          </div>
        )}
      </div>

      <section
        className="product-info"
        aria-labelledby="product-title"
      >
        <div className="info-content">
          <div className="product-text">
            <span className="product-label">
              PREMIUM 3D PRODUCT
            </span>

            <h2 id="product-title">Modern Cube</h2>

            <p>
              Explore this interactive 3D product and customize
              its appearance with different colors. Rotate and zoom
              the model to view it from every angle.
            </p>
          </div>

          <div className="selected-color">
            <span>Selected Color</span>

            <div
              className="selected-color-value"
              aria-live="polite"
              aria-atomic="true"
            >
              <span
                className="selected-color-circle"
                style={{ backgroundColor: color }}
                aria-hidden="true"
              />

              <strong>{selectedColor}</strong>
            </div>
          </div>
        </div>

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

      <section
        className="controls"
        aria-labelledby="color-heading"
      >
        <h2 id="color-heading">Choose Product Color</h2>

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
                style={{ backgroundColor: item.value }}
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