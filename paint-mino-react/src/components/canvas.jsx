
import { useLocation, useNavigate, useRef } from 'react-router'
import '../assets/CSS/canvas.css'

function Canvas() {
    const location = useLocation()
    const canvasData = location.state
    const canvasRef = useRef(null)

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

            lastX = x
            lastY = y
        }
    }

    if (!canvasData) {
        return (
            <p>No canvas data available. Please create a canvas first.</p>
        )}
  return (
    <>
    <div id="canvasContainer">
        <h1>{canvasData.name}</h1>
        <canvas id='canvas' onMouseDown={pointerDown} onMouseMove={pointerMove} width={canvasData.width} height={canvasData.height}></canvas>
    </div>
    </>
  )
}

export default Canvas