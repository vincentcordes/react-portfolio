import React, { useState } from "react";
import InputOne from "../../../components/inputone";
import "../../../assets/styles/basestyles.css";
import "../../../assets/styles/calculator.css";

function Calculator() {
    const [input, setInput] = useState("");
    const [equation, setEquation] = useState("");
    const [value, setValue] = useState();
    const [operator, setOperator] = useState("");

    const handleOnInput = (e) => {
        // make sure we have valid input
        if (!validateInput(e)) {
            setInput(e.slice(0, e.length - 1));
            return;
        }

        // perform actions based off the operator
        let currentOperator = getOperator(e);
        let currentValue = 0;
        let result = 0;
        if (currentOperator !== '') {
            setOperator(currentOperator);
            currentValue = Number(e.slice(0, -1));

            if (currentOperator === "=") {
                result = calculate(value, currentValue, operator);
                setEquation(`${value} ${operator} ${currentValue} = `);
                setInput(result);
                setValue(result);
            }
            else {
                currentValue = calculate(value, currentValue, currentOperator);
                setInput("");
                setEquation(`${currentValue} ${currentOperator}`);
                setValue(currentValue);
            }
        }
        else {
            currentValue = Number(e);
            setInput(currentValue);
        }

    }

    return (
        <div className="base">
            <h1>Calculator</h1>
            <p>{`${equation}`}</p>
            <div className="base-container">
                <InputOne type={"text"}
                    placeholder={"enter an equation"}
                    onInput={e => handleOnInput(e.target.value)}
                    value={input}
                />
            </div>
        </div>
    )
}

function calculate(n1, n2, operator) {
    if (n1 === undefined) {
        n1 = 0;
    }
    console.log(`${n1} ${operator} ${n2}`);
    switch (operator) {
        case '+':
            return add(n1, n2);
        case '-':
            return subtract(n1, n2);
        case '*':
            return multiply(n1, n2);
        case '/':
            return divide(n1, n2);
        default:
            break;
    }
}

function getOperator(rawInput) {
    let regEx = /[\+\-\*\/\=]/;
    let lastChar = rawInput[rawInput.length - 1];
    if (regEx.test(lastChar)) {
        return lastChar;
    }
    return '';
}

// first check for valid input characters
function validateInput(inputStr) {
    const regEx = /[^0-9\+-\/\*\.\=]/;

    if (regEx.test(inputStr)) {
        return false;
    }
    return true;
}

function add(n1, n2) {
    return n1 + n2;
}

function subtract(n1, n2) {
    return n1 - n2;
}

function multiply(n1, n2) {
    return n1 * n2;

}

function divide(n1, n2) {
    return n1 / n2;
}

export default Calculator;