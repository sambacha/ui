import * as React from "react";
import styled from "../../styled-components";
import { Spacer } from "../Spacer";
const LayoutSectionWrapper = styled.div.withConfig({ displayName: "LayoutSectionWrapper", componentId: "sc-71gkio" }) `
    flex: 1 1 auto;
    box-sizing: border-box;
`;
export class LayoutSection extends React.Component {
    render() {
        let children = React.Children.toArray(this.props.children);
        return children.length ?
            (React.createElement(React.Fragment, null,
                this.props.useWrapper ?
                    React.createElement(LayoutSectionWrapper, null, this.props.children) :
                    this.props.children,
                React.createElement(Spacer, { height: "48px" }))) :
            null;
    }
}
//# sourceMappingURL=LayoutSection.js.map