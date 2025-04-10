import React, { useState } from "react";

const cryptoOptions = ["BTC", "ETH", "SOL", "USDT", "NIGGA COIN"];

const CryptoToCryptoSwap = () => 
{
  const [from, setFrom] = useState("BTC");
  const [to, setTo] = useState("ETH");
  const [amount, setAmount] = useState("");

  const handleSwap = () => 
  {
    const temp = from;
    setFrom(to);
    setTo(temp);
  };

  const handleConfirm = () => 
  {
    alert(`Swapping ${amount} ${from} to ${to}`);
  };

  return (
    <div>
      <h2>Crypto-to-Crypto Swap</h2>
      <div style={styles.row}>
        <label>From:</label>
        <select value={from} onChange={(e) => setFrom(e.target.value)}>
          {cryptoOptions.map((coin) => (
            <option key={coin}>{coin}</option>
          ))}
        </select>
      </div>
      <div style={styles.row}>
        <label>To:</label>
        <select value={to} onChange={(e) => setTo(e.target.value)}>
          {cryptoOptions.map((coin) => (
            <option key={coin}>{coin}</option>
          ))}
        </select>
      </div>
      <div style={styles.row}>
        <label>Amount:</label>
        <input
          type="number"
          value={amount}
          onChange={(e) => setAmount(e.target.value)}
          placeholder="Enter amount"
        />
      </div>
      <div style={styles.buttonRow}>
        <button onClick={handleSwap}>Swap</button>
        <button onClick={handleConfirm}>Confirm Swap</button>
      </div>
    </div>
  );
};

const styles = {
  row: {
    marginBottom: "1rem",
  },
  buttonRow: {
    display: "flex",
    gap: "1rem",
  },
};

export default CryptoToCryptoSwap;
