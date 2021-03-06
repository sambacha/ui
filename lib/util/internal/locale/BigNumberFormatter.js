import { getNumberSeparator } from "./numberFormat";
export class BigNumberFormatter {
    static getBnFormat(locale) {
        let fmt = this.formats.get(locale);
        if (!fmt) {
            fmt = {
                decimalSeparator: getNumberSeparator(locale, "decimal"),
                groupSeparator: getNumberSeparator(locale, "group"),
                groupSize: 3
            };
            this.formats.set(locale, fmt);
        }
        return fmt;
    }
    format(num, locale, options = {}) {
        let fmt = BigNumberFormatter.getBnFormat(locale);
        num = num.decimalPlaces(options.maximumFractionDigits !== void 0 ? options.maximumFractionDigits : 3);
        if (options.minimumFractionDigits !== void 0) {
            let fractionDigits = num.decimalPlaces();
            if (fractionDigits < options.minimumFractionDigits) {
                return num.toFormat(options.minimumFractionDigits, fmt);
            }
        }
        return num.toFormat(fmt);
    }
}
BigNumberFormatter.formats = new Map();
//# sourceMappingURL=BigNumberFormatter.js.map