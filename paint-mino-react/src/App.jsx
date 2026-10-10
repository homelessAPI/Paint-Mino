
import {useState} from 'react'
import { useNavigate, Routes, Route } from 'react-router'
import Canvas from './components/canvas.jsx'
import './App.css'

function App() {
  const [canvasData, setCanvasData] = useState(null)
  const navigate = useNavigate()
  
  function handleSubmit(event) {
    event.preventDefault()

    const form = event.target
    const formData = new FormData(form)

    const newCanvasData = {
      name: formData.get('canvasName'),
      width: formData.get('width'),
      height: formData.get('height'),
    };

    setCanvasData(newCanvasData)
    navigate('/canvas', {state: newCanvasData})
    console.log('Canvas Data:', canvasData)
  }
  return (
    <>
    <h1>Paint Mino</h1>

    <Routes>
      <Route path="/" element={
        <form onSubmit={handleSubmit}>
      <label htmlFor="canvasName">Canvas Name:</label>
      <input type="text" id="canvasName" name="canvasName" required />
      
      <label htmlFor="width">Width:</label>
      <input type="number" id="width" name="width" required />

      <label htmlFor="height">Height:</label>
      <input type="number" id="height" name="height" required />

      <button type="submit">Create Canvas</button>
    </form>
      }/>
      <Route path="/canvas" element={<Canvas />}/>
    </Routes>

    {canvasData && (
      <div>
        <h2>Saved Canvas Settings</h2>
        <p>Name: {canvasData.name}</p>
        <p>Width: {canvasData.width}</p>
        <p>Height: {canvasData.height}</p>
      </div>
    )}
    </>
  )
}

export default App