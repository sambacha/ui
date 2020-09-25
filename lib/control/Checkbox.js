import * as React from "react";
import { CheckboxOnIcon } from "../icon/CheckboxOnIcon";
import { CheckboxOffIcon } from "../icon/CheckboxOffIcon";
import { ToggleInput } from "./internal/ToggleInput";
export class Checkbox extends React.PureComponent {
    render() {
        return React.createElement(ToggleInput, Object.assign({}, this.props, { type: "checkbox", Icon: checked => checked ? React.createElement(CheckboxOnIcon, null) : React.createElement(CheckboxOffIcon, null) }));
    }
}
//# sourceMappingURL=Checkbox.js.map