import { __rest } from "tslib";
import styled from "../styled-components";
import React from "react";
import { InputBase, HEIGHT } from "./InputBase";
const ICON_SPACING = (HEIGHT - 24) / 2;
const InputContainer = styled.div.withConfig({ displayName: "InputContainer", componentId: "sc-2p4z2c" }) `
    position: relative;
    width: 100%;
`;
const RightIconContainer = styled.div.withConfig({ displayName: "RightIconContainer", componentId: "sc-u6qnl4" }) `
    pointer-events: none;
    position: absolute;
    top: ${ICON_SPACING}px;
    right: ${ICON_SPACING}px;
    color: ${props => props.theme.colors.input.placeholder};
`;
const LeftIconContainer = styled.div.withConfig({ displayName: "LeftIconContainer", componentId: "sc-noeg76" }) `
    pointer-events: none;
    position: absolute;
    top: ${ICON_SPACING}px;
    left: 16px;
    color: ${props => props.theme.colors.input.placeholder};
`;
const StyledInputBase = styled(InputBase).withConfig({ displayName: "StyledInputBase", componentId: "sc-19ard7i" }) `
    padding-left: ${props => 16 + (props.hasLeftIcon ? 24 + 8 : 0) + "px"};
    padding-right: ${props => props.hasRightIcon ? "36px" : "16px"};
`;
export class Input extends React.Component {
    render() {
        let _a = this.props, { LeftIcon, RightIcon } = _a, inputProps = __rest(_a, ["LeftIcon", "RightIcon"]);
        return React.createElement(InputContainer, null,
            LeftIcon && React.createElement(LeftIconContainer, null,
                React.createElement(LeftIcon, null)),
            React.createElement(StyledInputBase, Object.assign({}, inputProps, { hasLeftIcon: !!LeftIcon, hasRightIcon: !!RightIcon })),
            RightIcon && React.createElement(RightIconContainer, null,
                React.createElement(RightIcon, null)));
    }
}
//# sourceMappingURL=Input.js.map