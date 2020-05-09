export class Rubber {
  constructor(capSize, color) {
    this._drawing = false;
    this._capSize = capSize || 10;
    this._color = color || 'white';
  }

  onMouseMove(x, y, ctx){
    if(this._drawing) {
      ctx.lineWidth = this._capSize;
      ctx.lineCap = 'round';
      ctx.strokeStyle = this._color;
      ctx.lineTo(x,y);
      ctx.stroke();
    }
  }

  onMouseUp(x, y, ctx) {
    this._drawing = false;
    ctx.beginPath();
  }

  onMouseDown(x,y, ctx) {
    if(!this._drawing){
      this._drawing = true;
    }
  }

  getToolInfo = () => {
    return {
      toolName: 'Rubber',
      toolDesc: 'Tool used to erase drew lines',
      toolSize: this._capSize,
      toolColor: this._color,
    }
  }

}

export default Rubber;
