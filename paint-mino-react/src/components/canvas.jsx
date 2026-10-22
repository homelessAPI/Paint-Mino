import { useLocation } from 'react-router'
import { drawingTools } from './drawingTools'
import { saveImage } from './features'
import { useState, useRef, useEffect } from 'react'
import ToolBar from './toolbar' // Default import is perfect
import '../assets/CSS/canvas.css'

function Canvas() {
    const [brushSize, setbrushSize] = useState(2)
    const [eraserSize, seteraserSize] = useState(2)
 
    const [activeTool, setActiveTool] = useState('pen') 

    const canvasRef = useRef(null)
    const drawingtools = drawingTools()

    const location = useLocation()
    const canvasData = location.state

    const handleAutoSave = () => saveImage(canvasRef, canvasData)

    let isDrawing = useRef(false)
    let lastX = useRef(0)
    let lastY = useRef(0)

    useEffect(() => {
        if (!canvasData?.image || !canvasRef.current) return;

        const canvas = canvasRef.current;
        const ctx = canvas.getContext('2d');
        const img = new Image();

        img.onload = () => {
            ctx.drawImage(img, 0, 0);
        };
        img.src = canvasData.image;
    }, [canvasData]);

    function pointerDown(e) {
        isDrawing.current = true
        lastX.current = e.nativeEvent.offsetX;
        lastY.current = e.nativeEvent.offsetY;
    }

    function pointerMove(e) {
        if (isDrawing.current) {
            const x = e.nativeEvent.offsetX
            const y = e.nativeEvent.offsetY
            const canvas = canvasRef.current;
            const ctx = canvas.getContext('2d');

            if (activeTool === 'pen') {
                drawingtools.pen(ctx, lastX.current, lastY.current, x, y, brushSize)
            } else if (activeTool === 'eraser') {
                drawingtools.eraser(ctx, lastX.current, lastY.current, x, y, brushSize, eraserSize)
            }

            lastX.current = x
            lastY.current = y
        }
    }

    function pointerUp() {
        if (isDrawing.current) {
            isDrawing.current = false
            handleAutoSave()
        }
    }

    if (!canvasData) {
        return <p>No canvas data available. Please create a canvas first.</p>
    }

    return (
        <div id="canvasFileContainer">
            {/* 2. Pass variables and setters into ToolBar as Props */}
            <div id='toolbarContainer'>
                <ToolBar
                canvasRef={canvasRef} 
                canvasData={canvasData}
                activeTool={activeTool}
                setActiveTool={setActiveTool}
                brushSize={brushSize}
                setbrushSize={setbrushSize}
                eraserSize={eraserSize}
                seteraserSize={seteraserSize}
            />
            </div>
            
            <div id='canvasContainer'>
                <h1>{canvasData.name}</h1>
                <div id='canvasVeiwport'>
                    <canvas 
                    name='canvas' 
                    ref={canvasRef} 
                    id='canvas' 
                    onPointerDown={pointerDown} 
                    onPointerMove={pointerMove} 
                    onPointerUp={pointerUp} 
                    onPointerLeave={pointerUp} 
                    width={canvasData.width} 
                    height={canvasData.height}
                    />
                </div>
            </div>
        </div>
    )
}

export default Canvas
