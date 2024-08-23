export function drawText(params) {
    params.ctx.fillStyle = params.color;
    params.ctx.textBaseline = params.baseline;
    params.ctx.textAlign = params.textAlign;
    params.ctx.font = `${params.size}px ${params.font}`
    params.ctx.fillText(params.text, params.x, params.y - 4)
}

export function drawEmptyRect(x, y, width, height, xoffset, yoffset, color, lineWidth, ctx) {
    var minx = x + xoffset - (width / 2);
    var maxx = x + xoffset + (width / 2);
    var miny = y - yoffset - (height / 2);
    var maxy = y - yoffset + (height / 2);

    ctx.strokeStyle = color;
    ctx.lineWidth = lineWidth;
    ctx.beginPath();
    ctx.moveTo(minx, miny);
    ctx.lineTo(minx, maxy);
    ctx.lineTo(maxx, maxy);
    ctx.lineTo(maxx, miny);
    ctx.closePath();
    ctx.stroke();
}

export function drawChevron(x, y, width, height, color, chevronType, ctx) {
    var minx = x - (width / 2);
    var maxx = x + (width / 2);
    var miny = y - (height / 2);
    var maxy = y + (height / 2);
    var offset = width / 6;

    var dims = {
        x: x,
        y: y,
        minx: minx,
        maxx: maxx,
        miny: miny,
        maxy: maxy,
        offset: offset,
    }

    // drawChevronTail(dims, color, ctx);
    ctx.fillStyle = color;
    ctx.beginPath();
    // center left point
    if (chevronType === "Right") {
        ctx.moveTo(minx, y);
    }
    else {
        ctx.moveTo(minx + offset, y);
    }
    // top left point 
    ctx.lineTo(minx, miny);
    if (chevronType === "Left") {
        // top right point
        ctx.lineTo(maxx, miny);
        // middle right point
        ctx.lineTo(maxx, y);
        // bottom right point
        ctx.lineTo(maxx, maxy);
    }
    else {
        // top right point
        ctx.lineTo(maxx - offset, miny);
        // middle right point
        ctx.lineTo(maxx, y);
        // bottom right point
        ctx.lineTo(maxx - offset, maxy);
    }
    // bottom left point
    ctx.lineTo(minx, maxy);
    ctx.closePath();
    ctx.fill();
    //drawRect(minx + offset + 2, miny, width - offset * 2 - 3, height, color, ctx);
    //drawChevronHead(dims, color, ctx);
}

export function drawRect(x, y, width, height, color, ctx) {
    ctx.fillStyle = color;
    ctx.fillRect(x, y, width, height);
}

export const drawCircle = (ctx, circleDims, rectDims) => {
    const {
        radius,
        strokeStyle,
        startX,
        startY,
        lineWidth,
        colorFill
    } = circleDims;
    ctx?.clearRect(0, 0, rectDims.w, rectDims.h);
    ctx.lineWidth = lineWidth;
    ctx.strokeStyle = strokeStyle;
    ctx?.beginPath();
    ctx?.arc(startX, startY, radius, 0, Math.PI * 2, true);
    ctx?.stroke();
    if (colorFill) {
        ctx.fillStyle = colorFill;
        ctx.fill();
    }
};

export function drawChevronTail(dims, color, ctx) {
    ctx.fillStyle = color;

    ctx.beginPath();
    ctx.moveTo(dims.minx + dims.offset - 1, dims.y);
    ctx.lineTo(dims.minx, dims.miny);
    ctx.lineTo(dims.minx + dims.offset + 2, dims.miny);
    ctx.lineTo(dims.minx + dims.offset + 2, dims.maxy);
    ctx.lineTo(dims.minx, dims.maxy);
    ctx.closePath();
    // ctx.lineTo(dims.minx + dims.offset + 1, dims.y);

    ctx.fill();
}
// draws a triangle
export function drawChevronHead(dims, color, ctx) {
    ctx.fillStyle = color;
    ctx.beginPath();

    // top left point
    ctx.moveTo(dims.maxx - dims.offset - 1, dims.miny)
    // middle right point 
    ctx.lineTo(dims.maxx - 1, dims.y);
    // bottom left point
    ctx.lineTo(dims.maxx - dims.offset - 1, dims.maxy);

    ctx.closePath();
    ctx.fill();
}