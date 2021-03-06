import * as React from "react";
import { IValueBoxProps } from "../../layout/content/box/ValueBox";
import { IClipboard } from "../IClipboard";
export interface IHashValueBoxProps {
    children: string;
    variant?: IValueBoxProps["variant"];
    colors?: IValueBoxProps["colors"];
    Icon?: IValueBoxProps["Icon"];
    noTooltip?: boolean;
    clipboard?: IClipboard;
}
export declare class HashValueBox extends React.Component<IHashValueBoxProps> {
    render(): JSX.Element;
}
//# sourceMappingURL=HashValueBox.d.ts.map