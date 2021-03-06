import { __rest } from "tslib";
import * as React from "react";
const BORDER_SIZE = 2;
const getWrapperStyle = (props) => ({
    width: props.innerSize,
    height: props.innerSize,
    padding: props.padding
});
const getInnerStyle = (props) => ({
    width: props.innerSize,
    height: props.innerSize,
    borderRadius: "100%",
    boxSizing: "border-box",
    backgroundColor: (() => {
        const highlightThreshold = props.highlightThreshold;
        if (highlightThreshold !== void 0 && props.highlightColor && props.size > highlightThreshold) {
            return props.highlightColor;
        }
        if (props.backgroundColor) {
            return props.backgroundColor;
        }
        return "#000000";
    })(),
    border: `${BORDER_SIZE}px solid ${(() => {
        const highlightThreshold = props.highlightThreshold;
        if (highlightThreshold !== void 0 && props.highlightColor && props.size > highlightThreshold) {
            return props.highlightColor;
        }
        if (props.backgroundColor) {
            return props.backgroundColor;
        }
        return "#000000";
    })()}`
});
const getInnerHoverStyle = (props) => ({
    backgroundColor: "transparent",
    border: `${BORDER_SIZE}px solid ${(() => {
        const highlightThreshold = props.highlightThreshold;
        if (highlightThreshold !== void 0 && props.highlightBorderColor && props.size > highlightThreshold) {
            return props.highlightBorderColor;
        }
        if (props.borderColor) {
            return props.borderColor;
        }
        if (highlightThreshold !== void 0 && props.highlightColor && props.size > highlightThreshold) {
            return props.highlightColor;
        }
        if (props.backgroundColor) {
            return props.backgroundColor;
        }
        return "#000000";
    })()}`
});
export class Bubble extends React.Component {
    constructor(props) {
        super(props);
        this.handleMouseEnter = () => {
            this.setState({ hover: true });
        };
        this.handleMouseLeave = () => {
            this.setState({ hover: false });
        };
        this.state = {
            hover: false
        };
    }
    render() {
        let { size } = this.props;
        if (size < 0) {
            size = 0;
        }
        if (size > 100) {
            size = 100;
        }
        let maxBubbleSize = this.props.wrapperSize - 2;
        let innerSize = Math.round((maxBubbleSize - BORDER_SIZE * 2) * this.props.size / 100 + BORDER_SIZE * 2);
        if (innerSize % 2 !== 0) {
            innerSize += 1;
        }
        let _a = this.props, { children: _unused, wrapperSize } = _a, otherProps = __rest(_a, ["children", "wrapperSize"]);
        const padding = (wrapperSize - innerSize) / 2;
        return (React.createElement("div", { style: getWrapperStyle({ innerSize, padding }), onMouseEnter: this.handleMouseEnter, onMouseLeave: this.handleMouseLeave },
            React.createElement("div", { style: Object.assign(Object.assign({}, getInnerStyle(Object.assign({ innerSize }, otherProps))), (this.state.hover ? getInnerHoverStyle(Object.assign({ innerSize }, otherProps)) : {})) })));
    }
}
//# sourceMappingURL=Bubble.js.map