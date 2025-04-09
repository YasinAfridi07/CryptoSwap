import React, { useState } from "react";

const cryptoOptions = ["BTC", "ETH", "USDT"];

const AEDToCryptoSwap = () => {
  const [aedAmount, setAedAmount] = useState("");
  const [selectedCrypto, setSelectedCrypto] = useState("BTC");

  const handleBuy = () => {
    alert(`Buying ${selectedCrypto} with AED ${aedAmount}`);
  };

  return (
    <div>
      <h2>AED to Crypto Swap</h2>
      <div style={styles.row}>
        <label>AED Amount:</label>
        <input
          type="number"
          value={aedAmount}
          onChange={(e) => setAedAmount(e.target.value)}
          placeholder="Enter AED amount"
        />
      </div>
      <div style={styles.row}>
        <label>Buy Crypto:</label>
        <select
          value={selectedCrypto}
          onChange={(e) => setSelectedCrypto(e.target.value)}
        >
          {cryptoOptions.map((coin) => (
            <option key={coin}>{coin}</option>
          ))}
        </select>
      </div>
      <button onClick={handleBuy}>Buy Crypto</button>
    </div>
  );
};

const styles = {
  row: {
    marginBottom: "1rem",
  },
};

export default AEDToCryptoSwap;
