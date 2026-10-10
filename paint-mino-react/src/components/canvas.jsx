
import { useLocation, useNavigate } from 'react-router'

function Canvas() {
  const location = useLocation()
  const navigate = useNavigate()

  const canvasData = location.state

  if (!canvasData) {
    return (
      <div>
        <h2>No canvas selected</h2>
        <button onClick={() => navigate('/')}>
          Back to Setup
        </button>
      </div>
    )
  }

  return (
    <div id="workspace">
      <h1>{canvasData.canvasName}</h1>

      <canvas
        id="canvas"
        width={canvasData.width}
        height={canvasData.height}
        style={{
          border: '1px solid black',
          maxWidth: '100%',
          height: 'auto'
        }}
      />

      <div>
        <button>Save Image</button>
        <button onClick={() => navigate('/')}>
          Back to Setup
        </button>
      </div>
    </div>
  )
}

export default Canvas