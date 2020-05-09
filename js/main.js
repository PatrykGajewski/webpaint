import {
  DrawingBoard,
  ToolsFactory,
  ToolsMenu,
  ToolBoard,
} from "./components";


const ApplicationLogic = () => {
  window.addEventListener('load', function () {
    const drawingBoardContainer = document.querySelector('.draw-board-container');
    const drawingBoardHeight = drawingBoardContainer.clientHeight;
    const drawingBoardWidth = drawingBoardContainer.clientWidth;

    const toolsFactory = new ToolsFactory();
    const toolsMenu = new ToolsMenu('.tools-menu-container');
    const drawingBoard = new DrawingBoard('.draw-board-container', drawingBoardWidth, drawingBoardHeight);
    const infoBoard = new ToolBoard('.tool-board-container');

    toolsMenu.subscribe( selectedTool => {
      const toolFromFactory = toolsFactory.getTool(selectedTool);
      drawingBoard.changeTool(toolFromFactory);
      infoBoard.updateToolInfo(toolFromFactory.getToolInfo());
    });

    toolsMenu.subscribe(selectedTool => {
      toolsMenu.updateActiveTool(selectedTool);
    });

    // NOTE below test of each component
    toolsFactory.test();
    toolsMenu.test();
    drawingBoard.test();
    infoBoard.test();
  })
};

ApplicationLogic();





