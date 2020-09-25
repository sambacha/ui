import React from "react";
import { ExpanderBase } from "./ExpanderBase";
const hasPropsWithValue = (props) => {
    return props.value !== void 0;
};
export class ExpanderAccordion extends React.Component {
    render() {
        let { label, open, disabled, onClick, onResize, fullWidth } = this.props;
        let value;
        let locale;
        if (hasPropsWithValue(this.props)) {
            value = this.props.value;
            locale = this.props.locale;
        }
        return React.createElement(ExpanderBase, { label: label, open: open, fullWidth: fullWidth, onClick: onClick, onResize: onResize, value: value, locale: locale, disabled: disabled, colors: (theme) => {
                let colors = Object.assign({}, (open ? theme.colors.accordion.expander.open :
                    theme.colors.accordion.expander.closed));
                if (disabled) {
                    colors.border = colors.text = colors.value = theme.colors.accordion.expander.disabled;
                }
                return colors;
            } });
    }
}
//# sourceMappingURL=ExpanderAccordion.js.map