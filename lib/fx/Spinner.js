import * as React from "react";
import styled from "../styled-components";
import { UIDConsumer } from "../uid/UIDConsumer";
const SpinnerRoot = styled.div.withConfig({ displayName: "SpinnerRoot", componentId: "sc-hiefd5" }) `

    @keyframes spinner {
        0% {
            -webkit-transform: rotate(0deg);
            transform: rotate(0deg);
        }
        100% {
            -webkit-transform: rotate(360deg);
            transform: rotate(360deg);
        }
    }
    & svg {
        display: block;
        animation: spinner 1.4s infinite linear;
        transform-origin: center;
    }
`;
export class Spinner extends React.Component {
    render() {
        let size = this.props.size;
        let color = this.props.color;
        let borderColor = this.props.borderColor;
        let backgroundColor = this.props.backgroundColor;
        return React.createElement(UIDConsumer, null, (id) => React.createElement(SpinnerRoot, { className: this.props.className },
            React.createElement("svg", { width: `${size}px`, height: `${size}px`, viewBox: "0 0 24 24", version: "1.1", xmlns: "http://www.w3.org/2000/svg" },
                React.createElement("defs", null,
                    React.createElement("linearGradient", { x1: "1", y1: "0.5", x2: "0.5", y2: "1.2", id: `spinner_${id}_br` },
                        React.createElement("stop", { stopColor: color, stopOpacity: "0.4", offset: "0%" }),
                        React.createElement("stop", { stopColor: color, stopOpacity: "1", offset: "100%" })),
                    React.createElement("linearGradient", { x1: "0.5", y1: "0", x2: "1.1", y2: "1", id: `spinner_${id}_tr` },
                        React.createElement("stop", { stopColor: color, stopOpacity: "0.1", offset: "0%" }),
                        React.createElement("stop", { stopColor: color, stopOpacity: "0.4", offset: "100%" })),
                    React.createElement("linearGradient", { x1: "0", y1: "0.5", x2: "0.5", y2: "0", id: `spinner_${id}_tl` },
                        React.createElement("stop", { stopColor: color, stopOpacity: "0", offset: "0%" }),
                        React.createElement("stop", { stopColor: color, stopOpacity: "0.1", offset: "100%" }))),
                React.createElement("g", { stroke: "none", strokeWidth: "1", fill: "none", fillRule: "evenodd" },
                    React.createElement("polygon", { points: "0 0 24 0 24 24 0 24" }),
                    React.createElement("circle", { stroke: borderColor, fill: backgroundColor, cx: "12", cy: "12", r: "11.5" }),
                    React.createElement("path", { d: "M12,18 12,18", stroke: color, strokeWidth: "2", strokeLinecap: "round", strokeLinejoin: "round" }),
                    React.createElement("path", { d: "M12,18 C15.3137085,18 18,15.3137085 18,12", stroke: `url(#spinner_${id}_br)`, strokeWidth: "2" }),
                    React.createElement("path", { d: "M18,12 C18,8.6862915 15.3137085,6 12,6", stroke: `url(#spinner_${id}_tr)`, strokeWidth: "2" }),
                    React.createElement("path", { d: "M12,6 C8.6862915,6 6,8.6862915 6,12", stroke: `url(#spinner_${id}_tl)`, strokeWidth: "2" })))));
    }
}
Spinner.defaultProps = {
    size: 24,
    color: "currentColor",
    borderColor: "#000",
    backgroundColor: "transparent"
};
//# sourceMappingURL=Spinner.js.map