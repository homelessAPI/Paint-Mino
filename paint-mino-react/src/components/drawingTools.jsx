export function drawingTools() {
    function pen(ctx, lastX, lastY, x, y, brushSize) {
        ctx.globalCompositeOperation = 'source-over'; 
        
        // Declare the path coordinates
        ctx.beginPath(); 
        ctx.moveTo(lastX, lastY); 
        ctx.lineTo(x, y); 
        
        // Set styles and draw
        ctx.strokeStyle = 'black';
        ctx.lineWidth = brushSize;
        ctx.lineCap = 'round'
        ctx.lineJoin = 'round'
        ctx.globalAlpha = 0.85
        ctx.stroke();
    }

    function pencil(){
        ctx.globalCompositeOperation = 'source-over'; 
        
        // Declare the path coordinates
        ctx.beginPath(); 
        ctx.moveTo(lastX, lastY); 
        ctx.lineTo(x, y); 
        
        // Set styles and draw
        ctx.lineCap = 'round';
        ctx.lineJoin = 'round';
        ctx.lineWidth = 2.5;
        ctx.strokeStyle = 'rgba(60, 60, 60, 0.4)'; 
        ctx.setLineDash([1, 2]); 

    }
    function roundBrush(){}
    function flatBrush(){}
    
    function eraser(ctx, lastX, lastY, x, y, eraserSize) {
        // Turn brush transparent to cut away pixels
        ctx.globalCompositeOperation = 'destination-out';
        
        // Declare the path coordinates
        ctx.beginPath(); 
        ctx.moveTo(lastX, lastY); 
        ctx.lineTo(x, y); 
        
        // Set styles and draw
        ctx.lineWidth = eraserSize;
        ctx.stroke();
    }

    return {
        pen: pen,
        eraser: eraser
    }
}
