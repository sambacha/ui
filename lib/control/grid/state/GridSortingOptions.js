import { __decorate } from "tslib";
import { observable } from "mobx";
import { GridSortingOrder } from "./GridSortingOrder";
export class GridSortingOptions {
    constructor(field) {
        this._sortField = undefined;
        this._sortOrder = GridSortingOrder.Default;
        this.orderCycle = [
            GridSortingOrder.Ascending,
            GridSortingOrder.Descending,
            GridSortingOrder.Default
        ];
        if (field) {
            this.field = field;
            this.order = field.defaultSortOrder ? field.defaultSortOrder : GridSortingOrder.Ascending;
        }
    }
    get field() {
        return this._sortField;
    }
    set field(k) {
        this._sortField = k;
    }
    get order() {
        return this._sortOrder;
    }
    set order(o) {
        this._sortOrder = o;
    }
    resetField() {
        this._sortField = undefined;
    }
    setAscendingOrder() {
        this._sortOrder = GridSortingOrder.Ascending;
    }
    setDescendingOrder() {
        this._sortOrder = GridSortingOrder.Descending;
    }
    setNextOrder() {
        const idx = this.orderCycle.indexOf(this._sortOrder);
        this._sortOrder = this.orderCycle[(idx + 1) % this.orderCycle.length];
    }
}
__decorate([
    observable
], GridSortingOptions.prototype, "_sortField", void 0);
__decorate([
    observable
], GridSortingOptions.prototype, "_sortOrder", void 0);
//# sourceMappingURL=GridSortingOptions.js.map