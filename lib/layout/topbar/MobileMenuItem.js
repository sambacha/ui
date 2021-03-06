import * as React from "react";
import styled from "../../styled-components";
import { ValueBox } from "../content/box/ValueBox";
import * as PropTypes from "prop-types";
const MenuIconRoot = styled.div.withConfig({ displayName: "MenuIconRoot", componentId: "sc-e9e4zd" }) `
    display: flex;
    align-items: center;
    justify-content: center;
    width: 48px;
    height: 48px;

    background-color: ${props => props.theme.colors.overlayBg};
    border-radius: 50%;
    box-shadow: 0 24px 56px 0 rgba(39, 54, 86, 0.16);
    margin: 12px;
`;
const MenuItemRoot = styled.div.withConfig({ displayName: "MenuItemRoot", componentId: "sc-1j9kvy0" }) `
    display: flex;
    align-items: center;
`;
export class MobileMenuItem extends React.Component {
    render() {
        let { children } = this.props;
        let { requestClose } = this.context;
        return React.createElement(MenuItemRoot, null,
            React.createElement(MenuIconRoot, { onClick: !this.props.sticky ? requestClose : void 0 }, typeof children === "function" ? children(requestClose) : children),
            React.createElement(ValueBox, null, this.props.title));
    }
}
MobileMenuItem.contextTypes = {
    requestClose: PropTypes.any
};
//# sourceMappingURL=MobileMenuItem.js.map