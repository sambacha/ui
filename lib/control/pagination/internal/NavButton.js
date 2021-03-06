import * as React from "react";
import styled, { css } from "../../../styled-components";
const BUTTON_SIZE = 36;
const ICON_SIZE = 24;
const BORDER_WIDTH = 1;
const NavButtonRoot = styled("div").withConfig({ displayName: "NavButtonRoot", componentId: "sc-1j9rgjn" }) `
    cursor: ${props => !props.disabled ? "pointer" : "default"};
    padding: ${(BUTTON_SIZE - ICON_SIZE - 2 * BORDER_WIDTH) / 2}px;
    border-radius: ${props => props.theme.spacing.borderRadius.thin}px;
    border: ${BORDER_WIDTH}px solid ${props => props.theme.colors.paginationBtnBorder};
    color: ${props => props.disabled ?
    props.theme.colors.paginationBtnDisabledText :
    props.theme.colors.paginationBtnText};
    background-color: ${props => props.theme.colors.paginationBtnBg};
    outline: 0;

    ${props => !props.disabled ? css `
    &:hover {
        color: ${props.theme.colors.paginationBtnHoverText};
    }
    ` : ``};
`;
export class NavButton extends React.Component {
    render() {
        let { onClick, Icon, disabled } = this.props;
        return (React.createElement(NavButtonRoot, { onClick: !disabled ? onClick : void 0, Icon: Icon, disabled: disabled },
            React.createElement(Icon, null)));
    }
}
//# sourceMappingURL=NavButton.js.map