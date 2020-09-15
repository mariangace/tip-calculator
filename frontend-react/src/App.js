import React, { useState, useEffect } from "react";
import logo from "./logo.svg";
import "./App.css";

function App() {
  const [amount, setAmount] = useState("");
  const [percent, setPercent] = useState("");
  const [tip, setTip] = useState("Tip goes here");
  const [data, setData] = useState([]);

  const calculateTip = (e) => {
    // e
    e.preventDefault(); //it will not reload each time

    let data = {
      amount: amount,
      tip: percent,
    };

    const url = "http://localhost:9000/api/v1/calculatetip";

    fetch(url, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    })
      .then((res) => {
        return res.json();
      })
      .then((data) => {
        console.log(data);
        setTip(data.toBePayed);
      });
  };

  return (
    <div className="App">
      <input
        type="text"
        value={amount}
        onChange={(e) => setAmount(e.target.value)}
      ></input>
      <input
        type="text"
        value={percent}
        onChange={(e) => setPercent(e.target.value)}
      ></input>
      <button onClick={calculateTip}>Send</button>
      <h1>{tip}</h1>
    </div>
  );
}

export default App;
