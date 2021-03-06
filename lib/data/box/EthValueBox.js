import * as React from "react";
import { ValueBox } from "../../layout/content/box/ValueBox";
import { EthValue } from "../EthValue";
export class EthValueBox extends React.Component {
    render() {
        let { wei, locale, decimals, symbol } = this.props;
        let colors = this.props.colors || (wei.isGreaterThan(0) ? "primary" : "secondary");
        return (React.createElement(ValueBox, { variant: this.props.variant, colors: colors },
            React.createElement(EthValue, { wei: wei, locale: locale, decimals: decimals, showSymbol: true, symbol: symbol })));
    }
}
//# sourceMappingURL=EthValueBox.js.map