import * as React from "react";
import styled from "../../styled-components";
import { Tooltip } from "../../overlay/tooltip/Tooltip";
const ToolbarItemRoot = styled("div").withConfig({ displayName: "ToolbarItemRoot", componentId: "sc-3fjr5z" }) `
    display: flex;
    align-items: center;
    justify-content: center;
    /* HACK: Subtract toolbar border */
    width: ${({ theme }) => theme.spacing.toolbarWidth - 1}px;
    height: ${({ theme }) => theme.spacing.toolbarWidth}px;
    background-color: ${props => props.backgroundColor};
`;
export class ToolbarItem extends React.Component {
    render() {
        let { className, backgroundColor } = this.props;
        return (React.createElement(ToolbarItemRoot, { className: className, backgroundColor: backgroundColor, innerRef: ref => this.rootEl = ref }, this.props.title ?
            React.createElement(Tooltip, { content: this.props.title, placement: "right", referenceElement: () => this.rootEl, nonInteractive: true }, this.props.children)
            :
                this.props.children));
    }
}
//# sourceMappingURL=ToolbarItem.js.map