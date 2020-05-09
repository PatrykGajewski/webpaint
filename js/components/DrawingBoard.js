class DrawingBoard {
  constructor(container, width, height) {
    this.currentTool = null;
    this.attachCanvas(container, this.createCanvas(width, height));
  }

  createCanvas(width, height) {
    const canvas = document.createElement('canvas');
    // NOTE that we will draw on that context
    const context = canvas.getContext('2d');
    canvas.width = width;
    canvas.height = height;

    // NOTE below required event listeners
    canvas.addEventListener('mousemove', event => {
      if(this.currentTool){
        this.currentTool.onMouseMove(event.offsetX, event.offsetY, context);
      }
    });

    canvas.addEventListener('mousedown', event => {
      if(this.currentTool){
        this.currentTool.onMouseDown(event.offsetX, event.offsetY, context);
      }
    });

    canvas.addEventListener('mouseup', event => {
      if(this.currentTool){
        this.currentTool.onMouseUp(event.offsetX, event.offsetY, context);
      }
    });

    return canvas;
  }

  attachCanvas(container, canvas) {
    document.querySelector(container).appendChild(canvas);
  }

  changeTool(tool){
    this.currentTool = tool;
  }

  test = () => {
    const CREATED_TAG_NAME = "CANVAS";
    if(this.createCanvas(200, 100).tagName === CREATED_TAG_NAME){
      console.log('DrawingBoar correctly created canvas element');
    } else {
      console.warn('DrawingBoar incorrectly created canvas element');
    }
  }
}

export default DrawingBoard;
