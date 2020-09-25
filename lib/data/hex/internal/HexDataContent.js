import * as React from "react";
import styled from "../../../styled-components";
import { HexDataItem } from "./HexDataItem";
const HexDataContentRoot = styled.div.withConfig({ displayName: "HexDataContentRoot", componentId: "sc-1v9j139" }) `
    display: flex;
    flex-wrap: wrap;
`;
export class HexDataContent extends React.PureComponent {
    render() {
        return (React.createElement(HexDataContentRoot, null, this.props.data
            .match(/.{2}/g)
            .map((v, idx) => React.createElement(HexDataItem, { key: idx, value: v }))));
    }
}
//# sourceMappingURL=HexDataContent.js.map