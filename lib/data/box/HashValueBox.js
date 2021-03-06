import * as React from "react";
import { ValueBox } from "../../layout/content/box/ValueBox";
import { Hash } from "../Hash";
import { CopyValueTooltip } from "../CopyValueTooltip";
export class HashValueBox extends React.Component {
    render() {
        let { children, clipboard } = this.props;
        let box = React.createElement(ValueBox, { variant: this.props.variant, colors: this.props.colors, Icon: this.props.Icon },
            React.createElement(Hash, null, children));
        if (this.props.noTooltip) {
            return box;
        }
        return (React.createElement(CopyValueTooltip, { value: "0x" + children.replace(/^0x/, ""), clipboard: clipboard }, box));
    }
}
//# sourceMappingURL=HashValueBox.js.map