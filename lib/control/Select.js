import { __decorate } from "tslib";
import * as React from "react";
import { Dropdown } from "./dropdown/Dropdown";
import { Menu } from "./menu/Menu";
import { observer } from "mobx-react";
import { observable } from "mobx";
import { ExpanderSelect } from "./expander/ExpanderSelect";
import { EmptyIcon } from "../icon/EmptyIcon";
import { DomNodeProxy } from "../util/react/DomNodeProxy";
let Select = class Select extends React.Component {
    constructor(props) {
        super(props);
        this.getOptionLabel = (value) => {
            let { children } = this.props;
            let selectedOption = React.Children.toArray(children).find((option) => option.props.value === value);
            return selectedOption ? selectedOption.props.children : "";
        };
        this.updateSelectValue(props.value, props.children);
    }
    componentDidUpdate(prevProps) {
        if (this.props.value !== prevProps.value || this.props.children !== prevProps.children) {
            this.updateSelectValue(this.props.value, this.props.children);
        }
    }
    updateSelectValue(value, children) {
        if (value === void 0) {
            let selectedOption = React.Children.toArray(children).find((option) => option.props.selected);
            value = selectedOption ? selectedOption.props.value : "";
        }
        this.selected = value;
    }
    render() {
        let { placeholder, fullWidth, disabled, children } = this.props;
        let isIconPresent = !!React.Children.toArray(children).find((option) => option.props.Icon);
        return React.createElement(Dropdown, { renderMenu: (onSelectItem) => {
                var _a;
                return React.createElement("div", { style: { minWidth: (_a = this.expanderEl) === null || _a === void 0 ? void 0 : _a.offsetWidth } },
                    React.createElement(Menu, null, (React.Children.map(children, (option) => {
                        return React.cloneElement(option, {
                            Icon: isIconPresent ? option.props.Icon || EmptyIcon : option.props.Icon,
                            selected: option.props.value === this.selected,
                            onClick: () => onSelectItem(option)
                        });
                    }))));
            }, popoverProps: { style: { zIndex: this.props.menuZIndex } }, onSelect: option => {
                this.selected = option.props.value;
                if (this.props.onSelect) {
                    this.props.onSelect(this.selected);
                }
            } }, ({ requestToggle, isOpen }) => React.createElement(DomNodeProxy, { onMount: el => this.expanderEl = el },
            React.createElement(ExpanderSelect, { open: isOpen, onClick: requestToggle, fullWidth: fullWidth, disabled: disabled, label: this.selected && this.getOptionLabel(this.selected) || placeholder })));
    }
};
Select.defaultProps = {
    placeholder: "Choose an option",
    menuZIndex: 9999
};
__decorate([
    observable
], Select.prototype, "selected", void 0);
Select = __decorate([
    observer
], Select);
export { Select };
//# sourceMappingURL=Select.js.map