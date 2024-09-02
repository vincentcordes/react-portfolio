import { useEffect, useRef, useState } from "react";
import "../../../assets/styles/visualcalculator.css";
import UseMousePosition2D from "../../../utils/usemouseposition2d";
import { useKeyDown } from "../../../utils/useKeyDown";
import { drawType, detectMouseOver } from "./drawingFactories";
import Paragraph from "../../../components/paragraph";
import Modal from "../../../components/modal";
import ModalButton from "../../../components/modalbutton";


function VisualCalculator() {
    const [isOpen, setIsOpen] = useState(false);
    const canvasRef = useRef(null);
    const [coords, handleCoords] = UseMousePosition2D(false);
    //const [startX, setStartX] = useState(0);
    //const [currentTransformedCursor, setCurrentTransformedCursor] = useState({ x: 0, y: 0 });
    const [isPanning, setIsPanning] = useState(false);
    const [previousXY, setPreviousXY] = useState({ x: 0, y: 0 });
    const [viewportTransform, setViewportTransform] = useState({ x: 0, y: 0, scale: 1 });
    const [canvasDimensions, setCanvasDimensions] = useState({ width: 1400, height: 750 });
    const [selectionState, setSelectionState] = useState("None");
    const [nodes, setNodes] = useState([]);
    const [isNodeCaptured, setIsNodeCaptured] = useState(false);
    const [isMouseOverNode, setIsMouseOverNode] = useState(false);
    const [capturedNode, setCapturedNode] = useState({});

    useEffect(() => {
        if (canvasRef?.current) {
            const ctx = canvasRef.current.getContext("2d");
            ctx.setTransform(1, 0, 0, 1, 0, 0);
            ctx.clearRect(0, 0, canvasDimensions.width, canvasDimensions.height);
            ctx.setTransform(viewportTransform.scale, 0, 0, viewportTransform.scale, viewportTransform.x, viewportTransform.y);
            nodes.forEach(f => {
                drawType(f.type, f.x, f.y, f.inputValue, f.resultValue, f.glowUp, ctx);
            });
        }
    }, [viewportTransform, canvasDimensions, nodes, nodes.push()])

    useEffect(() => {
        if (canvasRef?.current) {
            const ctx = canvasRef.current.getContext("2d");
            ctx.setTransform(1, 0, 0, 1, 0, 0);
            ctx.clearRect(0, 0, canvasDimensions.width, canvasDimensions.height);
            ctx.setTransform(viewportTransform.scale, 0, 0, viewportTransform.scale, viewportTransform.x, viewportTransform.y);
            nodes.forEach(f => {
                drawType(f.type, f.x, f.y, f.inputValue, f.resultValue, f.glowUp, ctx);
            });
        }
    }, [isMouseOverNode]);

    useEffect(() => {
        if (canvasRef?.current) {
            console.log("captured effect");
            const ctx = canvasRef.current.getContext("2d");
            ctx.setTransform(1, 0, 0, 1, 0, 0);
            ctx.clearRect(0, 0, canvasDimensions.width, canvasDimensions.height);
            ctx.setTransform(viewportTransform.scale, 0, 0, viewportTransform.scale, viewportTransform.x, viewportTransform.y);
            nodes.forEach(f => {
                drawType(f.type, f.x, f.y, f.inputValue, f.resultValue, f.glowUp, ctx);
            });

            var f = capturedNode;
            drawType(f.type, f.x, f.y, f.inputValue, f.resultValue, f.glowUp, ctx);
        }
    }, [capturedNode.x, capturedNode.y]);

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

    const updateZooming = (e, x, y) => {
        const oldX = viewportTransform.x;
        const oldY = viewportTransform.y;

        const localX = x;// e.clientX;
        const localY = y;// e.clientY;

        const previousScale = viewportTransform.scale;

        let newScale = viewportTransform.scale += e.deltaY * -0.01;
        if (newScale < 0.4) {
            newScale = 0.4;
        }

        if (newScale > 3) {
            newScale = 3;
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

    const addSelection = (x, y, ctx) => {
        if (selectionState !== "None" || selectionState !== "Delete") {
            nodes.push({
                type: selectionState,
                x: x,
                y: y,
                inputValue: 0.00,
                resultValue: 0.00,
                glowUp: "None",
                operation: () => { },
            })
        }
        setSelectionState("None");
    }

    const detectMouseOverNode = (x, y) => {
        let mouseOver = "None";
        for (let i = nodes.length - 1; i >= 0; i--) {
            mouseOver = detectMouseOver(x, y, nodes[i]);
            if (mouseOver === "Body") {
                nodes[i].glowUp = "glowUpOne";
                break;
            }
            else if (mouseOver === "Head") {
                nodes[i].glowUp = "glowUpHead";
                break;
            }
            else {
                nodes[i].glowUp = "None";
            }
        }
        setIsMouseOverNode(mouseOver);
    }

    const captureNode = (x, y) => {
        let mouseOver = "None";
        for (let i = nodes.length - 1; i >= 0; i--) {
            mouseOver = detectMouseOver(x, y, nodes[i]);
            if (mouseOver === "Body") {
                console.log(`captured ${i}`);
                setIsNodeCaptured(true);
                setCapturedNode(nodes[i]);
                nodes.splice(i, 1);
                break;
            }
        }
    }

    const releaseCapture = (x, y) => {
        if (isNodeCaptured) {
            capturedNode.x = x;
            capturedNode.y = y;
            nodes.push(capturedNode);
            setIsNodeCaptured(false);
        }
    }

    const dragging = (x, y) => {
        capturedNode.x = x;
        capturedNode.y = y;
    }

    const deleteNode = (x, y) => {
        if (selectionState === "Delete") {
            for (let i = nodes.length - 1; i >= 0; i--) {
                let mouseOver = detectMouseOver(x, y, nodes[i]);
                if (mouseOver === "Body") {
                    nodes.splice(i, 1);
                    break;
                }
            }
        }
    }

    return (
        <div className="base">
            <Modal onClose={() => setIsOpen(false)}
                open={isOpen}
            >
                <Paragraph
                    header={"Motivation"}
                    str={[
                        `Calculators are a pretty common app for people to build. That being the case they aren't very exciting.
                         This turned into a cool way to play with the html canvas while making a more exciting calculator.`
                    ]}
                    children={[]}
                />
                <Paragraph
                    header={"Usage"}
                    str={[
                        "Under construction - subject to change",
                        "Start by clicking the Initial button in the left column.",
                        "Click the open canvas to place the node.",
                        "Enter a value into the Initial node's input box.",
                        "Click and add as many other node types as desired filling out the inputs.",
                        "Link the nodes by selecting the front portion of the chevron and dragging to the back portion of the next.",
                        "Delete nodes by selecting the Delete button then clicking the node to remove.",
                        "* Click and hold the to drag the nodes around the canvas.",
                        "* Zoom with the mouse scroll wheel.",
                        "* Pan with the mouse scroll wheel button.",
                        "* Press space bar to center the canvas.",
                    ]}
                />

                <Paragraph
                    header={"Fun Facts"}
                    str={["I was enjoying the drawing portion of this way too much.",
                    ]}
                    children={[]}
                />
            </Modal>
            <div className="base-inline">
                <h1>Visual Calculator</h1>
                <ModalButton onClick={() => setIsOpen(true)} />
            </div>
            <Paragraph header={"Under Construction"} str={[
                "The list of things that need to be completed:",
                "1. Add input boxes to the nodes.",
                "2. Build the system to link the nodes.",
                "3. Build the system to link the nodes.",
                "4. Revisit user interactions:",
                "- Clicking to select a node then clicking the canvas to place it isn't the most obvious.",
                "- Zooming needs to be addressed. It works but could be better."
            ]} />
            <div className="vcalculator-inline-container">
                <ul className="vcalculator-controls-container">
                    <li className="vcalculator-controls-li">
                        <button className="vcalculator-controls-button vcalculator-button-start"
                            onClick={() => { setSelectionState("Initial") }}>Initial</button>
                    </li>
                    <li className="vcalculator-controls-li">
                        <button className="vcalculator-controls-button vcalculator-button-add"
                            onClick={() => { setSelectionState("Add") }}>Add</button>
                    </li>
                    <li className="vcalculator-controls-li">
                        <button className="vcalculator-controls-button vcalculator-button-subtract"
                            onClick={() => { setSelectionState("Subtract") }}>Subtract</button>
                    </li>
                    <li className="vcalculator-controls-li">
                        <button className="vcalculator-controls-button vcalculator-button-multiply"
                            onClick={() => { setSelectionState("Multiply") }}>Multiply</button>
                    </li>
                    <li className="vcalculator-controls-li">
                        <button className="vcalculator-controls-button vcalculator-button-divide"
                            onClick={() => { setSelectionState("Divide") }}>Divide</button>
                    </li>
                    <li className="vcalculator-controls-li">
                        <button className="vcalculator-controls-button vcalculator-button-total"
                            onClick={() => { setSelectionState("Total") }}>Total</button>
                    </li>
                    <li className="vcalculator-controls-li">
                        <button className="vcalculator-controls-button vcalculator-button-delete"
                            onClick={() => { setSelectionState("Delete") }}>Delete</button>
                    </li>
                </ul>
                <canvas
                    ref={canvasRef}
                    width="1400"
                    height="750"
                    className="vcalculator-canvas"
                    onMouseMove={(e) => {
                        handleCoords(e);
                        if (isPanning) {
                            updatePanning(e);
                        }
                        const ctx = canvasRef.current.getContext("2d");
                        const transformed = getTransformedPoint(coords.x, coords.y, ctx);
                        detectMouseOverNode(transformed.x, transformed.y);
                        //detectMouseOverFunctionHead(transformed.x, transformed.y);
                        if (isNodeCaptured) {
                            dragging(transformed.x, transformed.y);
                        }
                    }}
                    onWheel={(e) => {
                        const ctx = canvasRef.current.getContext("2d");
                        const transformed = getTransformedPoint(coords.x, coords.y, ctx);
                        updateZooming(e, transformed.x, transformed.y);
                    }}
                    onMouseDown={(e) => {
                        setPreviousXY({ x: e.clientX, y: e.clientY });
                        if (e.button === 0) {
                            const ctx = canvasRef.current.getContext("2d");
                            const transformed = getTransformedPoint(coords.x, coords.y, ctx);
                            if (selectionState !== "None" && selectionState !== "Delete") {
                                addSelection(transformed.x, transformed.y, ctx);
                            }
                            else if (selectionState === "Delete") {
                                deleteNode(transformed.x, transformed.y);
                            }
                            else if (isMouseOverNode) {
                                captureNode(transformed.x, transformed.y);
                            }
                        }
                        if (e.button === 1) {
                            setIsPanning(true);
                        }
                        if (e.button === 2) {
                        }

                        setSelectionState("None");
                    }}
                    onMouseUp={(e) => {
                        setIsPanning(false);
                        if (isNodeCaptured) {
                            const ctx = canvasRef.current.getContext("2d");
                            const transformed = getTransformedPoint(coords.x, coords.y, ctx);
                            releaseCapture(transformed.x, transformed.y);
                        }
                    }}
                />
            </div>
            <br></br>
            <br></br>
        </div>
    );
}

function getTransformedPoint(x, y, ctx) {
    const originalPoint = new DOMPoint(x, y);
    return ctx.getTransform().invertSelf().transformPoint(originalPoint);
}

export default VisualCalculator;