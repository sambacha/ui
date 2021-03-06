import * as React from "react";
import { Number } from "./Number";
export class Currency extends React.Component {
    render() {
        let { value, locale, symbol } = this.props;
        return (React.createElement(React.Fragment, null,
            React.createElement(Number, { value: value, locale: locale }),
            symbol ? " " + symbol : ""));
    }
}
//# sourceMappingURL=Currency.js.map