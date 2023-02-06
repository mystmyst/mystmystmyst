import React from "react";
import "./PainelStyles.css";
import FirstCards from "../Cards/FirstCards";
import TemperatureCard from "../Cards/TemperatureCard";
import DeviceCard from "../Cards/DeviceCard";

function Painel() {
  return (
    <div className="painel">
      <FirstCards />
      <TemperatureCard />
      <DeviceCard tipo={"green"} />
      <DeviceCard tipo={"red"} />
      <DeviceCard tipo={"orange"} />
      <DeviceCard tipo={"orange"} />
      <DeviceCard tipo={"orange"} />
      <DeviceCard tipo={"orange"} />
    </div>
  );
}
export default Painel;
