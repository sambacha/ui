import * as React from "react";
import { HoverState } from "../../util/react/HoverState";
import { IconButton } from "../../control/IconButton";
export class ProductIconButton extends React.Component {
    render() {
        return (React.createElement(HoverState, null, (hover) => React.createElement(IconButton, { Icon: this.props.Icon, color: hover ? void 0 : theme => theme.colors.toolbar.item.normal, iconSize: 24 })));
    }
}
//# sourceMappingURL=ProductIconButton.js.map