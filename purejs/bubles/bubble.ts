interface IBubbleElement {
  id: string;
  type: string;
  onevent: (event: string) => void;
  addchild: (child: IBubbleElement) => void;
  removechild: (child: IBubbleElement) => void;
}

export default class  BubbleElement {
  static from(...args) {
    return new BubbleElement(...args);
  }
}