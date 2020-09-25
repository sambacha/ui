/// <reference types="react" />
import { IGridFieldRenderer } from "../../control/grid/state/IGridFieldRenderer";
export declare class OptionalDataRenderer<T, U extends T> implements IGridFieldRenderer<T> {
    private dataRenderer;
    private dataChecker;
    constructor(dataRenderer: IGridFieldRenderer<U>, dataChecker: (f: T) => boolean);
    render(f: T): string | number | JSX.Element;
}
//# sourceMappingURL=OptionalDataRenderer.d.ts.map