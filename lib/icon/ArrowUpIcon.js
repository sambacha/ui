import * as React from "react";
import { SvgIcon } from "../util/react/SvgIcon";
export class ArrowUpIcon extends React.Component {
    render() {
        return (React.createElement(SvgIcon, Object.assign({}, this.props),
            React.createElement("g", { stroke: "none", strokeWidth: "1", fill: "none", fillRule: "evenodd" },
                React.createElement("g", { transform: "translate(12, 12) rotate(-180) translate(-12, -12)" },
                    React.createElement("polygon", { points: "0 0 24 0 24 24 0 24" }),
                    React.createElement("polygon", { fill: "currentColor", fillRule: "nonzero", points: "16.59 8.59 12 13.17 7.41 8.59 6 10 12 16 18 10" })))));
    }
}
//# sourceMappingURL=ArrowUpIcon.js.map