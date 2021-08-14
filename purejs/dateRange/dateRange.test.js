const DateRange = require('./dateRange');

test('check is creatable', () => {
  const newDateRange = DateRange.from();

  expect(newDateRange).not.toBe(null);
})