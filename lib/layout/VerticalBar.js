import { __rest } from "tslib";
import * as React from "react";
import styled, { css } from "../styled-components";
import { Bar } from "./Bar";
const Placeholder = styled("div").withConfig({ displayName: "Placeholder", componentId: "sc-11n5l1z" }) `
    width: ${props => props.width}px;
    @media ${props => props.theme.media.sAndBelow} {
        display: none;
    }
`;
const VerticalBarRoot = styled(Bar).withConfig({ displayName: "VerticalBarRoot", componentId: "sc-1woln5b" }) `
    width: ${props => props.width}px;
    ${props => props.sticky ? css `
    position: fixed;
    height: 100%;
    ` : css `
    min-height: 100vh;
    `}
    flex-direction: column;

    @media ${props => props.theme.media.sAndBelow} {
        ${props => props.sticky ? "" : css `
        position: absolute;
        top: 64px;
        bottom: 0;
        `}

        top: 0;
        transition: transform .2s;
        ${props => props.mobileVisible ? "" : css `
        /**
         * Instead of hiding with "display: none" move it outside of viewport
         * so it could easily be opened from a hamburger menu or similar
         */
        left: 0;
        transform: translateX(-100%);
        `}
    }
`;
export class VerticalBar extends React.Component {
    render() {
        let _a = this.props, { contentRef } = _a, props = __rest(_a, ["contentRef"]);
        return (React.createElement(React.Fragment, null,
            this.props.sticky ? React.createElement(Placeholder, { width: this.props.width }) : null,
            React.createElement(VerticalBarRoot, Object.assign({ innerRef: contentRef }, props))));
    }
}
//# sourceMappingURL=VerticalBar.js.map