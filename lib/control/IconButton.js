import * as React from "react";
import styled, { withTheme } from "../styled-components";
const IconButtonRoot = styled("button").withConfig({ displayName: "IconButtonRoot", componentId: "sc-bo95qb" }) `
    display: block;
    background-color: transparent;
    border: none; /* Remove borders */
    color: ${({ buttonColor, theme }) => buttonColor};
    cursor: pointer;
    outline: none;
    padding: 0px;
`;
class $IconButton extends React.Component {
    render() {
        let Icon = this.props.Icon;
        let theme = this.props.theme;
        let iconSize = this.props.iconSize;
        let color = typeof this.props.color === "function" ? this.props.color(theme) : this.props.color;
        return (React.createElement(IconButtonRoot, { onClick: this.props.onClick, className: this.props.className, buttonColor: color },
            React.createElement(Icon, { color: color, size: iconSize })));
    }
}
export const IconButton = withTheme($IconButton);
//# sourceMappingURL=IconButton.js.map