
import { useLocation, useNavigate } from 'react-router'
import {useRef} from 'react'
import '../assets/CSS/canvas.css'

function Canvas() {
    let isDrawing = useRef(false)
    let lastX = useRef(0)
    let lastY = useRef(0)

    const canvasRef = useRef(null)
    const canvas = canvasRef.current;
    const ctx = canvas.getContext('2d');

    const location = useLocation()
    const canvasData = location.state

    function pointerDown(e) {
        isDrawing.current = true

        lastX.current = e.offsetX;
        lastY.current = e.offsetY;
    }

    function pointerMove(e) {
        if (isDrawing) {
            const x = e.offsetX
            const y = e.offsetY

            ctx.beginPath(); 
            ctx.moveTo(lastX, lastY); 
            ctx.lineTo(x, y); 
            ctx.strokeStyle = 'black'; 
            ctx.lineWidth = 2; 
            ctx.stroke();

            lastX = x
            lastY = y
        }
    }

    function pointerUp() {
        isDrawing = false
    }

    if (!canvasData) {
        return (
            <p>No canvas data available. Please create a canvas first.</p>
        )}
  return (
    <>
    <div id="canvasContainer">
        <h1>{canvasData.name}</h1>
        <canvas ref={canvasRef} id='canvas' onMouseDown={pointerDown} onMouseMove={pointerMove} onMouseUp={pointerUp} width={canvasData.width} height={canvasData.height}></canvas>
    </div>
    </>
  )
}

export default Canvas