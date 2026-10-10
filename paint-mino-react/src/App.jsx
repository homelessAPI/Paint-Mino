import { useNavigate } from 'react-router'
import Canvas from './components/canvas.jsx'
import './App.css'

function App() {
  const Navigate = useNavigate()

  function handleCanvasSizeSubmit(event) {
    event.preventDefault()
    const canvasData = {
      canvasName: document.getElementById('canvasName').value,
      width: parseInt(document.getElementById('width').value),
      height: parseInt(document.getElementById('height').value)
    }

    setCanvasData(canvasData)
  }

  return (
    <>
      <div id="canvasSetup">
        <form id="canvasSizeForm" onSubmit={handleCanvasSizeSubmit}>
            <label for="canvasName">Canvas Name:</label>
            <input type="text" id="canvasName" name="canvasName" required/>
            <label for="width">Width:</label>
            <input type="number" id="width" name="width" min="1" required/>
            <label for="height">Height:</label>
            <input type="number" id="height" name="height" min="1" required/>
            <button type="submit">Create Canvas</button>
        </form>
      </div>

            {canvasData && (
        <Canvas
          width={canvasData.width}
          height={canvasData.height}
          canvasName={canvasData.canvasName}
        />
      )}
      <div id="savedImages">
        <h2>Saved Images</h2>
        <div id="savedImagesContainer"></div>
      </div>
    </>
  )
}

export default App
