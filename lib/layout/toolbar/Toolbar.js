import * as React from "react";
import styled, { withTheme } from "../../styled-components";
import { VerticalBar } from "../VerticalBar";
export const TOOLBAR_WIDTH = 72;
const StyledVerticalBar = styled(VerticalBar).withConfig({ displayName: "StyledVerticalBar", componentId: "sc-1v5mn9e" }) `
    box-shadow: 0 2px 6px 0 rgba(0,0,0,0.04);
`;
export class $Toolbar extends React.Component {
    render() {
        return (React.createElement(StyledVerticalBar, Object.assign({}, this.props, { sticky: true, width: this.props.theme.spacing.toolbarWidth })));
    }
}
export const Toolbar = withTheme($Toolbar);
//# sourceMappingURL=Toolbar.js.map