import * as React from "react";
import styled from "../../styled-components";
import { HexDataContent } from "./internal/HexDataContent";
import { CopyValueButton } from "../../control/button/CopyValueButton";
const CopyButtonWrapper = styled.div.withConfig({ displayName: "CopyButtonWrapper", componentId: "sc-czx2gz" }) `
    position: absolute;
    top: 11px;
    right: 8px;
`;
const HexDataRoot = styled.div.withConfig({ displayName: "HexDataRoot", componentId: "sc-veesex" }) `
    flex: 1 1 auto;
    max-width: 512px;
    padding: 8px 32px 8px 0;
    position: relative;
`;
const HexTextArea = styled.textarea.withConfig({ displayName: "HexTextArea", componentId: "sc-1t44xd9" }) `
    height: 200px;
    width: 100%;
    max-width: 500px;
    resize: none;
    box-sizing: border-box;
    padding: 7px 7px;
`;
export class HexData extends React.Component {
    render() {
        let dataLimit = this.props.dataLimit;
        return (React.createElement(HexDataRoot, null,
            this.props.data.length > dataLimit ?
                React.createElement(HexTextArea, { readOnly: true, value: this.props.data }) :
                React.createElement(HexDataContent, { data: this.props.data }),
            this.props.data.length <= dataLimit && React.createElement(CopyButtonWrapper, null,
                React.createElement(CopyValueButton, { value: this.props.data, clipboard: this.props.clipboard }))));
    }
}
HexData.defaultProps = {
    dataLimit: 1024
};
//# sourceMappingURL=HexData.js.map