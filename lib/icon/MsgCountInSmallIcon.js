import * as React from "react";
import styled from "../styled-components";
import { SvgIcon } from "../util/react/SvgIcon";
const MsgCountInSmallIconRoot = styled.div.withConfig({ displayName: "MsgCountInSmallIconRoot", componentId: "sc-18108u3" }) `
    color: ${props => props.theme.colors.msgCountInIcon};
`;
export class MsgCountInSmallIcon extends React.Component {
    render() {
        return (React.createElement(MsgCountInSmallIconRoot, null,
            React.createElement(SvgIcon, Object.assign({}, this.props),
                React.createElement("g", { stroke: "none", strokeWidth: "1", fill: "none", fillRule: "evenodd" },
                    React.createElement("polygon", { points: "0 0 24 0 24 24 0 24" }),
                    React.createElement("path", { d: "M16,6 L14,6 C12.9,6 12,6.9 12,8 L16,7.98 L16,16 L12,16 C12,17.1 12.9,18 14,18 L16,18 C17.1,18 18,17.1 18,16 L18,8 C18,6.89 17.1,6 16,6 Z M10,15.99 L15,11.99 L10,7.99 L10,10.99 L6,10.99 L6,12.99 L10,12.99 L10,15.99 Z", fill: "currentColor", fillRule: "nonzero", transform: "translate(12.000000, 12.000000) rotate(-270.000000) translate(-12.000000, -12.000000) " })))));
    }
}
//# sourceMappingURL=MsgCountInSmallIcon.js.map