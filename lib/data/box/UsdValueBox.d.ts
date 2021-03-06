import * as React from "react";
import { IValueBoxProps } from "../../layout/content/box/ValueBox";
export interface IUsdValueBoxProps {
    value: number;
    variant?: IValueBoxProps["variant"];
    locale: string | undefined;
    colors?: IValueBoxProps["colors"];
}
export declare class UsdValueBox extends React.Component<IUsdValueBoxProps> {
    render(): JSX.Element;
}
//# sourceMappingURL=UsdValueBox.d.ts.map