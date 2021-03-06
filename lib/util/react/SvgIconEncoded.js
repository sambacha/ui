import * as React from "react";
let wrapSvgContent = (svgContent, size, viewBoxSize) => `
<?xml version="1.0" encoding="UTF-8"?>
<svg width="${size}px" height="${size}px" viewBox="0 0 ${viewBoxSize} ${viewBoxSize}" version="1.1" xmlns="http://www.w3.org/2000/svg">
    ${svgContent}
</svg>
`;
export class SvgIconEncoded extends React.Component {
    render() {
        return (React.createElement("img", { src: "data:image/svg+xml," +
                encodeURIComponent(wrapSvgContent(this.props.children, this.props.size, this.props.viewBoxSize)
                    .replace(/\r?\n/g, ""))
                    .replace(/'/g, "%27")
                    .replace(/"/g, "%22") }));
    }
}
SvgIconEncoded.defaultProps = {
    size: 24,
    viewBoxSize: 24
};
//# sourceMappingURL=SvgIconEncoded.js.map