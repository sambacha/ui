import { IGridFieldBase } from "./IGridFieldBase";
import { IGridFieldRendererObjectOrFn } from "./IGridFieldRenderer";
import { BigNumber } from "../../../util/BigNumber";
export interface IGridField<T> extends IGridFieldBase {
    renderer?: IGridFieldRendererObjectOrFn<T>;
    getFieldValue(t: T): string | number | BigNumber;
}
export declare class GridFields<TData> {
    protected fields: IGridField<TData>[];
    get gridFields(): IGridField<TData>[];
    get selectedGridFields(): IGridField<TData>[];
    setColumnSelect(key: string, select: boolean): void;
    get defaultSortedField(): IGridField<TData> | undefined;
}
//# sourceMappingURL=GridFields.d.ts.map