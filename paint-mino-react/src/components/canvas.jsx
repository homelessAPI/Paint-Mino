
import { useLocation, useNavigate } from 'react-router'
import '../assets/CSS/canvas.css'

function Canvas() {
    let isDrawing = false
    let lastX = 0
    let lastY = 0

    const location = useLocation()
    const canvasData = location.state

    function pointerDown(e) {
        isDrawing = true

        lastX = e.offsetX;
        lastY = e.offsetY;
    }

    function pointerMove(e) {
        if (isDrawing) {
            const_X = e.offsetX
            const_Y = e.offsetY

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
        isDrawing = False
    }

    if (!canvasData) {
        return (
            <p>No canvas data available. Please create a canvas first.</p>
        )}
  return (
    <>
    <div id="canvasContainer">
        <h1>{canvasData.name}</h1>
        <canvas id='canvas' onMouseDown={pointerDown} onMouseMove={pointerMove} onMouseUp={pointerUp} width={canvasData.width} height={canvasData.height}></canvas>
    </div>
    </>
  )
}

export default Canvas