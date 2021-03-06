import * as React from "react";
export class Gauge extends React.Component {
    get min() {
        return this.props.min;
    }
    get max() {
        return this.props.max;
    }
    getPathValues(value) {
        if (value < this.min) {
            value = this.min;
        }
        if (value > this.max) {
            value = this.max;
        }
        let dx = 0;
        let dy = 0;
        let alpha = (1 - (value - this.min) / (this.max - this.min)) * Math.PI;
        let Ro = this.props.width / 2;
        let Ri = Ro - this.props.width / 5;
        let Cx = this.props.width / 2 + dx;
        let Cy = this.props.height + dy;
        let Xo = this.props.width / 2 + dx + Ro * Math.cos(alpha);
        let Yo = this.props.height - (this.props.height - Cy) - Ro * Math.sin(alpha);
        let Xi = this.props.width / 2 + dx + Ri * Math.cos(alpha);
        let Yi = this.props.height - (this.props.height - Cy) - Ri * Math.sin(alpha);
        return { alpha, Ro, Ri, Cx, Cy, Xo, Yo, Xi, Yi };
    }
    getPath(value) {
        let { Ro, Ri, Cx, Cy, Xo, Yo, Xi, Yi } = this.getPathValues(value);
        let path = "M" + (Cx - Ri) + "," + Cy + " ";
        path += "L" + (Cx - Ro) + "," + Cy + " ";
        path += "A" + Ro + "," + Ro + " 0 0 1 " + Xo + "," + Yo + " ";
        path += "L" + Xi + "," + Yi + " ";
        path += "A" + Ri + "," + Ri + " 0 0 0 " + (Cx - Ri) + "," + Cy + " ";
        path += "Z ";
        return path;
    }
    getLinePath(value) {
        let { Xo, Yo, Xi, Yi } = this.getPathValues(value);
        let path = "M" + Xo + "," + Yo + " ";
        path += "L" + Xi + "," + Yi + " ";
        path += "Z ";
        return path;
    }
    render() {
        return (React.createElement("svg", { height: "100%", version: "1.1", width: "100%", xmlns: "http://www.w3.org/2000/svg", style: {
                width: this.props.width, height: this.props.height
            } },
            React.createElement("path", { fill: this.props.backgroundColor, stroke: "none", d: this.getPath(this.max) }),
            React.createElement("path", { fill: this.props.color, stroke: "none", d: this.getPath(this.props.value) }),
            React.createElement("path", { stroke: this.props.lineColor, d: this.getLinePath(this.props.value) })));
    }
}
Gauge.defaultProps = {
    min: 0,
    max: 100,
    color: "#FF9F1C",
    backgroundColor: "#D9E4EF",
    lineColor: "#334564"
};
//# sourceMappingURL=Gauge.js.map