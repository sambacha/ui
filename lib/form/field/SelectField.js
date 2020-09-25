import { __rest } from "tslib";
import React from "react";
import { Select } from "../../control/Select";
import { CustomField } from "./CustomField";
export class SelectField extends React.Component {
    render() {
        let _a = this.props, { validate, name } = _a, selectProps = __rest(_a, ["validate", "name"]);
        return React.createElement(CustomField, { name: name, validate: validate }, ({ value: currentValue, onChange, onBlur }) => {
            return React.createElement(Select, Object.assign({}, selectProps, { value: currentValue, onSelect: value => {
                    onChange(value);
                    onBlur();
                } }));
        });
    }
}
//# sourceMappingURL=SelectField.js.map