/// <reference types="react" />
import { IGridFieldRenderer } from "../../control/grid/state/IGridFieldRenderer";
import { BigNumber } from "../../util/BigNumber";
export declare class NumberRenderer<T> implements IGridFieldRenderer<T> {
    private locale;
    private gridFieldDataGetter;
    constructor(locale: string, gridFieldDataGetter: (f: T) => number | BigNumber);
    render(f: T): JSX.Element;
}
//# sourceMappingURL=NumberRenderer.d.ts.map