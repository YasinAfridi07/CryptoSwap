import React from "react";
import CryptoToCrypto from "./CryptoToCryptoSwap";
import AEDToCrypto from "./AEDToCryptoSwap";

function App() {
  return (
    <div style={styles.container}>
      <h1 style={styles.heading}>Crypto Swap</h1>
      <div style={styles.section}>
        <CryptoToCrypto />
      </div>
      <div style={styles.section}>
        <AEDToCrypto />
      </div>
    </div>
  );
}

const styles = {
  container: {
    padding: "20px",
    fontFamily: "Arial, sans-serif",
    backgroundColor: "#1e1e1e",
    color: "#fff",
    minHeight: "100vh",
  },
  heading: {
    textAlign: "center",
    marginBottom: "30px",
  },
  section: {
    marginBottom: "40px",
    padding: "20px",
    backgroundColor: "#2a2a2a",
    borderRadius: "10px",
  },
};

export default App;
