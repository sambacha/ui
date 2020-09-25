import * as React from "react";
import styled, { css } from "../styled-components";
import { Box } from "../layout/content/box/Box";
import { HoverState } from "../util/react/HoverState";
import Color from "color";
const ButtonRoot = styled("button").withConfig({ displayName: "ButtonRoot", componentId: "sc-skpv38" }) `
    ${props => !props.disabled ? css `
    cursor: pointer;
    ` : ``}
    user-select: none;
    text-transform: uppercase;

    ${props => props.elevation !== "none" ? css `
    box-shadow: ${props.elevation === "high" ? "0 8px 16px" : "0 4px 8px"}
        ${Color(props.shadowColor(props.theme) || "transparent").alpha(0.6).toString()}
    ` : ``};

    border-radius: ${props => props.rounded ? "100px" : `${props.theme.spacing.borderRadius.thin}px`};

    /* Override user-agent styles */
    background: none;
    border: none; /* Remove borders */
    outline: none;
    padding: 0px;
`;
const StyledBox = styled(Box).withConfig({ displayName: "StyledBox", componentId: "sc-1g0o4hh" }) `
    border-radius: inherit;
    transition: background-color .2s ease-in-out, border-color .2s ease-in-out;
`;
const getColorSet = (colorVariant, state) => (theme) => theme.colors.button[colorVariant][state];
const getColors = (colors, theme) => {
    if (typeof colors === "function") {
        return colors(theme);
    }
    return colors;
};
const getState = (disabled, hover) => {
    if (disabled) {
        return "disabled";
    }
    else if (hover) {
        return "hover";
    }
    else {
        return "normal";
    }
};
export class Button extends React.Component {
    render() {
        let { Icon, iconPlacement, elevation, disabled, rounded, colors, autoFocus, name, type, value, children } = this.props;
        return (React.createElement(HoverState, null, (hover) => {
            let state = getState(disabled, hover);
            let colorSet = getColorSet(colors, state);
            let shadowColor = (theme) => colors === "primary" ? getColors(colorSet, theme).background : void 0;
            return React.createElement(ButtonRoot, { onClick: !this.props.disabled ? this.props.onClick : void 0, elevation: elevation, shadowColor: shadowColor, disabled: disabled, rounded: rounded, autoFocus: autoFocus, name: name, type: type, value: value },
                React.createElement(StyledBox, { Icon: Icon, iconPlacement: iconPlacement ? iconPlacement : "left", colors: colorSet, metrics: {
                        fontSize: 12,
                        lineHeight: 14,
                        fontWeight: 600,
                        height: 32,
                        iconSize: 24,
                        letterSpacing: .4,
                        textPaddingTop: 7,
                        textPaddingX: 16
                    } }, children));
        }));
    }
}
Button.defaultProps = {
    colors: "secondary",
    elevation: "none"
};
//# sourceMappingURL=Button.js.map