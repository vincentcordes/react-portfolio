import { useEffect, useRef, useState } from "react";
import "../../../assets/styles/visualcalculator.css";
import UseMousePosition2D from "../../../utils/usemouseposition2d";
import { useKeyDown } from "../../../utils/useKeyDown";
import { drawBlock, drawRect } from "./drawing";
import { transform } from "lodash";



function VisualCalculator() {
    const canvasRef = useRef(null);
    const [coords, handleCoords] = UseMousePosition2D(false);
    //const [startX, setStartX] = useState(0);
    //const [currentTransformedCursor, setCurrentTransformedCursor] = useState({ x: 0, y: 0 });
    const [isPanning, setIsPanning] = useState(false);
    const [previousXY, setPreviousXY] = useState({ x: 0, y: 0 });
    const [viewportTransform, setViewportTransform] = useState({ x: 0, y: 0, scale: 1 });
    const [canvasDimensions, setCanvasDimensions] = useState({ width: 1400, height: 750 });

    useEffect(() => {
        if (canvasRef?.current) {
            const ctx = canvasRef.current.getContext("2d");
            ctx.setTransform(1, 0, 0, 1, 0, 0);
            ctx.clearRect(0, 0, canvasDimensions.width, canvasDimensions.height);
            ctx.setTransform(viewportTransform.scale, 0, 0, viewportTransform.scale, viewportTransform.x, viewportTransform.y);
            drawRect(0, 0, 100, 100, "green", ctx);
            drawRect(300, 300, 100, 100, "pink", ctx);
            drawRect(canvasDimensions.width - 100, canvasDimensions.height - 100, 100, 100, "pink", ctx);
        }
    }, [viewportTransform, canvasDimensions])

    const handleKeyDown = (e) => {
        resetViewport(e);
    }

    useKeyDown(() => {
        handleKeyDown();
    }, [" "]);// spacebar

    const updatePanning = (e) => {
        const x = e.clientX;
        const y = e.clientY;
        const newTransform = {
            x: viewportTransform.x += x - previousXY.x,
            y: viewportTransform.y += y - previousXY.y,
            scale: viewportTransform.scale,
        }

        setViewportTransform(newTransform);
        setPreviousXY({ x, y });
    }

    const updateZooming = (e) => {
        const oldX = viewportTransform.x;
        const oldY = viewportTransform.y;

        const localX = e.clientX;
        const localY = e.clientY;

        const previousScale = viewportTransform.scale;

        let newScale = viewportTransform.scale += e.deltaY * -0.01;
        if (newScale < 0.1) {
            newScale = 0.1;
        }

        if (newScale > 4) {
            newScale = 4;
        }

        const newX = localX - (localX - oldX) * (newScale / previousScale);
        const newY = localY - (localY - oldY) * (newScale / previousScale);

        const newTransform = {
            x: newX,
            y: newY,
            scale: newScale
        }

        setViewportTransform(newTransform);
    }

    const resetViewport = (e) => {
        const newTransform = {
            x: 0,
            y: 0,
            scale: 1,
        }
        setViewportTransform(newTransform);
    }

    return (
        <div className="base">
            <h1>Visual Calculator</h1>
            <canvas
                ref={canvasRef}
                width="1400"
                height="750"
                className="vcalculator-canvas"
                onMouseMove={(e) => {
                    handleCoords(e);
                    if (isPanning) {
                        updatePanning(e);
                        e.preventDefault();
                    }
                }}
                onWheel={(e) => {
                    updateZooming(e);
                    e.preventDefault();
                }}
                onMouseDown={(e) => {
                    setPreviousXY({ x: e.clientX, y: e.clientY });
                    if (e.button === 0) {
                        const ctx = canvasRef.current.getContext("2d");
                        const transformed = getTransformedPoint(coords.x, coords.y, ctx);
                        drawBlock(ctx, transformed.x, transformed.y, "blue", "jf23");
                    }
                    if (e.button === 1) {
                        setIsPanning(true);
                    }
                    if (e.button === 2) {
                    }
                }}
                onMouseUp={(e) => {
                    setIsPanning(false);
                }}

            />
        </div>
    );
}

function getTransformedPoint(x, y, ctx) {
    const originalPoint = new DOMPoint(x, y);
    return ctx.getTransform().invertSelf().transformPoint(originalPoint);
}

export default VisualCalculator;

// useEffect(() => {
//     if (canvasRef?.current) {
//         const ctx = canvasRef.current.getContext("2d");
//         requestAnimationFrame(function ball() {
//             drawCircle(ctx, {
//                 radius: 50,
//                 lineWidth: 3,
//                 strokeStyle: "#4F7CAC",
//                 colorFill: "#4F7CAC",
//                 startY: 150,
//                 startX
//             },
//                 { w: 600, h: 400 }

//             );
//             setStartX((prevStartX) => prevStartX + 5);
//             ctx?.stroke();
//             if (startX > 400) {
//                 setStartX(0);
//             }
//         });
//     }
// }, [startX]);
// useEffect(() => {
//     if (canvasRef?.current) {
//         const ctx = canvasRef.current.getContext("2d");

//         requestAnimationFrame(function ball() {
//             //@ts-ignore
//             drawCircle(ctx, {
//                 radius: 50,
//                 lineWidth: 3,
//                 strokeStyle: "#4F7CAC",
//                 colorFill: "#4F7CAC",
//                 startY: coords.y,
//                 startX: coords.x
//             }, {
//                 w: 1400,
//                 h: 750
//             });
//         });
//     }
// }, [coords.x, coords.y]);

// <ButtonOne onClick={() => {
//     console.log("click");
//     const ctx = canvasRef.current.getContext("2d");
//     ctx?.translate(0, 0);
//     ctx.scale(1, 1);
//     ctx?.translate(0, 0);

// }}
//     text={"Reset"}
// />

// function getTransformedPoint(x, y, ctx) {
//     const originalPoint = new DOMPoint(x, y);
//     return ctx?.getTransform().invertSelf().transformPoint(originalPoint);
// }

// function adjustZoom(zoomAmount, zoomFactor) {
//     if (!isDragging) {
//         if (zoomAmount) {
//             cameraZoom += zoomAmount
//         }
//         else if (zoomFactor) {
//             console.log(zoomFactor)
//             cameraZoom = zoomFactor * lastZoom
//         }

//         cameraZoom = Math.min(cameraZoom, MAX_ZOOM)
//         cameraZoom = Math.max(cameraZoom, MIN_ZOOM)

//         console.log(zoomAmount)
//     }
// }