import * as React from "react";
import styled from "../styled-components";
import { InfoIcon } from "./InfoIcon";
const ErrorIconRoot = styled.div.withConfig({ displayName: "ErrorIconRoot", componentId: "sc-1io5of3" }) `
    color: ${props => props.theme.colors.error};
`;
export class ErrorIcon extends React.PureComponent {
    render() {
        return (React.createElement(ErrorIconRoot, null,
            React.createElement(InfoIcon, Object.assign({}, this.props))));
    }
}
//# sourceMappingURL=ErrorIcon.js.map