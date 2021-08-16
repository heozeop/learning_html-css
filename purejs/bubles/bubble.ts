export interface IBubbleElement extends IBubble {
  addChild: (child: IBubbleElement) => void;
  removeChild: (child: IBubbleElement) => void;
}

export interface IBubble {
  id: string;
  type: string;
  onEvent: (event: string) => void;
}

export default class  BubbleElement implements IBubbleElement {
  id: string;
  type: string;
  onEvent: (event: string) => void;

  static from(...args: any[]) {
    return new BubbleElement(...args);
  }

  constructor(id: string, type: string, listener: (event: string) => void) {
    this.id = id;
    this.type = type;
    this.onEvent = (event: string) => {
      listener(event);
    }
    this.addChild = this.addChild.bind(this);
    this.removeChild = this.removeChild.bind(this);
  }

  addChild(child: IBubbleElement) {
    const duplicateChild = Object.assign({}, child);
    child.onEvent = (event: string) => {
      duplicateChild.onEvent(event);
      this.onEvent(event);
    }

    const duplicateThis = Object.assign({}, this);
    this.removeChild = (inputChild: IBubbleElement) => {
      duplicateThis.removeChild(inputChild);
      if(inputChild.type === child.type && inputChild.id == child.id) {
        inputChild.onEvent = (event: string) => {
          duplicateChild.onEvent(event);
        }
      }
    };
  }

  removeChild(child: IBubbleElement) {

  }
}
