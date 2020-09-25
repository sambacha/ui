import { __rest } from "tslib";
import { Field } from "formik";
import React from "react";
import { Textarea } from "../../control/Textarea";
export class TextareaField extends React.Component {
    render() {
        let props = __rest(this.props, []);
        return React.createElement(Field, Object.assign({ type: "text" }, props, { as: Textarea }));
    }
}
//# sourceMappingURL=TextareaField.js.map