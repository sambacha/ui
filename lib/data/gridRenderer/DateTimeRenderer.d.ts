/// <reference types="react" />
import { IGridFieldRenderer } from "../../control/grid/state/IGridFieldRenderer";
export declare class DateTimeRenderer<T> implements IGridFieldRenderer<T> {
    private locale;
    private gridFieldDataGetter;
    constructor(locale: string, gridFieldDataGetter: (f: T) => number);
    render(f: T): JSX.Element;
}
//# sourceMappingURL=DateTimeRenderer.d.ts.map