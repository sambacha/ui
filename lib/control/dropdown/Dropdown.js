import { __decorate } from "tslib";
import * as React from "react";
import { observer } from "mobx-react";
import { observable, action } from "mobx";
import { Popover } from "../../overlay/Popover";
import { contains } from "@puzzl/browser/lib/dom";
import { DomNodeProxy } from "../../util/react/DomNodeProxy";
import { Fade } from "../../fx/Fade";
let Dropdown = class Dropdown extends React.Component {
    constructor(props) {
        super(props);
        this.layerOpen = false;
        this.layerMounted = false;
        this.handleAnimationFinished = () => {
            if (!this.layerOpen) {
                this.layerMounted = false;
            }
        };
        this.handleSelectItem = (item) => {
            if (this.props.closeOnSelect) {
                this.toggleLayer();
            }
            if (this.props.onSelect) {
                this.props.onSelect(item);
            }
        };
        this.handleLayerToggle = () => {
            this.toggleLayer();
        };
        this.handleDocumentClick = (e) => {
            if (!contains(this.layerEl, e.target) &&
                !contains(this.targetEl, e.target)) {
                this.toggleLayer();
            }
        };
    }
    render() {
        let { popoverProps, children } = this.props;
        return (React.createElement(Popover, Object.assign({ visible: this.layerMounted, placement: "bottom-start", offset: 8, content: (_, __, scheduleUpdate) => this.renderPopover(scheduleUpdate) }, popoverProps), React.createElement(DomNodeProxy, { onMount: el => this.targetEl = el, onUnmount: () => this.targetEl = (void 0) }, typeof children === "function" ?
            children({ isOpen: this.layerOpen, requestToggle: this.handleLayerToggle }) :
            children)));
    }
    renderPopover(scheduleUpdate) {
        return React.createElement(Fade, { innerRef: ref => this.layerEl = ref, in: this.layerOpen, onFinished: this.handleAnimationFinished, onEnter: scheduleUpdate }, this.props.renderMenu(this.handleSelectItem));
    }
    toggleLayer() {
        this.layerOpen = !this.layerOpen;
        if (this.layerOpen) {
            this.layerMounted = true;
        }
        if (this.layerOpen) {
            document.addEventListener("click", this.handleDocumentClick);
        }
        else {
            document.removeEventListener("click", this.handleDocumentClick);
        }
    }
    componentWillUnmount() {
        document.removeEventListener("click", this.handleDocumentClick);
    }
};
Dropdown.defaultProps = {
    closeOnSelect: true
};
__decorate([
    observable
], Dropdown.prototype, "layerOpen", void 0);
__decorate([
    observable
], Dropdown.prototype, "layerMounted", void 0);
__decorate([
    action
], Dropdown.prototype, "toggleLayer", null);
Dropdown = __decorate([
    observer
], Dropdown);
export { Dropdown };
//# sourceMappingURL=Dropdown.js.map