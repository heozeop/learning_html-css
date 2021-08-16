export interface IBubbleElement extends IBubble {
  parents?: IBubbleElement[];
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
  parents?: BubbleElement[];

  static from(...args: any[]) {
    return new BubbleElement(...args);
  }

  constructor(id: string, type: string, listener: (event: string) => void) {
    this.id = id;
    this.type = type;
    this.onEvent = (event: string) => {
      listener(event);
      if(this.parents) {
        this.parents.forEach(element => element.onEvent(event));
      }
    }
    this.addChild = this.addChild.bind(this);
    this.removeChild = this.removeChild.bind(this);
  }

  addChild(child: IBubbleElement) {
    if(!child.parents) {
      child.parents = [this];
      return;
    }

    const isExist = child.parents.find(element => element.id === this.id);
    if(!isExist) {
      child.parents.push(this);
    }
  }

  removeChild(child: IBubbleElement) {
    child.parents = child.parents?.filter(element => (element.id !== this.id || element.type !== this.type)) 
  }
}
