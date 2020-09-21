import React, { useState } from "react";
import "./App.css";

function App() {
  const [amount, setAmount] = useState("");
  const [percent, setPercent] = useState("");
  const [tip, setTip] = useState("Total :) ");

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
      <div class="container">
        <div class="left">
          <div class="header">
            <h2 class="animation a1">Super Tip Calculator</h2>
            <h4 class="animation a2">Calculate your total</h4>
          </div>
          <div class="form">
            <input
              type="text"
              value={amount}
              class="form-field animation a4"
              placeholder={"Amount"}
              onChange={(e) => setAmount(e.target.value)}
            ></input>
            <input
              type="text"
              class="form-field animation a4"
              value={percent}
              placeholder={"Percent"}
              onChange={(e) => setPercent(e.target.value)}
            ></input>
            <button class="animation a6" onClick={calculateTip}>
              CALCULATE
            </button>
            <div className="total__div">
              <h1 class="animation a1">{tip}</h1>
            </div>
          </div>
        </div>
        <div class="right"></div>
      </div>
    </div>
  );
}

export default App;
