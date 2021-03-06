import * as React from "react";
import { BigNumber } from "../util/BigNumber";
export interface IEthValueProps {
    wei: BigNumber;
    decimals?: number;
    locale: string;
    showSymbol?: boolean;
    symbol?: string;
}
export declare class EthValue extends React.Component<IEthValueProps> {
    static defaultProps: Pick<IEthValueProps, "decimals" | "symbol">;
    render(): string;
}
//# sourceMappingURL=EthValue.d.ts.map