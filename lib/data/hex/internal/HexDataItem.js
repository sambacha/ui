import * as React from "react";
import styled from "../../../styled-components";
const HexDataItemRoot = styled("div").withConfig({ displayName: "HexDataItemRoot", componentId: "sc-qt59hf" }) `
    width: 32px;
    height: 32px;
    text-align: center;
    line-height: 32px;
    font-size: 14px;
    font-weight: 600;
    ${props => props.value === "00" ? "color: " + props.theme.colors.hexDataItem + ";" : undefined};
`;
export class HexDataItem extends React.PureComponent {
    render() {
        return (React.createElement(HexDataItemRoot, { value: this.props.value }, this.props.value));
    }
}
//# sourceMappingURL=HexDataItem.js.map