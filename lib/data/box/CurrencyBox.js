import * as React from "react";
import { ValueBox } from "../../layout/content/box/ValueBox";
import { Currency } from "../Currency";
export class CurrencyBox extends React.Component {
    render() {
        let { value, locale, symbol } = this.props;
        return (React.createElement(ValueBox, null,
            React.createElement(Currency, { value: value, locale: locale, symbol: symbol })));
    }
}
//# sourceMappingURL=CurrencyBox.js.map