class DateRange {
  static from(...args) {
    return new DateRange(...args);
  }

  constructor(args) {
    let start = Date.now();
    let end = Date.now();
    if (args) {
      start = args[0];
      end = args[1];
    }

    this.start = new Date(start);
    this.end = new Date(end);
  }
}

module.exports = DateRange;