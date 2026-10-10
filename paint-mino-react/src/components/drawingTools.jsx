export function drawingTools() {
    function pen(ctx, lastX, lastY, x, y, brushSize) {
        // 1. Reset composite operation back to normal drawing mode
        ctx.globalCompositeOperation = 'source-over'; 
        
        // 2. Declare the path coordinates
        ctx.beginPath(); 
        ctx.moveTo(lastX, lastY); 
        ctx.lineTo(x, y); 
        
        // 3. Set styles and draw
        ctx.strokeStyle = 'black';
        ctx.lineWidth = brushSize;
        ctx.stroke();
    }
    
    function eraser(ctx, lastX, lastY, x, y, brushSize, eraserSize) {
        // 1. Turn brush transparent to cut away pixels
        ctx.globalCompositeOperation = 'destination-out';
        
        // 2. Declare the path coordinates
        ctx.beginPath(); 
        ctx.moveTo(lastX, lastY); 
        ctx.lineTo(x, y); 
        
        // 3. Set styles and draw
        ctx.lineWidth = eraserSize;
        ctx.stroke();
    }

    return {
        pen: pen,
        eraser: eraser
    }
}
