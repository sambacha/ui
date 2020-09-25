import * as React from "react";
import { SvgIcon } from "../util/react/SvgIcon";
export class PlusIcon extends React.Component {
    render() {
        return (React.createElement(SvgIcon, Object.assign({}, this.props),
            React.createElement("g", { stroke: "none", strokeWidth: "1", fill: "none", fillRule: "evenodd" },
                React.createElement("g", null,
                    React.createElement("polygon", { points: "0 0 24 0 24 24 0 24" }),
                    React.createElement("polygon", { fill: "currentColor", fillRule: "nonzero", points: "17 13 13 13 13 17 11 17 11 13 7 13 7 11 11 11 11 7 13 7 13 11 17 11" })))));
    }
}
//# sourceMappingURL=PlusIcon.js.map