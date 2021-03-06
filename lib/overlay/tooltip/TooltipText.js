import * as React from "react";
import styled from "../../styled-components";
const TooltipTextRoot = styled("div").withConfig({ displayName: "TooltipTextRoot", componentId: "sc-1mom4fv" }) `
    font-size: 16px;
    line-height: 32px;
    font-weight: 500;
    letter-spacing: normal;

    color: ${props => (props.textColor ?
    props.textColor :
    "black")};
`;
export class TooltipText extends React.Component {
    render() {
        return React.createElement(TooltipTextRoot, { textColor: this.props.textColor }, this.props.children);
    }
}
//# sourceMappingURL=TooltipText.js.map