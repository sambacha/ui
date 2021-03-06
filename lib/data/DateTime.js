import * as React from "react";
export class DateTime extends React.PureComponent {
    render() {
        let { timestamp, locale } = this.props;
        let value = new Date(timestamp * 1000).toLocaleDateString(locale, {
            timeZone: "UTC",
            timeZoneName: "short",
            year: "numeric", month: "long", day: "numeric", hour: "numeric", minute: "numeric", second: "numeric"
        });
        return value;
    }
}
//# sourceMappingURL=DateTime.js.map