import { __rest } from "tslib";
import * as React from "react";
import { Tooltip } from "./overlay/tooltip/Tooltip";
import { ErrorIcon } from "./icon/ErrorIcon";
export class ErrorHint extends React.Component {
    render() {
        let _a = this.props, { children } = _a, props = __rest(_a, ["children"]);
        return (React.createElement(Tooltip, { content: children },
            React.createElement(ErrorIcon, Object.assign({}, props))));
    }
}
//# sourceMappingURL=ErrorHint.js.map