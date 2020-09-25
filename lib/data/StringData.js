import * as React from "react";
import styled from "../styled-components";
const StringDataRoot = styled.div.withConfig({ displayName: "StringDataRoot", componentId: "sc-q6ced6" }) `
    padding: 14px 0;
    white-space: pre;
`;
const StringDataLine = styled.div.withConfig({ displayName: "StringDataLine", componentId: "sc-we1wmd" }) `
    padding: 2px 8px;
    margin: 8px 0;
    background: ${props => props.theme.colors.rawDataBackground};
    color: ${props => props.theme.colors.rawDataText};
    width: fit-content;
    font-family: "Roboto Mono", monospace;
    font-size: 14px;
    line-height: 16px;
    border-radius: 4px;

    &:first-child {
        margin-top: 0;
    }

    &:last-child {
        margin-bottom: 0;
    }

    &:empty {
        display: none;
    }
`;
export class StringData extends React.Component {
    render() {
        return (React.createElement(StringDataRoot, null, this.props.children.split(/\r?\n/).map((line, idx) => (React.createElement(StringDataLine, { key: idx }, line)))));
    }
}
//# sourceMappingURL=StringData.js.map