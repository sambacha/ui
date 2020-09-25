import { __rest } from "tslib";
import React from "react";
import { Field } from "formik";
import { Input } from "../../control/Input";
import { ErrorIcon } from "../../icon/ErrorIcon";
import { StatusOkIcon } from "../../icon/StatusOkIcon";
import styled from "../../styled-components";
const StatusOkIconWrapper = styled.div.withConfig({ displayName: "StatusOkIconWrapper", componentId: "sc-1s4xnay" }) `
    color: ${props => props.theme.colors.base.status.success};
`;
export class InputField extends React.Component {
    render() {
        let _a = this.props, { validate: _, ref: __, hasValidationIcon } = _a, inputProps = __rest(_a, ["validate", "ref", "hasValidationIcon"]);
        return React.createElement(Field, Object.assign({}, this.props), ({ field, meta }) => React.createElement(Input, Object.assign({}, field, inputProps, { RightIcon: hasValidationIcon && meta.touched ? (meta.error ? ErrorIcon : () => React.createElement(StatusOkIconWrapper, null,
                React.createElement(StatusOkIcon, null))) : void 0 })));
    }
}
InputField.defaultProps = {
    hasValidationIcon: true
};
//# sourceMappingURL=InputField.js.map