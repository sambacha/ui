import * as React from "react";
import { ValueBox } from "../../layout/content/box/ValueBox";
import { UsdValue } from "../UsdValue";
export class UsdValueBox extends React.Component {
    render() {
        let colors = this.props.colors || "secondary";
        return (React.createElement(ValueBox, { variant: this.props.variant, colors: colors },
            React.createElement(UsdValue, { value: this.props.value, locale: this.props.locale })));
    }
}
//# sourceMappingURL=UsdValueBox.js.map