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
});

test('dateRange has equal function', () => {
  const firstDateRange = DateRange.from('1998', '1999.1');
  const secondDateRange = DateRange.from('1998', '1999.1');
  const thirdDateRange = DateRange.from('1999.2', '2000');

  expect(firstDateRange.equal(secondDateRange)).toBe(true);
  expect(secondDateRange.equal(firstDateRange)).toBe(false);
})