import * as React from "react";
import { SvgIcon } from "../util/react/SvgIcon";
export class InfoIcon extends React.PureComponent {
    render() {
        return (React.createElement(SvgIcon, Object.assign({}, this.props),
            React.createElement("g", { stroke: "none", strokeWidth: "1", fill: "none", fillRule: "evenodd" },
                React.createElement("polygon", { points: "0 0 24 0 24 24 0 24" }),
                React.createElement("path", { d: "M12,2 C6.48,2 2,6.48 2,12 C2,17.52 6.48,22 12,22 C17.52,22 22,17.52 22,12 C22,6.48 17.52,2 12,2 Z M13,17 L11,17 L11,15 L13,15 L13,17 Z M13,13 L11,13 L11,7 L13,7 L13,13 Z", fill: "currentColor", fillRule: "nonzero" }))));
    }
}
//# sourceMappingURL=InfoIcon.js.map