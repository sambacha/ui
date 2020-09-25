import * as React from "react";
import { SvgIcon } from "../util/react/SvgIcon";
export class TriangleRightIcon extends React.Component {
    render() {
        return (React.createElement(SvgIcon, Object.assign({}, this.props),
            React.createElement("g", { stroke: "none", strokeWidth: "1", fill: "none", fillRule: "evenodd" },
                React.createElement("g", { transform: "translate(12, 12) rotate(-90) translate(-12, -12)" },
                    React.createElement("polygon", { points: "7 10 12 15 17 10", fill: "currentColor" })))));
    }
}
//# sourceMappingURL=TriangleRightIcon.js.map