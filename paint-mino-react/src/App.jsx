import { useState } from 'react'
import './App.css'

function App() {

  return (
    <>
      <div id="canvasSetup">
        <form id="canvasSizeForm">
            <label for="canvasName">Canvas Name:</label>
            <input type="text" id="canvasName" name="canvasName" required/>
            <label for="width">Width:</label>
            <input type="number" id="width" name="width" min="1" required/>
            <label for="height">Height:</label>
            <input type="number" id="height" name="height" min="1" required/>
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

export default App
