import * as React from "react";
import styled from "../../styled-components";
const getColors = (theme, checked, type) => {
    let checkedStr = checked ? "checked" : "unchecked";
    let colors;
    if (type === "checkbox") {
        colors = theme.colors.checkbox[checkedStr];
    }
    else {
        colors = theme.colors.radio[checkedStr];
    }
    return colors;
};
const StyledInput = styled.input.withConfig({ displayName: "StyledInput", componentId: "sc-1iwj9kh" }) `
    pointer-events: none;
    opacity: 0;
    position: absolute;
    bottom: 0;
    left: 0;
    width: 100%;
`;
const ToggleInputWrapper = styled.div.withConfig({ displayName: "ToggleInputWrapper", componentId: "sc-1omxdun" }) `
    padding: 4px 0 4px 24px;
    min-height: 24px;
    box-sizing: border-box;
    position: relative;
`;
const ToggleInputLabel = styled.label.withConfig({ displayName: "ToggleInputLabel", componentId: "sc-wfexjd" }) `
    display: block;
    font-size: 14px;
    font-weight: 400;
    color: ${({ theme, disabled, checked, type }) => disabled ?
    theme.colors.base.disabled :
    getColors(theme, checked, type).label};
`;
const ToggleInputLabelText = styled.div.withConfig({ displayName: "ToggleInputLabelText", componentId: "sc-1femtjk" }) `
    margin-left: 4px;
`;
const ToggleInputIconWrapper = styled.div.withConfig({ displayName: "ToggleInputIconWrapper", componentId: "sc-1wiefy1" }) `
    position: absolute;
    top: 0;
    left: 0;
    color: ${({ theme, disabled, checked, type }) => disabled ?
    theme.colors.base.disabled :
    getColors(theme, checked, type).icon};
`;
export class ToggleInput extends React.PureComponent {
    constructor() {
        super(...arguments);
        this.onChange = (event) => {
            if (this.props.onChange && !this.props.disabled) {
                this.props.onChange(event, this.props.type === "radio" || !this.props.checked, this.props.name, this.props.value);
            }
        };
    }
    render() {
        let { id, type, name, value, required, disabled, checked, Icon, children } = this.props;
        return (React.createElement(ToggleInputWrapper, null,
            React.createElement(ToggleInputLabel, { disabled: disabled, checked: checked || false, type: type },
                React.createElement(ToggleInputIconWrapper, { disabled: disabled, checked: checked || false, type: type },
                    React.createElement(StyledInput, { type: type, id: id, name: name, value: value, checked: checked || false, required: required, disabled: disabled, onChange: this.onChange }),
                    Icon(checked || false)),
                children && React.createElement(ToggleInputLabelText, null, children))));
    }
}
//# sourceMappingURL=ToggleInput.js.map