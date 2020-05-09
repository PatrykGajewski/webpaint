import { Brush, Pencil, Rubber } from "./tools/index.js";

class ToolsFactory {

  constructor() {
    this.brush = new Brush(8,'green');
    this.pencil = new Pencil(4, 'red');
    this.rubber = new Rubber(12, 'white');
  }

  getTool(tool) {
    switch (tool) {
      case 'brush':
        return this.brush;
      case 'pencil':
        return this.pencil;
      case 'rubber':
        return this.rubber;
    }
  }

  test = () => {
    if (typeof this.brush === 'object'){
        console.log('ToolsFactory contains correct type of tools');
      } else {
        console.warn('ToolsFactory contains incorrect type of tools');
      }

    if(this.getTool('brush') === this.brush){
      console.log('ToolsFactory returns correct type of tools');
    } else {
      console.warn('ToolsFactory returns incorrect type of tools');
    }
  }

}

export default ToolsFactory;
