import * as React from "react";
import styled from "../styled-components";
import { SvgIcon } from "../util/react/SvgIcon";
const ErrorSmallIconRoot = styled.div.withConfig({ displayName: "ErrorSmallIconRoot", componentId: "sc-16qg0h4" }) `
    color: ${props => props.theme.colors.error};
`;
export class ErrorSmallIcon extends React.PureComponent {
    render() {
        return (React.createElement(ErrorSmallIconRoot, null,
            React.createElement(SvgIcon, Object.assign({}, this.props),
                React.createElement("g", { stroke: "none", strokeWidth: "1", fill: "none", fillRule: "evenodd" },
                    React.createElement("polygon", { points: "0 0 24 0 24 24 0 24" }),
                    React.createElement("path", { d: "M12,5 C8.136,5 5,8.136 5,12 C5,15.864 8.136,19 12,19 C15.864,19 19,15.864 19,12 C19,8.136 15.864,5 12,5 Z M13,16 L11,16 L11,14 L13,14 L13,16 Z M13,13 L11,13 L11,8 L13,8 L13,13 Z", fill: "currentColor", fillRule: "nonzero" })))));
    }
}
//# sourceMappingURL=ErrorSmallIcon.js.map