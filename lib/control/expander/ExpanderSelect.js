import React from "react";
import { ExpanderBase } from "./ExpanderBase";
const hasPropsWithValue = (props) => {
    return props.value !== void 0;
};
export class ExpanderSelect extends React.Component {
    render() {
        let { label, open, disabled, onClick, fullWidth } = this.props;
        let value;
        let locale;
        if (hasPropsWithValue(this.props)) {
            value = this.props.value;
            locale = this.props.locale;
        }
        return React.createElement(ExpanderBase, { label: label, open: open, fullWidth: fullWidth, onClick: onClick, value: value, locale: locale, disabled: disabled, colors: (theme) => {
                let colors = Object.assign({}, (open ? theme.colors.select.expander.open : theme.colors.select.expander.closed));
                if (disabled) {
                    colors.border = colors.text = colors.value = theme.colors.select.expander.disabled;
                }
                return colors;
            } });
    }
}
//# sourceMappingURL=ExpanderSelect.js.map