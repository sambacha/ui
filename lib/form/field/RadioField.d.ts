import React from "react";
export interface IRadioFieldProps {
    id?: string;
    name: string;
    value?: string;
    required?: boolean;
    disabled?: boolean;
    validate?(value: string): string | Promise<string | void> | undefined;
}
export declare class RadioField extends React.Component<IRadioFieldProps> {
    render(): JSX.Element;
}
//# sourceMappingURL=RadioField.d.ts.map