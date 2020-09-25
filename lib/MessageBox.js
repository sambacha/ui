import * as React from "react";
import styled from "./styled-components";
const colorSets = {
    primary: (theme) => ({
        background: theme.colors.messageBoxPrimaryBg,
        text: theme.colors.messageBoxPrimaryText,
        border: theme.colors.messageBoxPrimaryBorder
    }),
    secondary: (theme) => ({
        background: theme.colors.messageBoxSecondaryBg,
        text: theme.colors.messageBoxSecondaryText,
        border: theme.colors.messageBoxSecondaryBorder
    })
};
const MessageBoxRoot = styled("div").withConfig({ displayName: "MessageBoxRoot", componentId: "sc-1d9gtkk" }) `
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    background: ${props => props.colors(props.theme).background};
    color: ${props => props.colors(props.theme).text};
    border: 1px solid ${props => props.colors(props.theme).border};
    box-shadow: 0 2px 6px 0 rgba(0,0,0,0.04);
    box-sizing: border-box;
    width: 480px;
    max-width: 100%;
    padding: 48px;
    text-align: center;
`;
const MessageBoxIcon = styled.div.withConfig({ displayName: "MessageBoxIcon", componentId: "sc-9vu6jf" }) `
    display: inline-block;
`;
const MessageBoxText = styled.div.withConfig({ displayName: "MessageBoxText", componentId: "sc-1t1bhh7" }) `
    margin-top: 20px;
    font-size: 16px;
    line-height: 20px;
    font-weight: 500;
`;
export class MessageBox extends React.Component {
    render() {
        let { Icon, colors } = this.props;
        return (React.createElement(MessageBoxRoot, { colors: colorSets[colors] },
            React.createElement(MessageBoxIcon, null,
                React.createElement(Icon, { size: 48 })),
            React.createElement(MessageBoxText, null, this.props.children)));
    }
}
MessageBox.defaultProps = {
    colors: "primary"
};
//# sourceMappingURL=MessageBox.js.map