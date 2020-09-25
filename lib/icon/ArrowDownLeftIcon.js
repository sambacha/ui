import * as React from "react";
import { SvgIcon } from "../util/react/SvgIcon";
export class ArrowDownLeftIcon extends React.Component {
    render() {
        return React.createElement(SvgIcon, Object.assign({}, this.props, { viewBoxSize: 512 }),
            React.createElement("g", { transform: "rotate(45, 256, 256)" },
                React.createElement("g", { transform: "translate(90, 90) scale(0.65)" },
                    React.createElement("path", { d: "m224 0l0 352l-96 0l128 160l128-160l-96 0l0-352z", fill: "currentColor" }))));
    }
}
//# sourceMappingURL=ArrowDownLeftIcon.js.map