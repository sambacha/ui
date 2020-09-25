import { __rest } from "tslib";
import React from "react";
import { Radio } from "../../control/Radio";
import { Field } from "formik";
export class RadioField extends React.Component {
    render() {
        let _a = this.props, { children } = _a, props = __rest(_a, ["children"]);
        return React.createElement(Field, Object.assign({ type: "radio" }, props, { as: Radio }), children);
    }
}
//# sourceMappingURL=RadioField.js.map