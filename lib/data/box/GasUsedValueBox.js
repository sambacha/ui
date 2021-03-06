import * as React from "react";
import { ValueBox } from "../../layout/content/box/ValueBox";
import { Gauge } from "../vis/Gauge";
import { GasPercentageBox } from "./GasPercentageBox";
import { NumberBox } from "./NumberBox";
export class GasUsedValueBox extends React.Component {
    render() {
        let { value, limit, locale } = this.props;
        let percentFraction = value.dividedBy(limit).toNumber();
        return (React.createElement(React.Fragment, null,
            !limit.isZero() && React.createElement(ValueBox, null,
                React.createElement(Gauge, { value: Math.floor(percentFraction * 100), width: 32, height: 16 })),
            React.createElement(NumberBox, { value: value, locale: locale }),
            !limit.isZero() && React.createElement(GasPercentageBox, null, percentFraction.toLocaleString(locale, {
                style: "percent", minimumFractionDigits: 0, maximumFractionDigits: 2
            }))));
    }
}
//# sourceMappingURL=GasUsedValueBox.js.map