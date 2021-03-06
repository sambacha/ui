import * as datetimeDifference from "datetime-difference";
const defaultTranslations = {
    future: "in %s",
    past: "%s ago",
    s: "1 second",
    ss: "%d seconds",
    m: "1 minute",
    mm: "%d minutes",
    h: "1 hour",
    hh: "%d hours",
    d: "1 day",
    dd: "%d days",
    M: "1 month",
    MM: "%d months",
    y: "1 year",
    yy: "%d years"
};
let unitCodes = {
    years: "y",
    months: "M",
    days: "d",
    hours: "h",
    minutes: "m",
    seconds: "s"
};
export class RelativeTimeFormatter {
    constructor(translations = defaultTranslations) {
        this.translations = translations;
    }
    formatDiff(d1, d2) {
        let formatted = this.format(d1, d2);
        return this.formatRelativeTime(formatted, d1 < d2);
    }
    formatInterval(intv) {
        let present = new Date().getTime();
        let before = present - intv;
        return this.format(present, before);
    }
    format(d1, d2) {
        let diff = datetimeDifference(new Date(d1), new Date(d2));
        let units = ["years", "months", "days", "hours", "minutes", "seconds"];
        let firstSignificantIdx = units.findIndex(unit => diff[unit] !== 0);
        if (firstSignificantIdx === -1) {
            return this.humanizeDiffUnit(0, "seconds");
        }
        else {
            let formatted = "";
            let firstUnit = units[firstSignificantIdx];
            formatted += this.humanizeDiffUnit(diff[firstUnit], firstUnit);
            if (firstSignificantIdx + 2 < units.length) {
                let secondUnit = units[firstSignificantIdx + 1];
                if (diff[secondUnit] !== 0) {
                    formatted += " " + this.humanizeDiffUnit(diff[secondUnit], secondUnit);
                }
            }
            return formatted;
        }
    }
    humanizeDiffUnit(value, unit) {
        let unitCode = value === 1 ?
            unitCodes[unit] :
            unitCodes[unit] + unitCodes[unit];
        return this.translations[unitCode].replace(/%d/i, "" + value);
    }
    formatRelativeTime(value, future) {
        return this.translations[future ? "future" : "past"].replace(/%s/i, value);
    }
}
//# sourceMappingURL=RelativeTimeFormatter.js.map