import React, { useState } from "react";

const Installation = () => {
  const [copied, setCopied] = useState(false);

  const handleCopy = () => {
    navigator.clipboard.writeText("npm install mx-icons");
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="installation-container" style={{ padding: "2rem", maxWidth: "800px", margin: "0 auto", color: "var(--text-primary)" }}>
      <h1 style={{ fontSize: "2.5rem", marginBottom: "1.5rem" }}>Installation</h1>
      
      <div className="step-section" style={{ marginBottom: "3rem" }}>
        <p style={{ fontSize: "1.1rem", marginBottom: "1rem", lineHeight: "1.6" }}>
          Get started with MX Icons by installing the package using npm:
        </p>
        
        <div className="code-block" style={{ 
          background: "#1e293b", 
          padding: "1.5rem", 
          borderRadius: "12px", 
          display: "flex", 
          justifyContent: "space-between",
          alignItems: "center",
          border: "1px solid #334155"
        }}>
          <code style={{ color: "#38bdf8", fontFamily: "monospace", fontSize: "1.1rem" }}>
            npm install mx-icons
          </code>
          <button 
            onClick={handleCopy}
            style={{
              background: copied ? "#22c55e" : "#334155",
              color: "white",
              border: "none",
              padding: "8px 16px",
              borderRadius: "6px",
              cursor: "pointer",
              transition: "all 0.2s"
            }}
          >
            {copied ? "Copied!" : "Copy"}
          </button>
        </div>
      </div>

      <h1 style={{ fontSize: "2.5rem", marginBottom: "1.5rem" }}>Usage</h1>
      <div className="step-section">
        <p style={{ fontSize: "1.1rem", marginBottom: "1rem" }}>
          Import the icon component and use it in your React application:
        </p>
        
        <div className="code-block" style={{ 
          background: "#1e293b", 
          padding: "1.5rem", 
          borderRadius: "12px",
          border: "1px solid #334155",
          overflowX: "auto"
        }}>
          <pre style={{ margin: 0, color: "#e2e8f0" }}>
            <code>{`import { Home } from 'mx-icons';

function App() {
  return (
    <div>
      <Home size={24} color="#292D32" />
    </div>
  );
}`}</code>
          </pre>
        </div>

        <h3 style={{ fontSize: "1.5rem", marginTop: "2rem", marginBottom: "1rem" }}>Props</h3>
        <table style={{ width: "100%", borderCollapse: "collapse", textAlign: "left" }}>
          <thead>
            <tr style={{ borderBottom: "1px solid #334155" }}>
              <th style={{ padding: "12px" }}>Prop</th>
              <th style={{ padding: "12px" }}>Type</th>
              <th style={{ padding: "12px" }}>Default</th>
              <th style={{ padding: "12px" }}>Description</th>
            </tr>
          </thead>
          <tbody>
            <tr style={{ borderBottom: "1px solid #334155" }}>
              <td style={{ padding: "12px", color: "#38bdf8" }}>size</td>
              <td style={{ padding: "12px" }}>number</td>
              <td style={{ padding: "12px" }}>24</td>
              <td style={{ padding: "12px" }}>Size of the icon in pixels</td>
            </tr>
            <tr>
              <td style={{ padding: "12px", color: "#38bdf8" }}>color</td>
              <td style={{ padding: "12px" }}>string</td>
              <td style={{ padding: "12px" }}>currentColor</td>
              <td style={{ padding: "12px" }}>Color of the icon</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Installation;