import * as React from "react";
import { SvgIcon } from "../util/react/SvgIcon";
export class AddIcon extends React.Component {
    render() {
        return (React.createElement(SvgIcon, Object.assign({}, this.props),
            React.createElement("g", { stroke: "none", strokeWidth: "1", fill: "none", fillRule: "evenodd" },
                React.createElement("polygon", { points: "0 0 24 0 24 24 0 24" }),
                React.createElement("path", { d: "M19,3 L5,3 C3.89,3 3,3.9 3,5 L3,19 C3,20.1 3.89,21 5,21 L19,21 " +
                        "C20.1,21 21,20.1 21,19 L21,5 C21,3.9 20.1,3 19,3 Z " +
                        "M17,13 L13,13 L13,17 L11,17 L11,13 L7,13 L7,11 " +
                        "L11,11 L11,7 L13,7 L13,11 L17,11 L17,13 Z", fill: "currentColor", fillRule: "nonzero" }))));
    }
}
//# sourceMappingURL=AddIcon.js.map