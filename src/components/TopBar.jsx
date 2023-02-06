import React, { useState, useContext } from "react";
import "./TopBarStyles.css";
import { NavBarItens, NavItens } from "./NavBarItens";
import { ContentContext } from "../contexts/ContentContext";

function TopBar() {
  const [menuBt, setmenuBt] = useState(true);
  const handleMenuBt = () => {
    setmenuBt(!menuBt);
  };
  const { setContent, content } = useContext(ContentContext);

  const handleClick = (label) => {
    setContent(label);
    setmenuBt(!menuBt);
  };

  return (
    <div className="topBar">
      <h2 className="topBarTitle">{content}</h2>
      <button className="menu-icon" onClick={handleMenuBt}>
        {menuBt ? NavBarItens[0].icon : NavBarItens[1].icon}
      </button>
      <ul className={menuBt ? "dropMenu" : "dropMenu show"}>
        {NavItens.map((item, index) => {
          return (
            <li key={index} onClick={() => handleClick(item.label)}>
              <div className="dropMenuIcon">{item.icon}</div>
              {item.label}
            </li>
          );
        })}
      </ul>
    </div>
  );
}
export default TopBar;
