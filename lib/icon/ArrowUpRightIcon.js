import * as React from "react";
import { SvgIcon } from "../util/react/SvgIcon";
export class ArrowUpRightIcon extends React.Component {
    render() {
        return React.createElement(SvgIcon, Object.assign({}, this.props, { viewBoxSize: 512 }),
            React.createElement("g", { transform: "rotate(45, 256, 256)" },
                React.createElement("g", { transform: "translate(90, 90) scale(0.65)" },
                    React.createElement("path", { d: "m256 0l-128 160l96 0l0 352l64 0l0-352l96 0z", fill: "currentColor" }))));
    }
}
//# sourceMappingURL=ArrowUpRightIcon.js.map