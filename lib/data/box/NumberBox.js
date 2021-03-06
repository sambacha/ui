import * as React from "react";
import { ValueBox } from "../../layout/content/box/ValueBox";
import { Number } from "../Number";
export class NumberBox extends React.Component {
    render() {
        let { value, locale } = this.props;
        return (React.createElement(ValueBox, null,
            React.createElement(Number, { value: value, locale: locale })));
    }
}
//# sourceMappingURL=NumberBox.js.map