import { __rest } from "tslib";
import * as React from "react";
import { TooltipBase } from "./TooltipBase";
import styled from "../../styled-components";
import { TooltipText } from "./TooltipText";
const TooltipContent = styled.div.withConfig({ displayName: "TooltipContent", componentId: "sc-fqdb1v" }) `
    padding: 4px 16px;
`;
export class Tooltip extends React.Component {
    render() {
        let _a = this.props, { content, children } = _a, other = __rest(_a, ["content", "children"]);
        return (React.createElement(TooltipBase, Object.assign({}, other, { content: React.createElement(TooltipContent, null,
                React.createElement(TooltipText, null, content)) }), children));
    }
}
Tooltip.defaultProps = {
    offset: 8
};
//# sourceMappingURL=Tooltip.js.map