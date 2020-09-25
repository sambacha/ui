import { __awaiter, __decorate } from "tslib";
import { observable, action } from "mobx";
import { AccordionItemState } from "../AccordionItemState";
import { AccordionItemContentStatus } from "../AccordionItemContentStatus";
export class AccordionState {
    constructor(onError) {
        this.onError = onError;
        this.handleItemClick = (item) => __awaiter(this, void 0, void 0, function* () {
            this.activeItem = item === this.activeItem ? void 0 : item;
            if (this.activeItem !== void 0) {
                yield this.onItemExpanded(item);
            }
        });
        this.items = [];
    }
    getItems() {
        return this.items;
    }
    getActiveItem() {
        return this.activeItem;
    }
    createItem(itemConfig, idx) {
        let item = new AccordionItemState();
        item.index = idx;
        item.config = itemConfig;
        item.onClick = () => this.handleItemClick(item);
        return item;
    }
    addItem(itemConfig) {
        var _a;
        let index = Math.min((_a = itemConfig.priority, (_a !== null && _a !== void 0 ? _a : this.items.length)), this.items.length);
        let item = this.createItem(itemConfig, index);
        this.items.splice(index, 0, item);
    }
    removeItem(itemConfig) {
        let itemIndex = this.items.findIndex(it => it.config === itemConfig);
        if (itemIndex !== -1) {
            if (this.activeItem === this.items[itemIndex]) {
                this.activeItem = void 0;
            }
            this.items.splice(itemIndex, 1);
        }
    }
    updateItem(oldConfig, newConfig) {
        let item = this.items.find(it => it.config === oldConfig);
        if (item) {
            if (item.config.content !== newConfig.content && this.activeItem === item) {
                this.onItemExpanded(item);
            }
            item.config = newConfig;
        }
    }
    onItemExpanded(item) {
        var _a, _b;
        return __awaiter(this, void 0, void 0, function* () {
            if (typeof item.config.content === "function") {
                try {
                    item.resetContent();
                    item.updateContent(yield item.config.content(), AccordionItemContentStatus.Loaded);
                }
                catch (e) {
                    (_b = (_a = this).onError) === null || _b === void 0 ? void 0 : _b.call(_a, e, item);
                    item.updateContent(void 0, AccordionItemContentStatus.Error);
                }
            }
            else {
                item.resetContent();
                item.updateContent(item.config.children, AccordionItemContentStatus.Loaded);
            }
        });
    }
}
__decorate([
    observable.shallow
], AccordionState.prototype, "items", void 0);
__decorate([
    observable.ref
], AccordionState.prototype, "activeItem", void 0);
__decorate([
    action
], AccordionState.prototype, "removeItem", null);
__decorate([
    action
], AccordionState.prototype, "updateItem", null);
//# sourceMappingURL=AccordionState.js.map