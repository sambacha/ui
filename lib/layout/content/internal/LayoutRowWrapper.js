import styled, { css } from "../../../styled-components";
import * as React from "react";
class $LayoutRowWrapper extends React.Component {
    constructor() {
        super(...arguments);
        this.divWidth = 0;
        this.onResize = () => {
            if (this.props.onResize) {
                this.props.onResize(this.divWidth);
            }
        };
        this.handleResize = () => {
            if (this.divElement) {
                this.divWidth = this.divElement.clientWidth;
                this.onResize();
            }
        };
    }
    render() {
        return (React.createElement("div", { className: this.props.className, ref: r => { this.divElement = r; } }, this.props.children));
    }
    componentDidMount() {
        window.addEventListener("resize", this.handleResize);
        this.handleResize();
    }
    componentWillUnmount() {
        window.removeEventListener("resize", this.handleResize);
    }
}
export const LayoutRowWrapper = styled($LayoutRowWrapper).withConfig({ displayName: "LayoutRowWrapper", componentId: "sc-14z0wt" }) `
    display: ${({ smallScreen }) => smallScreen ? "block" : "flex"};
    ${({ centerContent }) => centerContent ? css `
        justify-content: center;
    ` : ""};
`;
//# sourceMappingURL=LayoutRowWrapper.js.map