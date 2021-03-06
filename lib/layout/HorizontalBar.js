import { __rest } from "tslib";
import * as React from "react";
import styled, { css } from "../styled-components";
import { Bar } from "./Bar";
const Placeholder = styled("div").withConfig({ displayName: "Placeholder", componentId: "sc-87z6a1" }) `
    height: ${props => props.height}px;
    width: 100%;
`;
const HorizontalBarRoot = styled(Bar).withConfig({ displayName: "HorizontalBarRoot", componentId: "sc-te8eux" }) `
    height: ${props => props.height}px;

    width: 100%;
    ${props => props.sticky ? css `
    position: fixed;
    top: 0;
    ` : ""}
`;
export class HorizontalBar extends React.Component {
    render() {
        let _a = this.props, { contentRef } = _a, props = __rest(_a, ["contentRef"]);
        return (React.createElement(React.Fragment, null,
            this.props.sticky ? React.createElement(Placeholder, { height: this.props.height }) : null,
            React.createElement(HorizontalBarRoot, Object.assign({ innerRef: contentRef }, props))));
    }
}
//# sourceMappingURL=HorizontalBar.js.map