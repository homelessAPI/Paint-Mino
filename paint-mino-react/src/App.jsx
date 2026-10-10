
import { useNavigate, Routes, Route } from 'react-router'
import Canvas from './components/canvas.jsx'
import './App.css'

function SetupPage() {
  const navigate = useNavigate()

  function handleCanvasSizeSubmit(event) {
    event.preventDefault()

    const form = event.currentTarget

    const canvasData = {
      canvasName: form.elements.namedItem('canvasName').value,
      width: Number(form.elements.namedItem('width').value),
      height: Number(form.elements.namedItem('height').value)
    }

    navigate('/canvas', { state: canvasData })
  }

  return (
    <>
      <div id="canvasSetup">
        <h1>Create a Canvas</h1>

        <form id="canvasSizeForm" onSubmit={handleCanvasSizeSubmit}>
          <label htmlFor="canvasName">Canvas Name:</label>
          <input
            type="text"
            id="canvasName"
            name="canvasName"
            required
          />

          <label htmlFor="width">Width:</label>
          <input
            type="number"
            id="width"
            name="width"
            min="1"
            required
          />

          <label htmlFor="height">Height:</label>
          <input
            type="number"
            id="height"
            name="height"
            min="1"
            required
          />

          <button type="submit">Create Canvas</button>
        </form>
      </div>

      <div id="savedImages">
        <h2>Saved Images</h2>
        <div id="savedImagesContainer"></div>
      </div>
    </>
  )
}

function App() {
  return (
    <Routes>
      <Route path="/" element={<SetupPage />} />
      <Route path="/canvas" element={<Canvas />} />
    </Routes>
  )
}

export default App