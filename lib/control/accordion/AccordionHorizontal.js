import { __decorate } from "tslib";
import * as React from "react";
import { observable } from "mobx";
import { observer, PropTypes } from "mobx-react";
import { LayoutRow } from "../../layout/content/LayoutRow";
import { LayoutRowItem } from "../../layout/content/LayoutRowItem";
import { Label } from "../../data/Label";
import { DomNodeProxy } from "../../util/react/DomNodeProxy";
import { AccordionState } from "./internal/AccordionState";
import { AccordionContentWrapper } from "./internal/AccordionContentWrapper";
import { Height } from "../../fx/Height";
let AccordionHorizontal = class AccordionHorizontal extends React.Component {
    constructor(props) {
        super(props);
        this.expanderEls = new Map();
        this.handleContainerRef = (ref) => {
            if (ref) {
                this.containerOffsetLeft = ref.offsetLeft;
            }
        };
        this.accordionState = new AccordionState(this.props.onContentError);
    }
    getChildContext() {
        return { accordionState: this.accordionState };
    }
    render() {
        return React.createElement(React.Fragment, null,
            React.createElement("div", { style: { position: "fixed", top: -10000, left: -10000 } }, this.props.children),
            this.renderItems());
    }
    renderItems() {
        if (!this.accordionState.getItems().length) {
            return React.createElement(LayoutRow, null,
                React.createElement(LayoutRowItem, null,
                    React.createElement(Label, null, this.props.label),
                    this.props.noDataContent));
        }
        let items = this.accordionState.getItems();
        let activeItem = this.accordionState.getActiveItem();
        return React.createElement("div", { ref: this.handleContainerRef },
            React.createElement(LayoutRow, null,
                React.createElement(LayoutRowItem, null,
                    React.createElement(Label, null, this.props.label),
                    React.createElement("div", { style: { display: "flex" } }, items.map((item, idx) => React.createElement(React.Fragment, { key: idx }, this.renderExpander({
                        config: item.config,
                        idx,
                        isOpen: item === activeItem,
                        onClick: item.onClick
                    })))))),
            React.createElement(Height, { duration: this.props.contentAnimSeconds }, activeItem && React.createElement(AccordionContentWrapper, { content: activeItem.content, config: activeItem.config, status: activeItem.contentStatus, arrowPosition: this.getContentArrowPosition(activeItem.index), loadingDelay: this.props.contentAnimSeconds, loadingText: this.props.loadingText, errorText: this.props.errorText, renderContent: this.props.renderContent })));
    }
    renderExpander({ config, idx, isOpen, onClick }) {
        return React.createElement(DomNodeProxy, { onMount: ref => this.expanderEls.set(idx, ref), onUnmount: ref => this.expanderEls.delete(idx) }, this.props.renderExpander({
            config,
            isOpen,
            onClick
        }));
    }
    getContentArrowPosition(idx) {
        if (this.expanderEls.size && this.containerOffsetLeft !== void 0) {
            if (!this.expanderEls.has(idx)) {
                throw new RangeError(`Index "${idx}" out of range`);
            }
            let expanderEl = this.expanderEls.get(idx);
            let expanderWidth = expanderEl.offsetWidth;
            return expanderEl.offsetLeft - this.containerOffsetLeft + expanderWidth / 2;
        }
        return void 0;
    }
};
AccordionHorizontal.defaultProps = {
    contentAnimSeconds: .2
};
AccordionHorizontal.childContextTypes = {
    accordionState: PropTypes.objectOrObservableObject
};
__decorate([
    observable
], AccordionHorizontal.prototype, "expanderEls", void 0);
AccordionHorizontal = __decorate([
    observer
], AccordionHorizontal);
export { AccordionHorizontal };
//# sourceMappingURL=AccordionHorizontal.js.map