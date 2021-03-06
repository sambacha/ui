import { __decorate } from "tslib";
import * as React from "react";
import { observable, when, reaction, runInAction } from "mobx";
import { observer, PropTypes } from "mobx-react";
import { LayoutRow } from "../../layout/content/LayoutRow";
import { LayoutRowItem } from "../../layout/content/LayoutRowItem";
import { Label } from "../../data/Label";
import { AccordionState } from "./internal/AccordionState";
import { AccordionContentWrapper } from "./internal/AccordionContentWrapper";
import { Height } from "../../fx/Height";
let AccordionVertical = class AccordionVertical extends React.Component {
    constructor(props) {
        super(props);
        this.expanderEls = new Map();
        this.handleContainerRef = (ref) => {
            if (ref) {
                this.containerOffsetLeft = ref.offsetLeft;
            }
        };
        this.onExpanderResize = () => {
            this.fixedExpanderWidth = void 0;
            this.destroyWidthWatch();
            this.setupWidthWatch();
        };
        this.accordionState = new AccordionState(this.props.onContentError);
        this.refreshDisposer = reaction(() => this.accordionState.getItems().map(i => i.config), () => {
            runInAction(() => {
                this.fixedExpanderWidth = void 0;
                this.expanderEls.clear();
            });
            this.destroyWidthWatch();
            this.setupWidthWatch();
        }, {
            delay: 100,
            equals: (itemConfigs, prevItemConfigs) => {
                if (itemConfigs.length !== prevItemConfigs.length) {
                    return false;
                }
                return itemConfigs.every((item, idx) => item === prevItemConfigs[idx]);
            }
        });
    }
    getChildContext() {
        return { accordionState: this.accordionState };
    }
    componentDidMount() {
        this.setupWidthWatch();
    }
    setupWidthWatch() {
        const items = this.accordionState.getItems();
        if (items.length) {
            this.widthWatchDisposer = when(() => this.expanderEls.size === items.length, () => {
                this.computeWidth();
            });
        }
    }
    destroyWidthWatch() {
        if (this.widthWatchDisposer) {
            this.widthWatchDisposer();
            this.widthWatchDisposer = void 0;
        }
    }
    componentWillUnmount() {
        this.destroyWidthWatch();
        if (this.refreshDisposer) {
            this.refreshDisposer();
            this.refreshDisposer = void 0;
        }
    }
    computeWidth() {
        let maxWidth = [...this.expanderEls.values()].reduce((max, el) => Math.max(max, el.offsetWidth), 0);
        this.fixedExpanderWidth = maxWidth + 1;
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
        return React.createElement("div", { ref: this.handleContainerRef }, items.map((item, idx) => React.createElement(React.Fragment, { key: idx },
            React.createElement(LayoutRow, { responsive: { ignoreFirstLabel: "forLowRes" } },
                React.createElement(LayoutRowItem, null,
                    React.createElement(Label, null, !idx ? this.props.label : void 0),
                    React.createElement("div", { ref: ref => ref && this.expanderEls.set(idx, ref), style: { width: this.fixedExpanderWidth } }, this.props.renderExpander({
                        config: item.config,
                        isFullWidth: !!this.fixedExpanderWidth,
                        isOpen: item === activeItem,
                        onClick: item.onClick,
                        onResize: this.onExpanderResize
                    })),
                    this.props.renderHeader && this.props.renderHeader({
                        config: item.config,
                        isOpen: item === activeItem
                    }))),
            React.createElement(Height, { duration: this.props.contentAnimSeconds }, item === activeItem && React.createElement(AccordionContentWrapper, { content: item.content, config: item.config, status: item.contentStatus, arrowPosition: this.getContentArrowPosition(), loadingDelay: this.props.contentAnimSeconds, errorText: this.props.errorText, loadingText: this.props.loadingText, renderContent: this.props.renderContent })))));
    }
    getContentArrowPosition() {
        if (this.expanderEls.size && this.containerOffsetLeft !== void 0 && this.fixedExpanderWidth) {
            let expanderEl = this.expanderEls.values().next().value;
            return expanderEl.offsetLeft - this.containerOffsetLeft + this.fixedExpanderWidth / 2;
        }
        return void 0;
    }
};
AccordionVertical.defaultProps = {
    contentAnimSeconds: .2
};
AccordionVertical.childContextTypes = {
    accordionState: PropTypes.objectOrObservableObject
};
__decorate([
    observable
], AccordionVertical.prototype, "expanderEls", void 0);
__decorate([
    observable
], AccordionVertical.prototype, "fixedExpanderWidth", void 0);
AccordionVertical = __decorate([
    observer
], AccordionVertical);
export { AccordionVertical };
//# sourceMappingURL=AccordionVertical.js.map