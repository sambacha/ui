import * as React from "react";
import styled from "../../../../styled-components";
class $StackBarBubble extends React.Component {
    render() {
        return (React.createElement("div", { className: this.props.className }));
    }
}
const SIZE = 8;
export const StackBarBubble = styled($StackBarBubble).withConfig({ displayName: "StackBarBubble", componentId: "sc-1g684gh" }) `
    width: ${SIZE}px;
    height: ${SIZE}px;
    border-radius: ${SIZE / 2}px;
    margin-top: -${SIZE / 2}px;
    background-color: ${props => props.color};
    vertical-align: middle;
    display: inline-block;
`;
//# sourceMappingURL=StackBarBubble.js.map