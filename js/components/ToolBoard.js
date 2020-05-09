class ToolBoard {
  constructor(container) {
    this.board = this.createBoard();
    this.attachToolBoard(container);
  }

  createBoard = () => {
    const board = document.createElement('div');
    board.classList.add('tool-details');
    return this.fillBoardWithContent(board);
  };

  createLabelElement = (label) => {
    const labelElement = document.createElement('span');
    labelElement.textContent = label;
    return labelElement;
  };

  fillBoardWithContent = (board) => {
    const nameLabel = 'Actual tool is: ';
    const nameWrapper = document.createElement('span');
    nameWrapper.classList.add('tool-name');

    const descLabel = 'Tool description: ';
    const descWrapper = document.createElement('span');
    descWrapper.classList.add('tool-desc');

    const sizeLabel = 'Actual size is: ';
    const sizeWrapper = document.createElement('span');
    sizeWrapper.classList.add('tool-size');

    const colorLabel ='Actual tool color: ';
    const colorContainer = document.createElement('span');
    colorContainer.classList.add('tool-color');

    board.appendChild(this.createLabelElement(nameLabel));
    board.appendChild(nameWrapper);

    board.appendChild(this.createLabelElement(descLabel));
    board.appendChild(descWrapper);

    board.appendChild(this.createLabelElement(sizeLabel));
    board.appendChild(sizeWrapper);

    board.appendChild(this.createLabelElement(colorLabel));
    board.appendChild(colorContainer);

    return board;
  };

  attachToolBoard = (container) => {
    document.querySelector(container).appendChild(this.board);
  };

  updateToolName = (newToolName) => {
    const nameWrapper = this.board.querySelector('.tool-name');
    nameWrapper.textContent = newToolName;
  };

  updateToolDesc = (newToolDesc) => {
    const descWrapper = this.board.querySelector('.tool-desc');
    descWrapper.textContent = newToolDesc;
  };

  updateToolSize = (newToolSize) => {
    const sizeWrapper = this.board.querySelector('.tool-size');
    sizeWrapper.textContent = `${newToolSize}px`;
  };

  updateToolColor = (newToolColor) => {
    const colorContainer = this.board.querySelector('.tool-color');
    colorContainer.style.backgroundColor = newToolColor;
  };

  updateToolInfo = ({toolName, toolDesc, toolSize, toolColor}) => {
    this.updateToolName(toolName);
    this.updateToolDesc(toolDesc);
    this.updateToolSize(toolSize);
    this.updateToolColor(toolColor);
  };

  test = () => {
    const NUMBER_OF_SPANS = 8;
    if(this.board.childElementCount === NUMBER_OF_SPANS){
      console.log('ToolBoard contains required number of children');
    } else {
      console.warn("ToolBoard doesn't contain required number of children");
    }
  }

}

export default ToolBoard;
