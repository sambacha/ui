import * as React from "react";
import { IValueBoxProps } from "../../layout/content/box/ValueBox";
import { BigNumber } from "../../util/BigNumber";
export interface IGweiValueBoxProps {
    wei: BigNumber;
    variant?: IValueBoxProps["variant"];
    locale: string;
    colors?: IValueBoxProps["colors"];
}
export declare class GweiValueBox extends React.Component<IGweiValueBoxProps> {
    render(): JSX.Element;
    private formatGwei;
}
//# sourceMappingURL=GweiValueBox.d.ts.map