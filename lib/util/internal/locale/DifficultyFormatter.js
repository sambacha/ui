export class DifficultyFormatter {
    constructor(bigNumberFormatter) {
        this.bigNumberFormatter = bigNumberFormatter;
    }
    format(value, locale) {
        let units = ["H", "KH", "MH", "GH", "TH", "PH"];
        for (let i = units.length - 1; i >= 0; --i) {
            let shiftedVal = value.shiftedBy(-3 * i);
            if (!i || shiftedVal.isGreaterThanOrEqualTo(1)) {
                return this.bigNumberFormatter.format(shiftedVal, locale) + " " + units[i];
            }
        }
        throw new Error(`Should be unreachable`);
    }
}
//# sourceMappingURL=DifficultyFormatter.js.map