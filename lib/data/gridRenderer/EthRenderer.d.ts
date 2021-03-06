/// <reference types="react" />
import { IGridFieldRenderer } from "../../control/grid/state/IGridFieldRenderer";
import { BigNumber } from "../../util/BigNumber";
export declare class EthRenderer<T> implements IGridFieldRenderer<T> {
    private locale;
    private gridFieldDataGetter;
    private options;
    constructor(locale: string, gridFieldDataGetter: (f: T) => BigNumber, options?: {
        decimals?: number;
    });
    render(f: T): JSX.Element;
}
//# sourceMappingURL=EthRenderer.d.ts.map