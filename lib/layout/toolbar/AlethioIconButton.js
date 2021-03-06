import * as React from "react";
import { AlethioIcon } from "../../icon/AlethioIcon";
import { HoverState } from "../../util/react/HoverState";
import { IconButton } from "../../control/IconButton";
export class AlethioIconButton extends React.Component {
    render() {
        return (React.createElement(HoverState, null, (hover) => React.createElement(IconButton, { Icon: AlethioIcon, color: theme => hover ? theme.colors.toolbarAlethioIconHover : theme.colors.toolbarAlethioIcon })));
    }
}
//# sourceMappingURL=AlethioIconButton.js.map