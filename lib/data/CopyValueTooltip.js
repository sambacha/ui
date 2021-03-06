import * as React from "react";
import { Tooltip } from "../overlay/tooltip/Tooltip";
import styled from "../styled-components";
import { CopyValueButton } from "../control/button/CopyValueButton";
const CopyValueButtonWrapper = styled.div.withConfig({ displayName: "CopyValueButtonWrapper", componentId: "sc-7pzyxn" }) `
    margin: 0 0 0 16px;
`;
export class CopyValueTooltip extends React.Component {
    render() {
        return (React.createElement(Tooltip, { content: React.createElement("div", { style: { display: "flex", alignItems: "center" } },
                React.createElement("div", null, this.props.value),
                React.createElement(CopyValueButtonWrapper, null,
                    React.createElement(CopyValueButton, { value: this.props.value, clipboard: this.props.clipboard }))) }, this.props.children));
    }
}
//# sourceMappingURL=CopyValueTooltip.js.map