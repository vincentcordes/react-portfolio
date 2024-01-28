export const drawBlock = (ctx, mousex, mousey, color, text) => {
    const rectx = mousex - 150 / 2;
    const recty = mousey - 75 / 2;
    drawRect(rectx, recty, 150, 75, color, ctx);
    drawText(text, mousex, mousey, 32, "white", "courrior", ctx);

}
function drawText(text, x, y, size, color, font, ctx) {
    ctx.fillStyle = color;
    ctx.font = `${size}px ${font}`
    ctx.fillText(text, x - 20, y + 11)
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