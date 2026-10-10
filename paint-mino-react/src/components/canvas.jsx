
import { useLocation, useNavigate } from 'react-router'
import '../assets/css/canvas.css'

function Canvas() {
    const location = useLocation()
    const canvasData = location.state

    if (!canvasData) {
        return (
            <p>No canvas data available. Please create a canvas first.</p>
        )}
  return (
    <>
    <div id="canvasContainer">
        <h1>{canvasData.name}</h1>
        <canvas id='canvas' width={canvasData.width} height={canvasData.height}></canvas>
    </div>
    </>
  )
}

export default Canvas