import React from "react";
function DefinicoesCard(prop) {
  return (
    <div className="defCard">
      <div className="defCard-title">
        <div>{prop.icon}</div>
        {prop.title}
      </div>
      <div className="defCard-content">{prop.content}</div>
    </div>
  );
}

export default DefinicoesCard;
