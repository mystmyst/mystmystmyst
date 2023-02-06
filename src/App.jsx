import Content from "./components/Content";
import TopBar from "./components/TopBar";
import "./styles.css";
import React, { useContext } from "react";

import { ContentContext } from "./contexts/ContentContext";

import {} from "react-dom";

export default function App() {
  const { content } = useContext(ContentContext);
  console.log(content);

  return (
    <div className="App">
      <TopBar />
      <Content />
    </div>
  );
}
