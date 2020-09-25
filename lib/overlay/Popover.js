import { __decorate } from "tslib";
import * as React from "react";
import * as ReactDOM from "react-dom";
import { Manager, Reference, Popper } from "react-popper";
import { observer } from "mobx-react";
import { DomNodeProxy } from "../util/react/DomNodeProxy";
let Popover = class Popover extends React.Component {
    render() {
        return (React.createElement(Manager, null,
            React.createElement(Reference, null, ({ ref }) => React.createElement(DomNodeProxy, { onMount: el => ref(el), onUnmount: el => ref(null) }, this.props.children)),
            this.props.visible ?
                ReactDOM.createPortal(React.createElement(Popper, Object.assign({ placement: this.props.placement, modifiers: Object.assign({ offset: {
                            offset: `${this.props.alignmentOffset + "px" || 0}, ${this.props.offset}px`
                        } }, (this.props.noFlip ? { flip: { enabled: false } } : {})) }, (this.props.referenceElement ? { referenceElement: this.createReferenceObject() } : {})), ({ ref, style, placement, arrowProps, scheduleUpdate }) => (React.createElement("div", { ref: ref, onClick: e => e.stopPropagation(), style: Object.assign(Object.assign({}, style), this.props.style), "data-placement": placement }, typeof this.props.content === "function" ?
                    this.props.content(placement, arrowProps, scheduleUpdate) : this.props.content))), document.body)
                : null));
    }
    createReferenceObject() {
        let referenceEl = this.props.referenceElement;
        if (typeof referenceEl !== "function") {
            return referenceEl;
        }
        const getWrapperEl = referenceEl;
        return {
            getBoundingClientRect() {
                return getWrapperEl() ? getWrapperEl().getBoundingClientRect() :
                    { bottom: 0, left: 0, right: 0, top: 0, height: 0, width: 0 };
            },
            get clientWidth() {
                return getWrapperEl() ? getWrapperEl().clientWidth : 0;
            },
            get clientHeight() {
                return getWrapperEl() ? getWrapperEl().clientHeight : 0;
            }
        };
    }
};
Popover.defaultProps = {
    placement: "top",
    offset: 0
};
Popover = __decorate([
    observer
], Popover);
export { Popover };
//# sourceMappingURL=Popover.js.map