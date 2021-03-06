import { __decorate } from "tslib";
import { observable, action } from "mobx";
import { AccordionItemContentStatus } from "./AccordionItemContentStatus";
export class AccordionItemState {
    constructor() {
        this._contentStatus = AccordionItemContentStatus.NotLoaded;
    }
    updateContent(content, contentStatus) {
        this._content = content;
        this._contentStatus = contentStatus;
    }
    resetContent() {
        this._content = void 0;
        this._contentStatus = AccordionItemContentStatus.NotLoaded;
    }
    get content() {
        return this._content;
    }
    get contentStatus() {
        return this._contentStatus;
    }
}
__decorate([
    observable.ref
], AccordionItemState.prototype, "config", void 0);
__decorate([
    observable.ref
], AccordionItemState.prototype, "_content", void 0);
__decorate([
    observable
], AccordionItemState.prototype, "_contentStatus", void 0);
__decorate([
    action
], AccordionItemState.prototype, "updateContent", null);
__decorate([
    action
], AccordionItemState.prototype, "resetContent", null);
//# sourceMappingURL=AccordionItemState.js.map