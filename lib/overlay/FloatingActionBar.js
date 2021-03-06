import * as React from "react";
import styled, { css } from "../styled-components";
const FloatingActionBarRoot = styled("div").withConfig({ displayName: "FloatingActionBarRoot", componentId: "sc-1qbltzl" }) `
    position: absolute;
    ${props => /^(.*)(top)(.*)$/.test(props.position || "bottom-right") ? css `
        top: 40px;
    ` : css `
        bottom: 40px;
    `}
    ${props => /^(.*)(left)(.*)$/.test(props.position || "bottom-right") ? css `
        left: 40px;
    ` : css `
        right: 40px;
    `}
    display: flex;

    & > * {
        margin-left: 16px;
    }

    & > *:first-child {
        margin-left: 0;
    }
`;
export class FloatingActionBar extends React.Component {
    render() {
        return (React.createElement(FloatingActionBarRoot, Object.assign({}, this.props), this.props.children));
    }
}
//# sourceMappingURL=FloatingActionBar.js.map