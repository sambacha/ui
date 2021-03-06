import * as React from "react";
import styled from "../styled-components";
import { splitLongHash } from "../util/internal/hash";
const HiddenHashPartWrapper = styled.span.withConfig({ displayName: "HiddenHashPartWrapper", componentId: "sc-88det8" }) `
    &:before {
        content: " ... ";
    }
`;
const HiddenHashPart = styled.strong.withConfig({ displayName: "HiddenHashPart", componentId: "sc-113w7rd" }) `
    display: inline-block;
    width: 0;
    height: 0;
    opacity: 0;
    pointer-events: none;
    font-size: 0;
`;
export class Hash extends React.PureComponent {
    constructor() {
        super(...arguments);
        this.handleCopy = (e) => {
            e.preventDefault();
            e.clipboardData.setData("text/plain", "0x" + this.props.children);
        };
    }
    render() {
        let { children } = this.props;
        let hash = "0x" + children.replace(/^0x/, "");
        let chars = this.props.ellipsisChars;
        let hashParts = splitLongHash(hash, this.props.ellipsisThreshold, chars);
        return React.createElement("span", { onCopy: this.handleCopy }, !this.props.useEllipsis || !hashParts ?
            hash :
            React.createElement(React.Fragment, null,
                hashParts[0],
                React.createElement(HiddenHashPartWrapper, null,
                    React.createElement(HiddenHashPart, null, hashParts[1])),
                hashParts[2]));
    }
}
Hash.defaultProps = {
    ellipsisThreshold: 20,
    ellipsisChars: 6,
    useEllipsis: true
};
//# sourceMappingURL=Hash.js.map