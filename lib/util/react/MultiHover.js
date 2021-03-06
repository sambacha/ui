import { EventDispatcher } from "@puzzl/core/lib/event/EventDispatcher";
const defaultOpts = {
    enterDelay: 400,
    leaveDelay: 400
};
export class MultiHover {
    constructor(opts = {}) {
        this.hoveredElements = 0;
        this._onActiveChange = new EventDispatcher();
        this.options = Object.assign(Object.assign({}, defaultOpts), opts);
    }
    get onActiveChange() {
        return this._onActiveChange.asEvent();
    }
    applyOpts(opts) {
        this.options = Object.assign(Object.assign({}, this.options), opts);
    }
    enter(item) {
        this.hoveredElements++;
        if (this.hideTimeoutId) {
            clearTimeout(this.hideTimeoutId);
            this.hideTimeoutId = (void 0);
        }
        this.showTimeoutId = setTimeout(() => this._onActiveChange.dispatch(this, item), this.options.enterDelay);
    }
    leave() {
        this.hoveredElements--;
        if (this.hoveredElements > 0) {
            return;
        }
        if (this.showTimeoutId) {
            clearTimeout(this.showTimeoutId);
            this.showTimeoutId = (void 0);
        }
        if (this.hideTimeoutId) {
            clearTimeout(this.hideTimeoutId);
        }
        this.hideTimeoutId = setTimeout(() => this._onActiveChange.dispatch(this, void 0), this.options.leaveDelay);
    }
}
//# sourceMappingURL=MultiHover.js.map