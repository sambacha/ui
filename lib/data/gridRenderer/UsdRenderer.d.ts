/// <reference types="react" />
import { IGridFieldRenderer } from "../../control/grid/state/IGridFieldRenderer";
export declare class UsdRenderer<T> implements IGridFieldRenderer<T> {
    private locale;
    private gridFieldDataGetter;
    constructor(locale: string, gridFieldDataGetter: (f: T) => number);
    render(f: T): JSX.Element;
}
//# sourceMappingURL=UsdRenderer.d.ts.map