import React from "react";
import { ISelectProps } from "../../control/Select";
export interface ISelectFieldProps extends Omit<ISelectProps, "value" | "onSelect"> {
    name: string;
    validate?(value: string): string | Promise<string | void> | undefined;
}
export declare class SelectField extends React.Component<ISelectFieldProps> {
    render(): JSX.Element;
}
//# sourceMappingURL=SelectField.d.ts.map