import * as React from "react";
import { BigNumber } from "../../util/BigNumber";
export interface ICurrencyBoxProps {
    value: number | BigNumber;
    symbol?: string;
    locale: string;
}
export declare class CurrencyBox extends React.Component<ICurrencyBoxProps> {
    render(): JSX.Element;
}
//# sourceMappingURL=CurrencyBox.d.ts.map