import React from "react";
import "../../../assets/styles/basestyles.css";
import "../../../assets/styles/calculator.css";

function CalculatorButton({ onClick, value }) {
    return (
        <button className="calculatorbutton" onClick={onClick}>{value}</button>
    )
}

export default CalculatorButton;