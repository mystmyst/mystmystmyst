import React, { useState } from "react";
import "./DefinicoesStyles.css";
import DefinicoesCard from "../Cards/DefinicoesCard";
import { DefItens } from "./DefItens";
import { UserIcon } from "./UserIcon";

function Definicoes() {
  const [content, setContent] = useState("default");
  const handleContent = (props) => {
    setContent(props);
  };
  if (content === "default") {
    return (
      <div className="definicoes">
        {DefItens.map((itens, index) => {
          return (
            <div onClick={() => handleContent(itens.url)}>
              <DefinicoesCard
                icon={itens.icon}
                title={itens.title}
                content={itens.content}
                url={itens.url}
              />
            </div>
          );
        })}
      </div>
    );
  } else if (content === "usuarios") {
    console.log("user");
    return (
      <div className="usuarios">
        <nav className="defButtons">
          {UserIcon.map((itens, idex) => {
            return <div className="userIcon">{itens.icon}</div>;
          })}
        </nav>
        <div className="deftab">
          <div class="divTable purpleHorizon">
            <div class="divTableHeading">
              <div class="divTableRow">
                <div class="divTableHead">ID</div>
                <div class="divTableHead">Usuário</div>
                <div class="divTableHead">Nome</div>
                <div class="divTableHead">Tipo</div>
              </div>
            </div>
            <div class="divTableBody">
              <div class="divTableRow">
                <div class="divTableCell">1</div>
                <div class="divTableCell">Tester</div>
                <div class="divTableCell">Testador do sistema</div>
                <div class="divTableCell">Administrador</div>
              </div>
              <div class="divTableRow">
                <div class="divTableCell">2</div>
                <div class="divTableCell">MYST</div>
                <div class="divTableCell">Matheus YS Tsukamoto</div>
                <div class="divTableCell">Administrador</div>
              </div>
              <div class="divTableRow">
                <div class="divTableCell">3</div>
                <div class="divTableCell">Checker</div>
                <div class="divTableCell">Giovani Bussolo</div>
                <div class="divTableCell">Checker</div>
              </div>
              <div class="divTableRow">
                <div class="divTableCell">4</div>
                <div class="divTableCell">Vinicius</div>
                <div class="divTableCell">Vinicius Gabilan</div>
                <div class="divTableCell">Checker</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  } else if (content === "alertas") {
    console.log("alertas");
    return <></>;
  } else if (content === "dispositivos") {
    console.log("dispositivos");
    return <></>;
  }
}
export default Definicoes;
