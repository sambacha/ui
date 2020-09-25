import React from "react";
import { Field } from "formik";
export class CustomField extends React.Component {
    render() {
        let { name, validate, children } = this.props;
        return React.createElement(Field, { name: name, validate: validate }, ({ field }) => {
            return children({
                name: field.name,
                value: field.value,
                onChange: (value) => {
                    const fakeEvent = { target: { name: field.name, value } };
                    field.onChange(fakeEvent);
                },
                onBlur: () => {
                    const fakeEvent = { target: { name: field.name } };
                    setTimeout(() => field.onBlur(fakeEvent));
                }
            });
        });
    }
}
//# sourceMappingURL=CustomField.js.map