import React from "react";
import "../assets/styles/inputone.css"

function InputOne({ placeholder, value, onInput, type }) {
    return (
        <input className="inputone"
            placeholder={placeholder}
            onInput={onInput}
            type={type}
            value={value} />
    );
}

export default InputOne;