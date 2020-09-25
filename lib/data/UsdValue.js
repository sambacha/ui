import * as React from "react";
export class UsdValue extends React.Component {
    render() {
        const { value, locale } = this.props;
        return value.toLocaleString(locale, {
            currency: "USD",
            currencyDisplay: "symbol",
            style: "currency"
        });
    }
}
//# sourceMappingURL=UsdValue.js.map