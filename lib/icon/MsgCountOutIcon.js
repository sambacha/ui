import * as React from "react";
import styled from "../styled-components";
import { SvgIcon } from "../util/react/SvgIcon";
const MsgCountOutIconRoot = styled.div.withConfig({ displayName: "MsgCountOutIconRoot", componentId: "sc-dbq5ir" }) `
    color: ${props => props.theme.colors.msgCountOutIcon};
`;
export class MsgCountOutIcon extends React.Component {
    render() {
        return (React.createElement(MsgCountOutIconRoot, null,
            React.createElement(SvgIcon, Object.assign({}, this.props),
                React.createElement("g", { stroke: "none", strokeWidth: "1", fill: "none", fillRule: "evenodd" },
                    React.createElement("path", { d: "M5,3 L9,3 C10.1,3 11,3.91 11,5.01 L11,8 L9,8 L9,4.99 L5,4.99 L5,19 L9,19 L9,16 " +
                            "L11,16 L11,19.01 C11,20.11 10.1,21 9,21 L5,21 C3.9,21 3,20.11 3,19.01 L3,5.01 " +
                            "C3,3.9 3.9,3 5,3 Z M16,16 L21,12 L16,8 L16,11 L9,11 L9,13 L16,13 L16,16 Z", fill: "currentColor", fillRule: "nonzero", transform: "translate(12.000000, 12.000000) " +
                            "rotate(-90.000000) " +
                            "translate(-12.000000, -12.000000) " })))));
    }
}
//# sourceMappingURL=MsgCountOutIcon.js.map