import React, { useState } from "react";
import CryptoToCryptoSwap from "./components/CryptoToCryptoSwap";
import AEDToCryptoSwap from "./components/AEDToCryptoSwap";

const App = () => {
  return (
    <div style={styles.container}>
      <h1 style={styles.heading}>Crypto Swap</h1>
      <CryptoToCryptoSwap />
      <hr style={styles.divider} />
      <AEDToCryptoSwap />
    </div>
  );
};

const styles = {
  container: {
    fontFamily: "Arial, sans-serif",
    padding: "2rem",
    maxWidth: "500px",
    margin: "auto",
    background: "#f5f5f5",
    borderRadius: "10px",
    boxShadow: "0 0 10px rgba(0,0,0,0.1)",
  },
  heading: {
    textAlign: "center",
  },
  divider: {
    margin: "2rem 0",
  },
};

export default App;
