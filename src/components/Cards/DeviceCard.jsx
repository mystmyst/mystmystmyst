import React from "react";
import "./CardsStyles.css";

function DeviceCard(props) {
  return (
    <div className="deviceCard-green">
      <div className="deviceCard-title">
        <h1 style={{ fontSize: "22px" }}>Primário</h1>
        <h1 style={{ fontSize: "22px" }}>CMS-700</h1>
      </div>
      <ul className="deviceCard-list">
        <li>
          <span>L1</span>
          <div>
            <span>476.25V</span>
            <span>255.30A</span>
          </div>
        </li>
        <li>
          <span>L2</span>
          <div>
            <span>476.25V</span>
            <span>255.30A</span>
          </div>
        </li>
        <li>
          <span>L3</span>
          <div>
            <span>476.25V</span>
            <span>255.30A</span>
          </div>
        </li>
        <li>
          <span>Pot. Ativa</span>
          <span>229.56 kVA</span>
        </li>
      </ul>
    </div>
  );
}

export default DeviceCard;
