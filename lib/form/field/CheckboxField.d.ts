import React from "react";
export interface ICheckboxFieldProps {
    id?: string;
    name: string;
    value?: string;
    required?: boolean;
    disabled?: boolean;
    validate?(value: string | string[]): string | Promise<string | void> | undefined;
}
export declare class CheckboxField extends React.Component<ICheckboxFieldProps> {
    render(): JSX.Element;
}
//# sourceMappingURL=CheckboxField.d.ts.map