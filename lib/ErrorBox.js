import React from "react";
import { ErrorIcon } from "./icon/ErrorIcon";
import { MessageBox } from "./MessageBox";
export class ErrorBox extends React.Component {
    render() {
        return (React.createElement(MessageBox, { Icon: ErrorIcon, colors: this.props.colors }, this.props.children));
    }
}
//# sourceMappingURL=ErrorBox.js.map