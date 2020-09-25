import * as React from "react";
import { AddIcon } from "../../../../icon/AddIcon";
import { Dropdown } from "../../../dropdown/Dropdown";
import { Menu } from "../../../menu/Menu";
import { MenuItem } from "../../../menu/MenuItem";
import { IconButton } from "../../../IconButton";
import { Checkbox } from "../../../Checkbox";
export class GridColumnSelector extends React.PureComponent {
    render() {
        return (React.createElement("div", { style: { padding: "4px" } },
            React.createElement(Dropdown, { renderMenu: (onSelectItem) => React.createElement(Menu, null, this.props.fields.map((f) => React.createElement(MenuItem, { Icon: () => React.createElement(Checkbox, { checked: f.selected, disabled: f.alwaysVisible }), key: f.fieldKey, onClick: () => onSelectItem(f), disabled: f.alwaysVisible }, f.label))), onSelect: this.props.onChange, closeOnSelect: false }, ({ requestToggle }) => React.createElement(IconButton, { Icon: AddIcon, color: theme => theme.colors.gridColumnSelector, onClick: requestToggle }))));
    }
}
//# sourceMappingURL=GridColumnSelector.js.map