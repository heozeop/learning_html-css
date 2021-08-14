class DateRange {
  static from(...args) {
    return new DateRange(...args);
  }

  constructor(args) {
    const today = new Date();
    this.start = args?.start ?? today.getDate();
    this.end = args?.end ?? new Date(today.getDate() + 1);
  }
}

module.exports = DateRange;