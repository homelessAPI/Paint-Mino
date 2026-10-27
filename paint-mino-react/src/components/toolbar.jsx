import React from "react";
import { useNavigate } from "react-router";
import { saveImage } from "./features";
import '../assets/CSS/Toolbar.CSS'

// 1. Destructure the shared states and setters provided by Canvas.jsx
function ToolBar({
    canvasRef, 
    canvasData, 
    activeTool, 
    setActiveTool, 
    brushSize, 
    setbrushSize, 
    eraserSize, 
    seteraserSize
}) {
    const navigate = useNavigate()
    return (
        <header>
            <nav>
                 <button onClick={()=> navigate('/')}>Setup</button>
                <button onClick={() => saveImage(canvasRef, canvasData)}>Save Image</button>

                <select value={activeTool} onChange={(e) => setActiveTool(e.target.value)}>
                    <option value='pen'>Pen</option>
                    <option value='pencil'>Pencil</option>
                    <option value='roundBrush'>Round Brush</option>
                    <option value='flatBrush'>Flat Brush</option>
                    <option value='gouacheBrush'>Gouache Brush</option>
                </select>
                
                <button 
                    onClick={() => setActiveTool('eraser')} 
                    id='eraserTool'
                    style={{ backgroundColor: activeTool === 'eraser' ? '#ddd' : 'transparent' }}
                >
                    Eraser
                </button>

                <label htmlFor="brushSize">Brush Size: {brushSize}</label>
                <input 
                    id='brushSize' 
                    type='range' 
                    min={1} 
                    max={100} 
                    name='brushSize' 
                    value={brushSize} 
                    onChange={(e) => setbrushSize(Number(e.target.value))}
                />

                <label htmlFor="eraserSize">Eraser Size: {eraserSize}</label>
                <input 
                    id='eraserSize' 
                    type='range' 
                    min={1} 
                    max={200} 
                    name='eraserSize' 
                    value={eraserSize} 
                    onChange={(e) => seteraserSize(Number(e.target.value))}
                />
            </nav>
        </header>
    )
}

export default ToolBar;
