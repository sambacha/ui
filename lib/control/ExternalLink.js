import React from "react";
import styled from "../styled-components";
const ExternalLinkRoot = styled.a.withConfig({ displayName: "ExternalLinkRoot", componentId: "sc-hx1ula" }) `
    text-decoration: none;
    outline: none;

    color: ${props => props.theme.colors.link};
`;
export class ExternalLink extends React.Component {
    render() {
        return React.createElement(ExternalLinkRoot, Object.assign({ target: this.props.target || "_blank", rel: "noopener noreferrer" }, this.props), this.props.children);
    }
}
//# sourceMappingURL=ExternalLink.js.map