import { __decorate } from "tslib";
import * as React from "react";
import { LayoutRowWrapper } from "./internal/LayoutRowWrapper";
import { observable } from "mobx";
import { observer } from "mobx-react";
let LayoutRow = class LayoutRow extends React.Component {
    constructor() {
        super(...arguments);
        this.smallScreen = false;
        this.isFirstLabelIgnored = false;
        this.onResize = (width) => {
            this.smallScreen = this.props.minWidth ?
                width <= this.props.minWidth :
                false;
            if (!this.props.responsive || !this.props.responsive.ignoreFirstLabel) {
                return;
            }
            this.isFirstLabelIgnored = (this.props.responsive.ignoreFirstLabel === "forLowRes" && width < 540)
                || (this.props.responsive.ignoreFirstLabel === "forMobile" && width < 460);
        };
    }
    isLayoutRowItemInstance(c) {
        let childIsLayoutRowItem = false;
        try {
            const childType = c.type;
            childIsLayoutRowItem = childType._brand === "layoutRowItem";
        }
        catch (e) {
        }
        return childIsLayoutRowItem;
    }
    render() {
        let i = 0;
        if (this.smallScreen) {
            return React.Children.map(this.props.children, c => {
                if (c === null || c === void 0) {
                    return c;
                }
                const childIsLayoutRowItem = this.isLayoutRowItemInstance(c);
                return (React.createElement(LayoutRowWrapper, { smallScreen: this.smallScreen, onResize: this.onResize, centerContent: this.isFirstLabelIgnored }, childIsLayoutRowItem ? React.cloneElement(c, { isBeginningOfRow: true, fullRow: true, ignoreFirstLabel: this.isFirstLabelIgnored }) : c));
            });
        }
        else {
            return (React.createElement(LayoutRowWrapper, { smallScreen: this.smallScreen, onResize: this.onResize, centerContent: this.isFirstLabelIgnored }, React.Children.map(this.props.children, c => {
                if (c === null || c === void 0) {
                    return c;
                }
                const childIsLayoutRowItem = this.isLayoutRowItemInstance(c);
                return childIsLayoutRowItem ? React.cloneElement(c, { isBeginningOfRow: !i++ || this.smallScreen, ignoreFirstLabel: this.isFirstLabelIgnored }) : c;
            })));
        }
    }
};
__decorate([
    observable
], LayoutRow.prototype, "smallScreen", void 0);
__decorate([
    observable
], LayoutRow.prototype, "isFirstLabelIgnored", void 0);
LayoutRow = __decorate([
    observer
], LayoutRow);
export { LayoutRow };
//# sourceMappingURL=LayoutRow.js.map