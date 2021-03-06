import * as React from "react";
import { NumberFormatter } from "../util/internal/locale/NumberFormatter";
import { BigNumberFormatter } from "../util/internal/locale/BigNumberFormatter";
export class Number extends React.Component {
    render() {
        let { value, locale } = this.props;
        return typeof value !== "number" ?
            new BigNumberFormatter().format(value, locale) :
            new NumberFormatter().format(value, locale);
    }
}
//# sourceMappingURL=Number.js.map