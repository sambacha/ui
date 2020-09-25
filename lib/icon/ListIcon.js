import * as React from "react";
import { SvgIcon } from "../util/react/SvgIcon";
import { UIDConsumer } from "../uid/UIDConsumer";
export class ListIcon extends React.Component {
    render() {
        let path = "M2,6.5 C1.17,6.5 0.5,7.17 0.5,8 C0.5,8.83 1.17,9.5 2,9.5 C2.83,9.5 3.5,8.83 3.5,8 C3.5,7.17 2.83,6.5 2,6.5 L2,6.5 Z M2,0.5 C1.17,0.5 0.5,1.17 0.5,2 C0.5,2.83 1.17,3.5 2,3.5 C2.83,3.5 3.5,2.83 3.5,2 C3.5,1.17 2.83,0.5 2,0.5 L2,0.5 Z M2,12.67 C1.26,12.67 0.67,13.27 0.67,14 C0.67,14.73 1.27,15.33 2,15.33 C2.73,15.33 3.33,14.73 3.33,14 C3.33,13.27 2.74,12.67 2,12.67 L2,12.67 Z M5,15 L19,15 L19,13 L5,13 L5,15 L5,15 Z M5,9 L19,9 L19,7 L5,7 L5,9 L5,9 Z M5,1 L5,3 L19,3 L19,1 L5,1 L5,1 Z";
        return React.createElement(UIDConsumer, null, id => React.createElement(SvgIcon, Object.assign({}, this.props),
            React.createElement("g", { stroke: "none", strokeWidth: "1", fill: "none", fillRule: "evenodd" },
                React.createElement("g", { transform: "translate(-24.000000, -24.000000)" },
                    React.createElement("rect", { fillRule: "nonzero", x: "0", y: "0", width: "72", height: "72" }),
                    React.createElement("rect", { fillRule: "nonzero", x: "18", y: "19", width: "36", height: "34" }),
                    React.createElement("g", { transform: "translate(24.000000, 24.000000)" },
                        React.createElement("g", { transform: "translate(2.000000, 4.000000)" },
                            React.createElement("mask", { id: `icon_list_${id}_mask`, fill: "white" },
                                React.createElement("path", { d: path })),
                            React.createElement("path", { fill: "currentColor", d: path }),
                            React.createElement("g", { mask: `url(#icon_list_${id}_mask)`, fill: "currentColor" },
                                React.createElement("g", { transform: "translate(-2.000000, -4.000000)" },
                                    React.createElement("rect", { x: "0", y: "0", width: "24", height: "24" })))),
                        React.createElement("polygon", { points: "0 0 24 0 24 24 0 24" }))))));
    }
}
//# sourceMappingURL=ListIcon.js.map