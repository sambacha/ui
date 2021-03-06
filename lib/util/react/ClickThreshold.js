import * as React from "react";
const DEFAULT_THRESHOLD = 5;
export class ClickThreshold extends React.Component {
    constructor() {
        super(...arguments);
        this.onMouseDown = (e) => {
            this.mouseDownCoords = {
                x: e.clientX,
                y: e.clientY
            };
        };
        this.onMouseUp = (e) => {
            if (Math.abs(e.clientX - this.mouseDownCoords.x) <= this.threshold &&
                Math.abs(e.clientY - this.mouseDownCoords.y) <= this.threshold) {
                this.props.onClick();
            }
        };
    }
    get threshold() {
        return this.props.threshold;
    }
    render() {
        return (React.createElement("div", { onMouseDown: this.onMouseDown, onMouseUp: this.onMouseUp }, this.props.children));
    }
}
ClickThreshold.defaultProps = {
    threshold: DEFAULT_THRESHOLD
};
//# sourceMappingURL=ClickThreshold.js.map