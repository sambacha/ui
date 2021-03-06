import * as React from "react";
import { IValueBoxProps } from "../../layout/content/box/ValueBox";
import { BigNumber } from "../../util/BigNumber";
export interface IEthValueBoxProps {
    wei: BigNumber;
    decimals?: number;
    variant?: IValueBoxProps["variant"];
    symbol?: string;
    locale: string;
    colors?: IValueBoxProps["colors"];
}
export declare class EthValueBox extends React.Component<IEthValueBoxProps> {
    render(): JSX.Element;
}
//# sourceMappingURL=EthValueBox.d.ts.map