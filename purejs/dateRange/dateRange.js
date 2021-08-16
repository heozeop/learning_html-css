class DateRange {
  static from(...args) {
    return new DateRange(...args);
  }

  constructor(args) {
    let start = args?.start ?? Date.now();
    let end = args?.end ?? Date.now();

    this.start = new Date(start);
    this.end = new Date(end);
  }

  equal(dateRange) {
    const thisStartParsed = Date.parse(this.start);
    const thisEndParsed = Date.parse(this.end);
    const startParsed = Date.parse(dateRange.start);
    const endParsed = Date.parse(dateRange.end);


    return (thisStartParsed === startParsed && thisEndParsed === endParsed);
  }

  contain(dateRange) {
    const thisStartParsed = Date.parse(this.start);
    const thisEndParsed = Date.parse(this.end);
    const startParsed = Date.parse(dateRange.start);
    const endParsed = Date.parse(dateRange.end);

    return (thisStartParsed <= startParsed && endParsed <= thisEndParsed);
  }

  intersection(dateRange) {
    const thisStartParsed = Date.parse(this.start);
    const thisEndParsed = Date.parse(this.end);
    const startParsed = Date.parse(dateRange.start);
    const endParsed = Date.parse(dateRange.end);

    return !(thisStartParsed > endParsed || thisEndParsed < startParsed);
  }
}

module.exports = DateRange;