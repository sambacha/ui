import * as React from "react";
import styled, { css, withTheme } from "../../styled-components";
const ARROW_OFFSET_TOP = 7;
const AccordionContentFrameRoot = styled("div").withConfig({ displayName: "AccordionContentFrameRoot", componentId: "sc-1ueoiu0" }) `
    ${props => !props.noBorder ? css `
    border-top: ${props.borderColor} 1px solid;
    ` : ``}
    background: ${props => props.backgroundColor};
    ${props => props.arrowPosition !== void 0 ? css `
    position: relative;
    margin-top: ${(ARROW_OFFSET_TOP + (props.noBorder ? 0 : 1))}px;
    &:before, &:after {
        content: "";
        position: absolute;
        width: 0;
        height: 0;
        border-style: solid;
        transform: translateX(-50%);
    }
    &:before {
        top: -${(ARROW_OFFSET_TOP + (props.noBorder ? 0 : 1))}px;
        left: ${props.arrowPosition}px;
        border-color: transparent transparent ${props.borderColor} transparent;
        border-width: 8px;
        border-top-width: 0;
    }
    &:after {
        top: -${(ARROW_OFFSET_TOP - (props.noBorder ? 1 : 0))}px;
        left: ${props.arrowPosition}px;
        border-color: transparent transparent ${props.backgroundColor} transparent;
        border-width: 7px;
        border-top-width: 0;
    }
    ` : ``}
`;
class $AccordionContentFrame extends React.PureComponent {
    render() {
        let { arrowPosition, backgroundColor, borderColor, theme, noBorder } = this.props;
        return (React.createElement(AccordionContentFrameRoot, { arrowPosition: arrowPosition, backgroundColor: backgroundColor || theme.colors.accordion.content.background, borderColor: borderColor || theme.colors.accordion.content.border, noBorder: noBorder }, this.props.children));
    }
}
export const AccordionContentFrame = withTheme($AccordionContentFrame);
//# sourceMappingURL=AccordionContentFrame.js.map