import React from "react";
import "../assets/styles/inputtwo.css"

function InputTwo({ placeholder, value, onInput, onKeyUp, type }) {
    return (
        <input className="inputtwo"
            placeholder={placeholder}
            onInput={onInput}
            onKeyUp={onKeyUp}
            type={type}
            value={value} />
    );
}

export default InputTwo;