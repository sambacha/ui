import * as React from "react";
export interface IToggleInputProps {
    type: "checkbox" | "radio";
    id?: string;
    name?: string;
    value?: string | number;
    checked?: boolean;
    required?: boolean;
    disabled?: boolean;
    Icon(checked: boolean): React.ReactNode;
    onChange?(event: React.ChangeEvent<HTMLInputElement>, checked: boolean, name?: string, value?: string | number): void;
}
export declare class ToggleInput extends React.PureComponent<IToggleInputProps> {
    render(): JSX.Element;
    private onChange;
}
//# sourceMappingURL=ToggleInput.d.ts.map