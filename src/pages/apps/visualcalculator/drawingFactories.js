import { InitialColor, InitialColorActive, AddColor, AddColorActive, SubtractColor, SubtractColorActive, MultiplyColor, MultiplyColorActive, DivideColor, DivideColorActive, TotalColor, TotalColorActive } from "./colorDefinitions";
import { drawText, drawChevron, drawEmptyRect, drawChevronHead } from "./drawingBase";

const FontSize = 28;
const Font = "currior";
const ChevronWidth = 190;
const ChevronHeight = 80;

export function drawConnections() {

}

function drawInputControl(text, x, y, ctx) {
    drawEmptyRect(x, y, 160, 28, -15, 56, "black", 2, ctx);
    let textParams = createTextParams("inputText", "0", x, y, ctx);
    drawText(textParams);
}

export function drawType(type, x, y, inputText, resultText, glowUp, ctx) {
    const typeParams = createTypeParams(type, x, y, inputText, resultText, glowUp, ctx);
    drawFunction(typeParams);
}

function drawFunction(params) {
    if (params.glowUp === "glowUpOne") {
        drawChevron(params.x, params.y, ChevronWidth, ChevronHeight, params.functionColor, params.chevronType, params.ctx);
    }
    // if (params.glowUp === "glowUpHead") {
    //     //drawChevron(params.x, params.y, ChevronWidth + 5, ChevronHeight + 5, params.functionColor, params.chevronType, params.ctx);
    //     //drawChevronHead(params.x, params.y, ChevronWidth + 5, ChevronHeight + 5, params.functionColor, params.ctx);
    // }
    else {
        drawChevron(params.x, params.y, ChevronWidth, ChevronHeight, params.functionColor, params.chevronType, params.ctx);
    }

    if (params.type !== "Initial") {
        const resultTextParams = createTextParams("resultText", params.resultText, params.x, params.y, params.ctx);
        if (params.type === "Total") {
            resultTextParams.x += 10;
        }
        drawText(resultTextParams);
    }
    if (params.type !== "Total") {
        drawInputControl(params.inputText, params.x, params.y, params.ctx);
    }

    const functionTextParams = createTextParams("functionText", params.functionText, params.x, params.y, params.ctx);
    if (params.type === "Initial") {
        functionTextParams.x -= 10;
    }
    if (params.type === "Total") {
        functionTextParams.x += 10;
    }
    drawText(functionTextParams);
}

export function detectMouseOver(x, y, f) {
    let body = detectMouseOverBody(x, y, f);
    let head = detectMouseOverHead(x, y, f);

    if (body) {
        return "Body"
    }
    else if (head) {
        return "Head";
    }
    else return "None"

}

export function detectMouseOverBody(x, y, f) {
    var xDim = ChevronWidth / 2;
    var yDim = ChevronHeight / 2;
    if (x >= f.x - xDim + 30 &&
        x <= f.x + xDim - 30 &&
        y <= f.y + yDim &&
        y >= f.y - yDim) {
        return true;
    }
    return false;
}

export function detectMouseOverHead(x, y, f) {
    var xDim = ChevronWidth / 2;
    var yDim = ChevronHeight / 2;
    if (x >= f.x + xDim - 30 &&
        x <= f.x + xDim &&
        y <= f.y + yDim &&
        y >= f.y - yDim) {
        return true;
    }
    return false;
}

export function detectMouseOverTail(x, y, f) {

}

function createTypeParams(type, x, y, inputText, resultText, glowUp, ctx) {
    let typeParams = {
        type: type,
        x: x,
        y: y,
        inputText: inputText,
        resultText: resultText,
        functionText: "NA",
        functionColor: "white",
        ctx: ctx,
        chevronType: "Full",
        glowUp: glowUp,
    };
    switch (type) {
        case "Add":
            typeParams.functionColor = getColor(typeParams.type, typeParams.glowUp);
            typeParams.functionText = "Add";
            break;
        case "Subtract":
            typeParams.functionColor = getColor(typeParams.type, typeParams.glowUp);
            typeParams.functionText = "Subtract";
            break;
        case "Multiply":
            typeParams.functionColor = getColor(typeParams.type, typeParams.glowUp);
            typeParams.functionText = "Multiply";
            break;
        case "Divide":
            typeParams.functionColor = getColor(typeParams.type, typeParams.glowUp);
            typeParams.functionText = "Divide";
            break;
        case "Initial":
            typeParams.functionColor = getColor(typeParams.type, typeParams.glowUp);
            typeParams.functionText = "Initial";
            typeParams.chevronType = "Right"
            break;
        case "Total":
            typeParams.functionColor = getColor(typeParams.type, typeParams.glowUp);
            typeParams.functionText = "Total";
            typeParams.chevronType = "Left"
            break;
        default:
            break;
    }
    return typeParams
}

function createTextParams(type, text, x, y, ctx) {
    let params = {};
    switch (type) {
        case "functionText":
            params = {
                ctx: ctx,
                baseline: "bottom",
                textAlign: "center",
                size: FontSize,
                font: Font,
                text: text,
                x: x,
                y: y - 2,
                color: "white"
            }
            break;
        case "inputText":
            params = {
                ctx: ctx,
                baseline: "middle",
                textAlign: "left",
                size: FontSize,
                font: Font,
                text: text,
                x: x - 95,
                y: y - 51,
                color: "black"
            }
            break;
        case "resultText":
            params = {
                ctx: ctx,
                baseline: "top",
                textAlign: "center",
                size: FontSize,
                font: Font,
                text: text,
                x: x,
                y: y + 8,
                color: "white"
            }
            break;
        default:
            break;
    }
    return params;
}

function getColor(type, glowUp) {
    var color;
    switch (type) {
        case "Initial":
            if (glowUp !== "None") {
                color = InitialColorActive;
            }
            else {
                color = InitialColor;
            }
            break;
        case "Add":
            if (glowUp !== "None") {
                color = AddColorActive;
            }
            else {
                color = AddColor;
            }
            break;
        case "Subtract":
            if (glowUp !== "None") {
                color = SubtractColorActive;
            }
            else {
                color = SubtractColor;
            }
            break;
        case "Multiply":
            if (glowUp !== "None") {
                color = MultiplyColorActive;
            }
            else {
                color = MultiplyColor;
            }
            break;
        case "Divide":
            if (glowUp !== "None") {
                color = DivideColorActive;
            }
            else {
                color = DivideColor;
            }
            break;
        case "Total":
            if (glowUp !== "None") {
                color = TotalColorActive;
            }
            else {
                color = TotalColor;
            }
            break;
        default:
            break;
    }
    return color;

}