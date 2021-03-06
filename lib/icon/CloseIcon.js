import * as React from "react";
import { SvgIcon } from "../util/react/SvgIcon";
export class CloseIcon extends React.Component {
    render() {
        return (React.createElement(SvgIcon, Object.assign({}, this.props),
            React.createElement("g", { stroke: "none", strokeWidth: "1", fill: "none", fillRule: "evenodd" },
                React.createElement("polygon", { points: "0 0 24 0 24 24 0 24" }),
                React.createElement("polygon", { fill: "currentColor", fillRule: "nonzero", points: "19 6.41 17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12" }))));
    }
}
//# sourceMappingURL=CloseIcon.js.map