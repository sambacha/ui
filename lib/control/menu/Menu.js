import * as React from "react";
import styled from "../../styled-components";
const $Menu = styled.div.withConfig({ displayName: "$Menu", componentId: "sc-18sd8zp" }) `
    box-shadow: 0 8px 16px 0 rgba(167, 181, 209, 0.6);
    border-radius: ${props => props.theme.spacing.borderRadius.normal}px;
    padding: 8px 0;
    max-height: ${props => props.maxHeight}px;
    max-width: ${props => props.maxWidth}px;
    overflow-y: auto;
    background: ${props => props.theme.colors.menu.background};
    cursor: default;
`;
export class Menu extends React.Component {
    render() {
        return (React.createElement($Menu, Object.assign({}, this.props), this.props.children));
    }
}
Menu.defaultProps = {
    maxHeight: 300
};
//# sourceMappingURL=Menu.js.map