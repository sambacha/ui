import { __decorate } from "tslib";
import * as React from "react";
import { observer } from "mobx-react";
import { observable } from "mobx";
import { DomNodeProxy } from "./DomNodeProxy";
let HoverState = class HoverState extends React.Component {
    constructor() {
        super(...arguments);
        this.isHovered = false;
        this.handleMount = (ref) => {
            ref.addEventListener("mouseenter", this.onMouseEnter);
            ref.addEventListener("mouseleave", this.onMouseLeave);
        };
        this.handleUnmount = (ref) => {
            ref.removeEventListener("mouseenter", this.onMouseEnter);
            ref.removeEventListener("mouseleave", this.onMouseLeave);
        };
        this.onMouseEnter = () => {
            this.isHovered = true;
        };
        this.onMouseLeave = () => {
            this.isHovered = false;
        };
    }
    render() {
        return React.createElement(DomNodeProxy, { onMount: this.handleMount, onUnmount: this.handleUnmount }, this.props.children(this.isHovered));
    }
};
__decorate([
    observable
], HoverState.prototype, "isHovered", void 0);
HoverState = __decorate([
    observer
], HoverState);
export { HoverState };
//# sourceMappingURL=HoverState.js.map