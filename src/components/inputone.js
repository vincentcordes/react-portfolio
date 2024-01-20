import React from "react";
import "../assets/styles/inputone.css"

function InputOne({ placeholder, value, onInput, onKeyUp, type }) {
    return (
        <input className="inputone"
            placeholder={placeholder}
            onInput={onInput}
            onKeyUp={onKeyUp}
            type={type}
            value={value} />
    );
}

export default InputOne;