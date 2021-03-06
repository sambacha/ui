/// <reference types="react" />
import { IGridFieldRenderer } from "../../control/grid/state/IGridFieldRenderer";
export declare class HashRenderer<T> implements IGridFieldRenderer<T> {
    private gridFieldDataGetter;
    constructor(gridFieldDataGetter: (f: T) => string);
    render(f: T): JSX.Element;
}
//# sourceMappingURL=HashRenderer.d.ts.map