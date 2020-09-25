import * as React from "react";
import { SvgIcon } from "../util/react/SvgIcon";
export class EmptyIcon extends React.Component {
    render() {
        return (React.createElement(SvgIcon, Object.assign({}, this.props),
            React.createElement("g", { stroke: "none", strokeWidth: "1", fill: "none", fillRule: "evenodd" },
                React.createElement("rect", { x: "0", y: "0", width: "24", height: "24" }))));
    }
}
//# sourceMappingURL=EmptyIcon.js.map