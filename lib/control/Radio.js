import { __decorate } from "tslib";
import * as React from "react";
import { observer } from "mobx-react";
import { RadioOnIcon } from "../icon/RadioOnIcon";
import { RadioOffIcon } from "../icon/RadioOffIcon";
import { ToggleInput } from "./internal/ToggleInput";
let Radio = class Radio extends React.Component {
    render() {
        return React.createElement(ToggleInput, Object.assign({}, this.props, { type: "radio", Icon: checked => checked ? React.createElement(RadioOnIcon, null) : React.createElement(RadioOffIcon, null) }));
    }
};
Radio = __decorate([
    observer
], Radio);
export { Radio };
//# sourceMappingURL=Radio.js.map