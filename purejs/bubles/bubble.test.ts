import BubbleElement from './bubble';

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
  const parentFunction = jest.fn((event: string) => {})
  const childFunction = jest.fn((event: string) => {})
  const parentElement = BubbleElement.from('1', 'parent', parentFunction);
  const childElement = BubbleElement.from('2', 'child', childFunction);
  parentElement.addChild(childElement);

  test('trigger event on child event', () => {
    childElement.onEvent('hello world');
    expect(parentFunction).toHaveBeenCalledTimes(1);
  })
})