import styled, { css } from "../../../styled-components";
import * as React from "react";
const IconRoot = styled.div.withConfig({ displayName: "IconRoot", componentId: "sc-n905ex" }) `
    display: block;
    /* Let the parent element handle mouse events (
        because SVG is special and causes problems when used in menu layer with document click outside detection
    ) */
    pointer-events: none;
`;
const ContentRoot = styled("div").withConfig({ displayName: "ContentRoot", componentId: "sc-1da3dmt" }) `
    padding-top: ${props => props.paddingTop}px;
    white-space: nowrap;
    text-overflow: ellipsis;
    overflow: hidden;

    ${props => props.fullWidth ? css `
    width: 100%;
    ` : ``}
`;
const $Box = ({ children, className, Icon, iconPlacement, metrics, fullWidth }) => {
    let icon = Icon ?
        React.createElement(IconRoot, null,
            React.createElement(Icon, { size: metrics.iconSize }))
        : null;
    let iconIsLeft = iconPlacement === "left";
    return React.createElement("div", { className: className },
        iconIsLeft && icon,
        children !== void 0 ?
            React.createElement(ContentRoot, { fullWidth: fullWidth, paddingTop: metrics.textPaddingTop }, children)
            : null,
        !iconIsLeft && icon);
};
const getColors = (colors, theme) => {
    if (typeof colors === "function") {
        return colors(theme);
    }
    return colors;
};
const BORDER_WIDTH = 1;
export const Box = styled($Box).withConfig({ displayName: "Box", componentId: "sc-1l8c8yd" }) `
    display: flex;
    font-size: ${props => props.metrics.fontSize}px;
    line-height: ${props => props.metrics.lineHeight}px;
    height: ${props => props.metrics.height}px;

    ${props => props.fullWidth ? css `
    width: 100%;
    ` : ``}

    padding: 0 ${props => props.metrics.textPaddingX - BORDER_WIDTH}px;

    ${props => {
    if (!props.Icon) {
        return;
    }
    let hasText = props.children !== void 0;
    let iconTextSpacing = Math.floor(props.metrics.textPaddingX / 2);
    let iconMarginY = Math.max(0, (props.metrics.height - props.metrics.iconSize) / 2 - BORDER_WIDTH);
    let iconMarginX = hasText ? iconTextSpacing : iconMarginY;
    let iconIsLeft = props.iconPlacement === "left";
    return css `
            ${iconIsLeft ? css `
                padding-left: ${iconMarginX}px;
                    ${!hasText ? css `
                    padding-right: ${iconMarginX}px;
                    ` : ``}
                ` : css `
                padding-right: ${iconMarginX}px;
                    ${!hasText ? css `
                    padding-left: ${iconMarginX}px;
                    ` : ``}
            `}

            & ${IconRoot} {
                margin-top: ${iconMarginY}px;

                ${hasText ? css `
                    ${iconIsLeft ? css `
                        margin-right: ${iconTextSpacing}px;
                        ` : css `
                        margin-left: ${iconTextSpacing}px;`}
                ` : ``}
            }
        `;
}}

    font-weight: ${props => props.metrics.fontWeight};
    letter-spacing: ${props => props.metrics.letterSpacing};
    box-sizing: border-box;
    vertical-align: middle;

    border: ${BORDER_WIDTH}px ${props => (props.borderStyle || "solid")} ${props => (getColors(props.colors, props.theme).border ||
    getColors(props.colors, props.theme).background ||
    "transparent")};
    border-radius: ${props => props.theme.spacing.borderRadius.thin}px;
    background-color: ${props => (getColors(props.colors, props.theme).background || "transparent")};
    color: ${props => getColors(props.colors, props.theme).text};
`;
//# sourceMappingURL=Box.js.map