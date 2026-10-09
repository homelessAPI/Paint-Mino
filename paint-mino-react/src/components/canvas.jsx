import App from '../App.jsx'


function canvas({width, height, canvasName}) {
    
    return (
        <>
        <div id="canvasSetup">
            <canvas id="canvas" width={width} height={height}></canvas>
            <button id="Save-image">Save Image</button>
        </div>
        </>
    )
}

export default canvas