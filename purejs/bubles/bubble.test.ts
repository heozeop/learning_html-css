import BubbleElement, { IBubbleElement } from './bubble';

test('dummy dom element could be generated with from', ()=> {
  const sampleElement = BubbleElement.from();

  expect(typeof sampleElement).not.toBe('undefined');
});

test('bubble element has id and type which can be undefine ', ()=>{
  const sampleElement = BubbleElement.from();
  const sample2Element = BubbleElement.from('1');

  expect(typeof sampleElement.id).toEqual('undefined');
  expect(typeof sampleElement.type).toEqual('undefined');

  expect(typeof sample2Element.id).toEqual('string');
  expect(typeof sample2Element.type).toEqual('undefined');
});

describe('if one bubble element got child', ()=>{
  let parentFunction: jest.Mock<void, [event: string]>, childFunction: jest.Mock<void, [event: string]>, 
  parentElement: IBubbleElement, childElement: IBubbleElement;
  beforeEach(()=>{
    parentFunction = jest.fn((event: string) => {})
    childFunction = jest.fn((event: string) => {})
    parentElement = BubbleElement.from('1', 'parent', parentFunction);
    childElement = BubbleElement.from('2', 'child', childFunction);
    parentElement.addChild(childElement);
  })


  test('trigger event on child event', () => {
    childElement.onEvent('hello world');
    expect(parentFunction).toHaveBeenCalled();
  })

  test('can remove child', () => {
    parentElement.removeChild(childElement);
    childElement.onEvent('hello world');
    expect(parentFunction).not.toHaveBeenCalled();
  })
})


describe('if one bubble element got multi child', ()=>{
  let parentFunction: jest.Mock<void, [event: string]>, childFunctions: jest.Mock<void, [event: string]>[], 
  parentElement: IBubbleElement, childElements: IBubbleElement[];
  beforeEach(()=>{
    const numOfChildren = 3;
    parentFunction = jest.fn((event: string) => {})
    childFunctions = Array(numOfChildren).fill(1).map(() => jest.fn((event: string) => {}))
    parentElement = BubbleElement.from('1', 'parent', parentFunction);
    childElements = Array(numOfChildren).fill(1).map((_, index) => BubbleElement.from((index + 2).toString(), 'child', childFunctions[index]));
    childElements.forEach(childElement => {
      parentElement.addChild(childElement);
    })
  })

  test('can remove one of them', () => {
    parentElement.removeChild(childElements[0]);
    childElements[0].onEvent('hello world');
    childElements[1].onEvent('hello world');

    expect(parentFunction).toHaveBeenCalledTimes(1);
  })
})

describe('if one bubble element got child and grandchild', ()=>{
  let mockFunctions: jest.Mock<void, [event: string]>[], mockElements: IBubbleElement[];
  beforeEach(()=>{
    const numOfElement = 3
    const arrayForTest = Array(numOfElement).fill(1);
    mockFunctions = arrayForTest.map(() => jest.fn((event: string) => {}));
    mockElements = mockFunctions.map((func, index) => BubbleElement.from(index.toString(), 'bro', func));

    mockElements[0].addChild(mockElements[1]);
    mockElements[1].addChild(mockElements[2]);
  });

  test('parent function called on grand children event',() => {
    mockElements[2].onEvent('hello world');
    expect(mockFunctions[1]).toHaveBeenCalled();
    expect(mockFunctions[0]).toHaveBeenCalled();
  }) 

  test('parent cannot delete grand child', () => {
    mockElements[0].removeChild(mockElements[2]);
    mockElements[2].onEvent('hello world');
    expect(mockFunctions[0]).toHaveBeenCalled();
  })
})


describe('if one bubble element multi parents', ()=>{
  let mockFunctions: jest.Mock<void, [event: string]>[], mockElements: IBubbleElement[];
  beforeEach(()=>{
    const numOfElement = 3
    const arrayForTest = Array(numOfElement).fill(1);
    mockFunctions = arrayForTest.map(() => jest.fn((event: string) => {}));
    mockElements = mockFunctions.map((func, index) => BubbleElement.from(index.toString(), 'bro', func));

    mockElements[0].addChild(mockElements[2]);
    mockElements[1].addChild(mockElements[2]);
  });

  test('parents are called on child event',() => {
    mockElements[2].onEvent('hello world');
    expect(mockFunctions[1]).toHaveBeenCalled();
    expect(mockFunctions[0]).toHaveBeenCalled();
  }) 

  test('parent can delete child independantly', () => {
    mockElements[0].removeChild(mockElements[2]);
    mockElements[2].onEvent('hello world');
    expect(mockFunctions[1]).toHaveBeenCalled();
    expect(mockFunctions[0]).not.toHaveBeenCalled();
  })
})