import * as React from "react";
import styled from "../../styled-components";
import { Box } from "../../layout/content/box/Box";
import { HoverState } from "../../util/react/HoverState";
const StyledBox = styled(Box).withConfig({ displayName: "StyledBox", componentId: "sc-1l19b9z" }) `
    transition: background-color .2s ease-in-out, border-color .2s ease-in-out;
`;
const getColorSet = (state) => (theme) => theme.colors.menu.item[state];
const getState = (disabled, hover, selected) => {
    if (disabled) {
        return "disabled";
    }
    else if (selected) {
        return "selected";
    }
    else if (hover) {
        return "hover";
    }
    else {
        return "normal";
    }
};
export class MenuItem extends React.Component {
    constructor() {
        super(...arguments);
        this.handleClick = () => {
            if (!this.props.disabled && this.props.onClick) {
                this.props.onClick();
            }
        };
    }
    render() {
        let { disabled, Icon, children, selected } = this.props;
        return React.createElement("div", { onClick: this.handleClick },
            React.createElement(HoverState, null, (hover) => {
                let state = getState(disabled, hover, selected);
                let colorSet = getColorSet(state);
                return React.createElement(StyledBox, { Icon: Icon, iconPlacement: "left", colors: colorSet, fullWidth: true, metrics: {
                        fontSize: 12,
                        lineHeight: 14,
                        fontWeight: 400,
                        height: 32,
                        iconSize: 24,
                        letterSpacing: .4,
                        textPaddingTop: 7,
                        textPaddingX: 16
                    } }, children);
            }));
    }
}
//# sourceMappingURL=MenuItem.js.map