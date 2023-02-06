import React from "react";
import "./CardsStyles.css";

function FirstCards() {
  return (
    <div className="firstCards">
      <ul>
        <li>
          <h1 style={{ fontSize: "25px" }}>Dispositivos:</h1>
        </li>
        <li>
          <p style={{ color: "green", fontSize: "25px" }}>6</p>
        </li>
        <li>
          <p>Operante</p>
          <p style={{ color: "green" }}>6</p>
        </li>
        <li>
          <p>Inoperante</p>
          <p style={{ color: "red" }}>2</p>
        </li>
        <li>
          <p>Em espera</p>
          <p style={{ color: "orange" }}>2</p>
        </li>
      </ul>

      <div></div>
    </div>
  );
}

export default FirstCards;
