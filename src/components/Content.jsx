import { useContext } from "react";
import "./ContentStyles.css";
import { ContentContext } from "../contexts/ContentContext";
import Dispositivos from "./Content/Dispositivos";
import Alarmes from "./Content/Alarmes";
import Definicoes from "./Content/Definicoes";
import Info from "./Content/Info";
import Painel from "./Content/Painel";

const Content = () => {
  const { content } = useContext(ContentContext);
  var comp = {
    Painel: <Painel />,
    Dispositivos: <Dispositivos />,
    Alarmes: <Alarmes />,
    Definições: <Definicoes />,
    "Monitor v1.1": <Info />
  };

  return <div className="content">{comp[content]} </div>;
};
export default Content;
