export class Converts {
  static rateWithTwoDecimal(rate: number, isNull: boolean = false): number | null {
    if (isNull && rate === null) {
      return null;
    } else {
      const rateString = (Math.round(Number((rate * 100).toPrecision(15))) / 100).toFixed(2);
      return parseFloat(rateString);
    }
  }
}
