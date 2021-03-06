import * as React from "react";
import { StackBarBubble } from "./internal/StackBarBubble";
import styled from "../../../styled-components";
const StackBarTooltipTextRoot = styled.div.withConfig({ displayName: "StackBarTooltipTextRoot", componentId: "sc-bht5cj" }) `
    > span {
        padding-left: 8px;
    }

    > span:first-child {
        padding-left: 0;
    }
`;
export class StackBarTooltipText extends React.Component {
    render() {
        return (React.createElement(StackBarTooltipTextRoot, null,
            React.createElement("span", null,
                React.createElement(StackBarBubble, { color: this.props.bubbleColor })),
            this.props.children));
    }
}
//# sourceMappingURL=StackBarTooltipText.js.map