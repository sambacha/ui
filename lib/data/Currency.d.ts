import * as React from "react";
import { BigNumber } from "../util/BigNumber";
export interface ICurrencyProps {
    value: number | BigNumber;
    locale: string;
    symbol?: string;
}
export declare class Currency extends React.Component<ICurrencyProps> {
    render(): JSX.Element;
}
//# sourceMappingURL=Currency.d.ts.map