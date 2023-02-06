import React, { useEffect, useState } from "react";
import "./DispositivosStyles.css";
import { dispoList } from "./DipositivoItems";
import KeyboardApps from "./KeyboardApp";
import "./KeyboardApp.css";

function Dispositivos() {
  const [colapseButton, setColapseButton] = useState(true);
  const handleSetColapseButton = () => {
    console.log(colapseButton);
    setColapseButton(!colapseButton);
  };
  const device = [
    {
      label: "Equipamento #1"
    },
    {
      label: "Equipamento #2"
    },
    {
      label: "Equipamento #3"
    },
    {
      label: "Equipamento #4"
    },
    {
      label: "Equipamento #5"
    },
    {
      label: "Equipamento #6"
    }
  ];

  const [fases, setFases] = useState(dispoList);

  function changeColor(index) {
    const novaFase = fases.map((c, i) => {
      if (i === index - 1) {
        if (c.color === "#F7E926") {
          //amarelo
          c.color = "#395D93";
        } else if (c.color === "#395D93") {
          // azul
          c.color = "#ADA296";
        } else if (c.color === "#ADA296") {
          //cinza
          c.color = "#0BC163";
        } else if (c.color === "#0BC163") {
          //cinza
          c.color = "#F7E926";
        }
        return c;
      } else {
        return c;
      }
    });
    setFases(novaFase);
  }
  const [kb, setKb] = useState(false);

  const handleShowKeyboard = (e) => {
    setKb(true);
    console.log(kb);
  };
  const handleBlurKeyboard = (e) => {
    setKb(false);
    console.log(kb);
  };

  function changeText(index, e) {
    const novaFase = fases.map((c, i) => {
      if (i === index - 1) {
        return { ...c, label: e.target.value };
      }
      return c;
    });
    setFases(novaFase);
  }
  const [counter, setCounter] = useState(0);
  useEffect(() => {
    const intervalId = setInterval(() => {
      setCounter(counter + 1);
      const novaFases = fases.map((c) => {
        c.current = RandonGenerate(15, 20) + "." + RandonGenerate(0, 9);
        c.power = RandonGenerate(20, 50) + "." + RandonGenerate(0, 9);
      });
    }, 200);
    return () => clearInterval(intervalId);
  }, [counter]);
  function RandonGenerate(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
  }

  const [selectedItem, setSelectedItem] = useState("Equipamento #1");
  const handleSelectedItem = (label) => {
    setSelectedItem(label);
  };

  function componentDidMount() {}
  return (
    <div className="dispositivos">
      <div
        className={
          colapseButton ? "dispositivos-title" : "dispositivos-title-expanded"
        }
      >
        <div className="dispositivos-title-le">
          <p className="disp-tile-device">{selectedItem}</p>
          <div
            className="disp-table-legend-flag"
            style={{ backgroundColor: "#ADA296" }}
          />
          <p> N/A</p>
          <div
            className="disp-table-legend-flag"
            style={{ backgroundColor: "#0BC163" }}
          />
          <p> Monofásico</p>

          <div
            className="disp-table-legend-flag"
            style={{ backgroundColor: "#F7E926" }}
          />
          <p> Bifásico</p>
          <div
            className="disp-table-legend-flag"
            style={{ backgroundColor: "#395D93" }}
          />
          <p> Trifásico</p>
          <div
            style={{ transform: colapseButton ? "" : "rotate(180deg)" }}
            className="disp-navMenu-icon"
            onClick={handleSetColapseButton}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 512 512"
              style={{ fill: "black" }}
            >
              <path d="M233.4 105.4c12.5-12.5 32.8-12.5 45.3 0l192 192c12.5 12.5 12.5 32.8 0 45.3s-32.8 12.5-45.3 0L256 173.3 86.6 342.6c-12.5 12.5-32.8 12.5-45.3 0s-12.5-32.8 0-45.3l192-192z" />
            </svg>
          </div>
        </div>
        {/*tabela de dispositivo */}

        <div
          className={
            colapseButton ? "dispositivos-title-le-non" : "disp-navMenu-table"
          }
        >
          <ul>
            {device.map((items, index) => {
              return (
                <li key={index}>
                  <div
                    onClick={() => handleSelectedItem(items.label)}
                    style={{
                      backgroundColor:
                        selectedItem === items.label ? "#92d68c" : ""
                    }}
                  >
                    <p>{items.label}</p>
                    <div>
                      <div
                        style={{
                          display: selectedItem === items.label ? "flex" : ""
                        }}
                      ></div>
                    </div>
                  </div>
                </li>
              );
            })}
          </ul>
        </div>
      </div>

      <div className="disp-table">
        <div className="disp-table-header-row">
          <div className="disp-table-header-id1">ID</div>
          <div className="disp-table-header-cur1">Corrente</div>
          <div className="disp-table-header-pot1">Potência</div>
          <div className="disp-table-header-des1">Descrição</div>
          <div className="disp-table-header-flag1"></div>
        </div>
        {fases.map((items) => {
          return (
            <div className="disp-table-row" key={items.id}>
              <div className="disp-table-header-id">{items.id}</div>
              <div className="disp-table-header-cur">{items.current} A</div>
              <div className="disp-table-header-pot">{items.power} kW</div>
              <input
                className="disp-table-header-des"
                type="text"
                value={items.label}
                onChange={(e) => changeText(items.id, e)}
                maxLength="24"
                onBlur={(e) => {
                  console.log("blur");
                  handleBlurKeyboard();
                }}
                onFocus={(e) => {
                  console.log("show");
                  handleShowKeyboard();
                }}
              />

              <div
                className="disp-table-header-flag"
                style={{ backgroundColor: items.color }}
                onClick={() => changeColor(items.id)}
              />
            </div>
          );
        })}
      </div>
      <div className={kb ? "keyboard" : "keyboard-hide"}>
        <KeyboardApps />
      </div>
    </div>
  );
}
export default Dispositivos;
