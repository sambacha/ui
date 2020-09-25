import { __rest } from "tslib";
import React from "react";
import { Checkbox } from "../../control/Checkbox";
import { Field } from "formik";
export class CheckboxField extends React.Component {
    render() {
        let _a = this.props, { children } = _a, props = __rest(_a, ["children"]);
        return React.createElement(Field, Object.assign({ type: "checkbox" }, props, { as: Checkbox }), children);
    }
}
//# sourceMappingURL=CheckboxField.js.map