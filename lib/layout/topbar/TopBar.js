import * as React from "react";
import styled, { withTheme } from "../../styled-components";
import { HorizontalBar } from "./HorizontalBar";
const StyledHorizontalBar = styled(HorizontalBar).withConfig({ displayName: "StyledHorizontalBar", componentId: "sc-aydsgb" }) `
    box-shadow: 0 2px 6px 0 rgba(0,0,0,0.04);
`;
export class $TopBar extends React.Component {
    render() {
        return (React.createElement(StyledHorizontalBar, Object.assign({}, this.props, { sticky: true, height: this.props.theme.spacing.topbarHeight })));
    }
}
export const TopBar = withTheme($TopBar);
//# sourceMappingURL=TopBar.js.map