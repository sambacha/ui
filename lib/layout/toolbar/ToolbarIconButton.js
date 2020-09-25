import { __rest } from "tslib";
import * as React from "react";
import { IconButton } from "../../control/IconButton";
import { HoverState } from "../../util/react/HoverState";
export class ToolbarIconButton extends React.Component {
    render() {
        let _a = this.props, { active } = _a, otherProps = __rest(_a, ["active"]);
        return (React.createElement(HoverState, null, (hover) => React.createElement(IconButton, Object.assign({}, otherProps, { color: theme => hover ?
                (active ? theme.colors.toolbar.item.activeHover : theme.colors.toolbar.item.hover) :
                (active ? theme.colors.toolbar.item.active : theme.colors.toolbar.item.normal) }))));
    }
}
//# sourceMappingURL=ToolbarIconButton.js.map