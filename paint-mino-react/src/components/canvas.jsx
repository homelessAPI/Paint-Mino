
import { useLocation } from 'react-router'
import { drawingTools } from './drawingTools'
import {useState, useRef} from 'react'
import '../assets/CSS/canvas.css'

function Canvas() {
    const [brushSize, setbrushSize] = useState(2)
    const [eraserSize, seteraserSize] = useState(2)

    const [activeTool, setActiveTool] = useState('pen')

    const canvasRef = useRef(null)
    const drawingtools = drawingTools()

    const location = useLocation()
    const canvasData = location.state

    let isDrawing = useRef(false)
    let lastX = useRef(0)
    let lastY = useRef(0)

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
        isDrawing.current = false
    }

    if (!canvasData) {
        return (
            <p>No canvas data available. Please create a canvas first.</p>
        )}
  return (
    <>
    <div id="canvasContainer">
        <h1>{canvasData.name}</h1>
        <button onClick={() => setActiveTool('pen')} id='brushTool'>Pen</button>
        <input id='brushSize' type='range' min={1} max={100} name='brushSize' value={brushSize} onChange={(e) => setbrushSize(Number(e.target.value))}/>
        <button onClick={() => setActiveTool('eraser')} id='eraserTool'>Eraser</button>
        <input id='eraserSize' type='range' min={1} max={200} name='eraserSize' value={eraserSize} onChange={(e) => seteraserSize(Number(e.target.value))}/>
        <canvas ref={canvasRef} id='canvas' onMouseDown={pointerDown} onMouseMove={pointerMove} onMouseUp={pointerUp} onMouseLeave={pointerUp} width={canvasData.width} height={canvasData.height}></canvas>
    </div>
    </>
  )
}

export default Canvas