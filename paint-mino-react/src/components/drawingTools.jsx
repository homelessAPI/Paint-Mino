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
        ctx.lineCap = 'round';
        ctx.lineJoin = 'round';
        ctx.globalAlpha = 0.5;

        ctx.stroke();

        // Reset opacity
        ctx.globalAlpha = 1;

        console.log('pen')
    }

    function pencil(ctx, lastX, lastY, x, y, brushSize){
        ctx.globalCompositeOperation = 'source-over'; 
        
        // Declare the path coordinates
        ctx.beginPath(); 
        ctx.moveTo(lastX, lastY); 
        ctx.lineTo(x, y); 
        
        // Set styles and draw
        ctx.lineCap = 'round';
        ctx.lineJoin = 'round';
        ctx.lineWidth = brushSize;
        ctx.strokeStyle = 'rgba(60, 60, 60, 0.4)'; 
        ctx.setLineDash([1, 2]); 

        ctx.stroke();
        ctx.globalAlpha = 1;

        console.log('pencil')

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
        pencil: pencil,
        roundBrush: roundBrush,
        flatBrush: flatBrush,
        eraser: eraser
    }
}
