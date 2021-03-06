import * as React from "react";
export class ShortDate extends React.PureComponent {
    render() {
        let { timestamp, locale } = this.props;
        let value = new Date(timestamp * 1000).toLocaleDateString(locale, {
            timeZone: "UTC", year: "numeric", month: "short", day: "numeric"
        });
        return value;
    }
}
//# sourceMappingURL=ShortDate.js.map