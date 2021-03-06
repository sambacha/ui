import * as React from "react";
import styled from "../styled-components";
import { SvgIcon } from "../util/react/SvgIcon";
const MsgCountPendingSmallIconRoot = styled.div.withConfig({ displayName: "MsgCountPendingSmallIconRoot", componentId: "sc-1jchtii" }) `
    color: ${props => props.theme.colors.msgCountPendingIcon};
`;
export class MsgCountPendingSmallIcon extends React.Component {
    render() {
        return (React.createElement(MsgCountPendingSmallIconRoot, null,
            React.createElement(SvgIcon, Object.assign({}, this.props),
                React.createElement("g", { stroke: "none", strokeWidth: "1", fill: "none", fillRule: "evenodd" },
                    React.createElement("polygon", { points: "0 0 24 0 24 24 0 24" }),
                    React.createElement("path", { d: "M12,9 C11.1715729,9 10.5,8.32842712 10.5,7.5 C10.5,6.67157288 11.1715729,6 12,6 C12.8284271,6 13.5,6.67157288 13.5,7.5 C13.5,8.32842712 12.8284271,9 12,9 Z M16,9 C15.1715729,9 14.5,8.32842712 14.5,7.5 C14.5,6.67157288 15.1715729,6 16,6 C16.8284271,6 17.5,6.67157288 17.5,7.5 C17.5,8.32842712 16.8284271,9 16,9 Z M8,9 C7.17157288,9 6.5,8.32842712 6.5,7.5 C6.5,6.67157288 7.17157288,6 8,6 C8.82842712,6 9.5,6.67157288 9.5,7.5 C9.5,8.32842712 8.82842712,9 8,9 Z M6,16 L6,14 C6,12.9 6.91,12 8.01,12 L7.99,16 L16,16 L16.01,12 C17.11,12 18,12.9 18,14 L18,16 C18,17.1 17.11,18 16.01,18 L8.01,18 C6.9,18 6,17.1 6,16 Z", fill: "currentColor", fillRule: "nonzero" })))));
    }
}
//# sourceMappingURL=MsgCountPendingSmallIcon.js.map