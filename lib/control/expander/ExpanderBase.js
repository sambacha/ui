import * as React from "react";
import styled, { css, withTheme } from "../../styled-components";
import { Number } from "../../data/Number";
import { ExpanderBaseIcon } from "./ExpanderBaseIcon";
const ExpanderRoot = styled("div").withConfig({ displayName: "ExpanderRoot", componentId: "sc-mifbju" }) `
    display: flex;
    cursor: ${props => props.disabled ? "default" : "pointer"};
    user-select: none;
    transition: background-color .2s ease-in-out, border-color .2s ease-in-out;

    font-size: ${props => props.theme.spacing.expander.fontSize}px;
    line-height: ${props => props.theme.spacing.expander.lineHeight}px;
    font-weight: ${props => props.theme.spacing.expander.fontWeight};
    letter-spacing: ${props => props.theme.spacing.expander.letterSpacing};

    border: 1px solid ${props => (props.colors(props.theme).border ||
    props.colors(props.theme).background ||
    "transparent")};
    border-radius: ${props => props.theme.spacing.borderRadius.thin}px;
    align-items: center;
    color: ${props => props.colors(props.theme).text};
    background-color: ${props => (props.colors(props.theme).background || "transparent")};

    & > * { margin-left: 16px;}
`;
const ExpanderLabel = styled("div").withConfig({ displayName: "ExpanderLabel", componentId: "sc-vxtkw6" }) `
    ${props => props.fullWidth ? css `
    width: 100%;
    ` : ``}
    margin-right: 20px;
`;
const ExpanderValue = styled("span").withConfig({ displayName: "ExpanderValue", componentId: "sc-13k1kk" }) `
    color: ${props => props.colors(props.theme).value};
    margin-left: 8px; /* these could be also 16px */
    margin-right: 8px; /* these could be also 16px */
`;
const ExpanderContent = styled("div").withConfig({ displayName: "ExpanderContent", componentId: "sc-1jblt9" }) `
    display: flex;
    align-items: center;
    ${props => props.fullWidth ? css `
    width: 100%;

    & ${ExpanderValue} {
        flex-grow: 1;
        text-align: right;
    }
    ` : ``}
`;
const hasPropsWithValue = (props) => {
    return props.value !== void 0;
};
class $ExpanderBase extends React.Component {
    constructor() {
        super(...arguments);
        this.handleClick = () => {
            if (this.props.onClick && !this.props.disabled) {
                this.props.onClick();
            }
        };
    }
    render() {
        let value;
        let locale;
        if (hasPropsWithValue(this.props)) {
            value = this.props.value;
            locale = this.props.locale;
        }
        let { label, open, disabled, colors, theme } = this.props;
        let colorSet = colors(theme);
        return (React.createElement(ExpanderRoot, { onClick: this.handleClick, disabled: disabled, colors: colors },
            React.createElement(ExpanderContent, { fullWidth: this.props.fullWidth },
                React.createElement(ExpanderLabel, { fullWidth: this.props.fullWidth }, label),
                value !== void 0 ?
                    React.createElement(ExpanderValue, { colors: colors },
                        React.createElement(Number, { locale: locale, value: value }))
                    : null,
                React.createElement(ExpanderBaseIcon, { expanded: open, color: colorSet.icon, backgroundColor: colorSet.iconBackground }))));
    }
    componentDidUpdate(prevProps) {
        if (prevProps.label !== this.props.label ||
            prevProps.value !== this.props.value) {
            const onResize = this.props.onResize;
            if (onResize) {
                setTimeout(onResize);
            }
        }
    }
}
export const ExpanderBase = withTheme($ExpanderBase);
//# sourceMappingURL=ExpanderBase.js.map