const DateRange = require('./dateRange');

test('check is creatable', () => {
  const newDateRange = DateRange.from();

  expect(newDateRange).not.toBe(null);
});

test('created dateRange has default start date and end date properties', () => {
  const newDateRange = DateRange.from();
  const startDate = newDateRange.start;
  const endDate = newDateRange.end;

  expect(typeof startDate).not.toEqual("undefined");
  expect(typeof endDate).not.toEqual("undefined");
})