import * as React from "react";
import styled from "../../styled-components";
import { Tooltip } from "../../overlay/tooltip/Tooltip";
import { hexToString } from "../../util/internal/hex";
import { StringData } from "../StringData";
import { CopyValueButton } from "../../control/button/CopyValueButton";
import { Hash } from "../Hash";
const CopyButtonWrapper = styled.div.withConfig({ displayName: "CopyButtonWrapper", componentId: "sc-muwubq" }) `
    margin: 0 8px 0 16px;
`;
export class DecodedHexData extends React.PureComponent {
    render() {
        let { data } = this.props;
        return (React.createElement(Tooltip, { content: React.createElement("div", { style: { display: "flex", alignItems: "center" } },
                React.createElement(Hash, { ellipsisThreshold: 70 }, "0x" + data.replace(/^0x/, "")),
                React.createElement(CopyButtonWrapper, null,
                    React.createElement(CopyValueButton, { value: "0x" + this.props.data.replace(/^0x/, ""), clipboard: this.props.clipboard }))) },
            React.createElement(StringData, null, hexToString(data))));
    }
}
//# sourceMappingURL=DecodedHexData.js.map