import React from "react";
import { IExpanderBaseProps } from "./ExpanderBase";
interface IExpanderWithValueProps extends IExpanderBaseSelectProps {
    value?: number;
    locale: string;
}
interface IExpanderWithoutValueProps extends IExpanderBaseSelectProps {
    value?: never;
}
declare type IExpanderBaseSelectProps = Omit<IExpanderBaseProps, "colors" | "iconColor">;
declare type IExpanderSelectProps = IExpanderWithoutValueProps | IExpanderWithValueProps;
export declare class ExpanderSelect extends React.Component<IExpanderSelectProps> {
    render(): JSX.Element;
}
export {};
//# sourceMappingURL=ExpanderSelect.d.ts.map