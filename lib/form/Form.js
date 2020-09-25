import { __rest } from "tslib";
import React from "react";
import { Formik, Form as FormikForm } from "formik";
export class Form extends React.Component {
    render() {
        let _a = this.props, { children } = _a, props = __rest(_a, ["children"]);
        return React.createElement(Formik, Object.assign({}, props),
            React.createElement(FormikForm, null, children));
    }
}
//# sourceMappingURL=Form.js.map