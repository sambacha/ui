import { GridSortingOrder } from "./GridSortingOrder";
import { IGridFieldBase } from "./IGridFieldBase";
import { IGridSortingOptions } from "./IGridSortingOptions";
export declare class GridSortingOptions implements IGridSortingOptions {
    private _sortField;
    private _sortOrder;
    private orderCycle;
    constructor(field?: IGridFieldBase | undefined);
    get field(): IGridFieldBase | undefined;
    set field(k: IGridFieldBase | undefined);
    get order(): GridSortingOrder;
    set order(o: GridSortingOrder);
    resetField(): void;
    setAscendingOrder(): void;
    setDescendingOrder(): void;
    setNextOrder(): void;
}
//# sourceMappingURL=GridSortingOptions.d.ts.map