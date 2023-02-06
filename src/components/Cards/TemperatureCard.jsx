import React from "react";
import "./CardsStyles.css";

function TemperatureCard() {
  return (
    <div className="temperatureCard">
      <h1 style={{ fontSize: "25px" }}>Temperatura Trafo</h1>
      <div className="temperatureCard-content">
        <ul>
          <li>
            <p>L1:</p>
            <p style={{ color: "blue" }}>54.1°C</p>
          </li>
          <li>
            <p>L2:</p>
            <p style={{ color: "green" }}>60.1°C</p>
          </li>
          <li>
            <p>L3:</p>
            <p style={{ color: "red" }}>70.1°C</p>
          </li>
        </ul>
        <div id="chart">gráfico</div>
      </div>
      <div className="temperatureCard-footer">
        <div>
          <p>Mínimo: </p>
          <p style={{ color: "blue" }}> 55.0 </p>
          <p>°C</p>
        </div>

        <div>
          <p>Máximo: </p>
          <p style={{ color: "red" }}> 65.0</p>
          <p>°C</p>
        </div>
      </div>
    </div>
  );
}

export default TemperatureCard;
