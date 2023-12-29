import React from "react";
import "../assets/styles/buttonone.css";

function ButtonOne({ onClick, text }) {
    return (
        <button className="buttonone" onClick={onClick}>{text}</button>
    );
}

export default ButtonOne;