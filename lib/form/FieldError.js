import * as React from "react";
import { ErrorMessage } from "formik";
import styled from "../styled-components";
export const $StatusError = styled.p.withConfig({ displayName: "$StatusError", componentId: "sc-14qqe4m" }) `
    margin: 0;
    color: ${props => props.theme.colors.base.status.error};
`;
export class FieldError extends React.Component {
    render() {
        let { name, className } = this.props;
        return (React.createElement(ErrorMessage, { name: name, className: className, component: $StatusError }));
    }
}
//# sourceMappingURL=FieldError.js.map