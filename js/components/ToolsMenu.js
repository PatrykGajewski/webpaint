class ToolsMenu {

  constructor(container) {
    this.menu = this.createMenu();
    this.createButtons();
    this.attachMenu(container);
    this.subscribers = [];
  }

  createMenu = () => {
    const menu = document.createElement('div');
    menu.classList.add('tools-menu');
    return menu;
  };

  createButton = (btnName, btnSelector) => {
    const button = document.createElement('button');
    button.setAttribute('data-tool', btnSelector);
    button.textContent = btnName;
    button.addEventListener('click', () => {
      this.subscribers.forEach(subscriber => subscriber(btnSelector));
    });
    return button;

  };

  createButtons = () => {
    this.menu.appendChild(this.createButton('Pencil', 'pencil'));
    this.menu.appendChild(this.createButton('Brush', 'brush'));
    this.menu.appendChild(this.createButton('Rubber', 'rubber'));
  };

  attachMenu = (container) => {
    document.querySelector(container).appendChild(this.menu);
  };

  subscribe(subscriber) {
    this.subscribers.push(subscriber);
  }

  updateActiveTool = (subscriberSelector) => {
  const allMenuButtons = this.menu.querySelectorAll('button').forEach(btn => {
    btn.classList.remove('active');
  });
  const activeButton = this.menu.querySelector(`button[data-tool="${subscriberSelector}"]`);
  activeButton.classList.add('active');
  };

  test = () => {
    const NUMBER_OF_BUTTONS = 3;
    if(this.menu.childElementCount === NUMBER_OF_BUTTONS){
      console.log('ToolsMenu contains required number of children');
    } else {
      console.warn("ToolsMenu doesn't contain required number of children");
    }
  }


}

export default ToolsMenu;
