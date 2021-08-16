import BubbleElement from './bubble';

test('dummy dom element could be generated with from', ()=> {
  const sampleElement = BubbleElement.from();

  expect(typeof sampleElement).not.toBe('undefined');
});