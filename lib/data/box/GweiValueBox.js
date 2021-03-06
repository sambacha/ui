import * as React from "react";
import { ValueBox } from "../../layout/content/box/ValueBox";
import { weiToGwei } from "../../util/internal/wei";
import { BigNumberFormatter } from "../../util/internal/locale/BigNumberFormatter";
export class GweiValueBox extends React.Component {
    render() {
        return (React.createElement(ValueBox, { variant: this.props.variant, colors: this.props.colors }, this.formatGwei(weiToGwei(this.props.wei), this.props.locale)));
    }
    formatGwei(value, locale) {
        return new BigNumberFormatter().format(value, locale, {
            minimumFractionDigits: 0,
            maximumFractionDigits: 4
        }) + " Gwei";
    }
}
//# sourceMappingURL=GweiValueBox.js.map