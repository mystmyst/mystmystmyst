import React, { useRef, useState } from "react";
import Keyboard from "react-simple-keyboard";

import "react-simple-keyboard/build/css/index.css";

function KeyboardApps() {
  const [state, setState] = useState({ layoutName: "default", input: "" });
  const onChange = (input) => {
    setState({ input });
    console.log("Input changed", input);
  };
  const onKeyPress = (button) => {
    console.log("Button pressed", button);

    /**
     * If you want to handle the shift and caps lock buttons
     */
    if (button === "{shift}" || button === "{lock}") handleShift();
  };
  const handleShift = () => {
    const layoutName = state.layoutName;

    setState({
      layoutName: layoutName === "default" ? "shift" : "default"
    });
  };
  const onChangeInput = (event) => {
    const input = event.target.value;
    setState({ input });
    this.keyboard.setInput(input);
  };
  return (
    <div>
      <input value={state.input} onChange={onChangeInput} />
      <Keyboard
        layoutName={state.layoutName}
        onChange={onChange}
        onKeyPress={onKeyPress}
      />
    </div>
  );
}
export default KeyboardApps;
