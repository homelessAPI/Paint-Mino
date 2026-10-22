
export function saveImage(canvasRef, canvasData) {
    const canvasImage = canvasRef.current.toDataURL();

    const savedPainting = {
        id: canvasData.id || canvasData.name,
        name: canvasData.name,
        width: canvasRef.current.width,
        height: canvasRef.current.height,
        image: canvasImage
    };

    let savedPaintings =
        JSON.parse(localStorage.getItem('myPaintings')) || [];

    const existingIndex = savedPaintings.findIndex(
        painting => painting.id === savedPainting.id
    );

    if (existingIndex !== -1) {
        savedPaintings[existingIndex] = savedPainting;
    } else {
        savedPaintings.push(savedPainting);
    }

    localStorage.setItem(
        'myPaintings',
        JSON.stringify(savedPaintings)
    );
}
