import React from "react";
import { IExpanderBaseProps } from "./ExpanderBase";
interface IExpanderWithValueProps extends IExpanderBaseAccordionProps {
    value?: number;
    locale: string;
}
interface IExpanderWithoutValueProps extends IExpanderBaseAccordionProps {
    value?: never;
}
declare type IExpanderBaseAccordionProps = Omit<IExpanderBaseProps, "colors" | "iconColor">;
declare type IExpanderAccordionProps = IExpanderWithoutValueProps | IExpanderWithValueProps;
export declare class ExpanderAccordion extends React.Component<IExpanderAccordionProps> {
    render(): JSX.Element;
}
export {};
//# sourceMappingURL=ExpanderAccordion.d.ts.map