import { __decorate } from "tslib";
import * as React from "react";
import { observer, PropTypes } from "mobx-react";
import { AccordionState } from "./internal/AccordionState";
import { reaction } from "mobx";
let AccordionBasic = class AccordionBasic extends React.Component {
    constructor(props) {
        super(props);
        this.accordionState = new AccordionState();
        if (props.initialOpen) {
            this.initialOpenDisposer = reaction(() => this.accordionState.getItems().length, (length, r) => {
                if (length) {
                    this.accordionState.getItems()[0].onClick();
                    r.dispose();
                }
            }, { fireImmediately: true });
        }
    }
    componentWillUnmount() {
        var _a, _b;
        (_b = (_a = this).initialOpenDisposer) === null || _b === void 0 ? void 0 : _b.call(_a);
    }
    getChildContext() {
        return { accordionState: this.accordionState };
    }
    render() {
        var _a;
        let items = this.accordionState.getItems();
        let activeItem = this.accordionState.getActiveItem();
        return React.createElement(React.Fragment, null,
            React.createElement("div", { style: { position: "fixed", top: -10000, left: -10000 } }, this.props.children),
            this.props.renderItems(items.map(item => ({
                config: item.config,
                isOpen: item === activeItem,
                onClick: item.onClick,
                content: item.content
            })), (_a = activeItem) === null || _a === void 0 ? void 0 : _a.content));
    }
};
AccordionBasic.childContextTypes = {
    accordionState: PropTypes.objectOrObservableObject
};
AccordionBasic = __decorate([
    observer
], AccordionBasic);
export { AccordionBasic };
//# sourceMappingURL=AccordionBasic.js.map