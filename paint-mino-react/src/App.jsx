
import {useState, useRef} from 'react'
import { useNavigate, Routes, Route } from 'react-router'
import Canvas from './components/canvas.jsx'
import './assets/CSS/App.css'

function App() {

  const [canvasData, setCanvasData] = useState(null)
  const [deleteButtonColor, setDeleteButtonColor] = useState('rgb(9, 9, 9)')
  const [savedPaintings, setSavedPaintings] = useState(() => {
    const storedPaintings = JSON.parse(localStorage.getItem('myPaintings')) || [];
    return Array.isArray(storedPaintings)? storedPaintings : [storedPaintings]; 
  })
  const selectedPaintings = useRef([])
  const timerRef = useRef(null)
  const isLongPressRef = useRef(false)
  const navigate = useNavigate()
  
  function handleSubmit(event) {
    event.preventDefault()

    const form = event.target
    const formData = new FormData(form)

    const newCanvasData = {
      id: crypto.randomUUID(),
      name: formData.get('canvasName'),
      width: formData.get('width'),
      height: formData.get('height'),
    };

    setCanvasData(newCanvasData)
    navigate('/canvas', {state: newCanvasData})
    console.log('Canvas Data:', canvasData)
  }

  function openPainting(paintingName) {
    if (isLongPressRef.current) {return "Long click enable, canvas open disabled"}
    console.log("Clicked:", paintingName);

    const paintings = JSON.parse(localStorage.getItem('myPaintings')) || [];

    for (const painting of paintings) {
        if (painting.name === paintingName) {
            console.log("Found painting:", painting);
            navigate(`/canvas/${painting.id}`, { state: painting });
            return;
        }
    }

    console.log("Painting not found");
  }

  function selectionSystem(painting){
    selectedPaintings.current = [painting]
    console.log("painting selected:", selectedPaintings.current)
    
  }

  const handlePointerDown = (painting) => {
    isLongPressRef.current = false
    timerRef.current = setTimeout(() => {
    isLongPressRef.current = true; 
    console.log("handle pointer down works")
    selectionSystem(painting);
  }, 600);
  }

  const handlePointerUp = (painting) => {
    if (timerRef.current) {
      clearTimeout(timerRef.current);
    }
    if (!isLongPressRef.current) {
      openPainting(painting.name)
  }
  };

  const handlePointerCancel = () => {
  if (timerRef.current) {
      clearTimeout(timerRef.current);
    }
  }

  const handleDelete = () => {
  const namesToDelete = selectedPaintings.current.map(p => p.name);
  
  if (namesToDelete.length === 0) return;

  const updatedPaintings = savedPaintings.filter(
    painting => !namesToDelete.includes(painting.name)
  );

  setSavedPaintings(updatedPaintings);

  localStorage.setItem("myPaintings", JSON.stringify(updatedPaintings));

  selectedPaintings.current = [];
};


  return (
    <>

    <Routes>
      <Route path="/" element={
        <div>
          <h1 id='mainName'>Paint Mino</h1>
          <div id='canvasCreation'>
            <form onSubmit={handleSubmit}>
            <label htmlFor="canvasName">Canvas Name:</label>
            <input type="text" id="canvasName" name="canvasName" required />
            
            <label htmlFor="width">Width:</label>
            <input type="number" id="width" name="width" required />

            <label htmlFor="height">Height:</label>
            <input type="number" id="height" name="height" required />

            <button type="submit">Create Canvas</button>
          </form>

          </div>
          <div id='savedImages'>
            <h1>Saved Paintings</h1>
            <div id="savedImagesContainer">
              <button onClick={handleDelete }>Delete</button>
              <div id='paintingsList'>
                {savedPaintings.map((painting) => (
                  <div id='painting' key={painting.name}>
                     <button
                      onPointerDown={() => handlePointerDown(painting)}
                      onPointerUp={() => handlePointerUp(painting)}
                      onPointerLeave={handlePointerCancel}
                      onPointerCancel={handlePointerCancel}
                      >
                       <img src={painting.image} alt={painting.name} />
                       <h3>{painting.name}</h3>
                     </button>
                  </div>
              ))}
              </div>
            </div>
          </div>
        </div>

    
      }/>
      <Route path="/canvas" element={<Canvas />} />
      <Route path="/canvas/:canvasId" element={<Canvas />} />   
    </Routes>
    </>
  )
}

export default App