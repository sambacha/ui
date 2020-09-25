import * as React from "react";
import { Box } from "./Box";
import styled, { css } from "../../../styled-components";
const StyledBox = styled(Box).withConfig({ displayName: "StyledBox", componentId: "sc-1jbgwem" }) `
    font-family: "Roboto Mono", monospace;
`;
const ValueSpan = styled.span.withConfig({ displayName: "ValueSpan", componentId: "sc-25s404" }) `
    margin: 0 8px;
`;
const TypeSpan = styled.span.withConfig({ displayName: "TypeSpan", componentId: "sc-11odvdp" }) `
    color: ${({ theme }) => theme.colors.typedValueBoxTypeText};
    margin: 0 8px;
`;
const SizingWrapper = styled("div").withConfig({ displayName: "SizingWrapper", componentId: "sc-ymi29v" }) `
    ${props => props.withinForm ? css `
        min-width: 484px;
    ` : ``}
`;
export class TypedValueBox extends React.Component {
    render() {
        const { value, type, withinForm } = this.props;
        let wrapperDivStyle = {};
        if (withinForm) {
            wrapperDivStyle.minWidth = 500;
        }
        return (React.createElement(StyledBox, { colors: (theme) => ({
                background: theme.colors.typedValueBoxBg,
                text: theme.colors.typedValueBoxText,
                border: withinForm ? theme.colors.typedValueBoxBorder : void 0
            }), metrics: {
                height: 32,
                textPaddingTop: 6,
                textPaddingX: 8,
                fontSize: 14,
                iconSize: 24,
                lineHeight: 20,
                fontWeight: 400,
                letterSpacing: "normal"
            } },
            React.createElement(SizingWrapper, { withinForm: withinForm },
                value ? React.createElement(ValueSpan, null, value) : null,
                type ? React.createElement(TypeSpan, null, type) : null)));
    }
}
TypedValueBox.defaultProps = {
    withinForm: false
};
//# sourceMappingURL=TypedValueBox.js.map