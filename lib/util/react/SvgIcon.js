import * as React from "react";
export class SvgIcon extends React.Component {
    render() {
        let size = this.props.size;
        let viewBoxSize = this.props.viewBoxSize;
        return (React.createElement("svg", { width: size + "px", height: size + "px", style: { display: "block" }, viewBox: `0 0 ${viewBoxSize} ${viewBoxSize}`, version: "1.1", xmlns: "http://www.w3.org/2000/svg" }, this.props.children));
    }
}
SvgIcon.defaultProps = {
    size: 24,
    viewBoxSize: 24
};
//# sourceMappingURL=SvgIcon.js.map