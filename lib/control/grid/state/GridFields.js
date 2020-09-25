import { __decorate } from "tslib";
import { observable, computed, action } from "mobx";
export class GridFields {
    get gridFields() {
        return this.fields;
    }
    get selectedGridFields() {
        return this.fields.filter(f => f.selected);
    }
    setColumnSelect(key, select) {
        const field = this.fields.find((f) => {
            return key === f.fieldKey;
        });
        if (field) {
            field.selected = select;
        }
    }
    get defaultSortedField() {
        return void 0;
    }
}
__decorate([
    observable
], GridFields.prototype, "fields", void 0);
__decorate([
    computed
], GridFields.prototype, "gridFields", null);
__decorate([
    computed
], GridFields.prototype, "selectedGridFields", null);
__decorate([
    action
], GridFields.prototype, "setColumnSelect", null);
//# sourceMappingURL=GridFields.js.map