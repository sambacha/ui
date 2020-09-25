import React from "react";
export interface ICustomFieldInnerProps<T> {
    name: string;
    value: T;
    onChange(value: T): void;
    onBlur(): void;
}
export interface ICustomFieldProps<T> {
    name: string;
    validate?(value: T): string | Promise<string | void> | undefined;
    children(innerProps: ICustomFieldInnerProps<T>): React.ReactElement<{}>;
}
export declare class CustomField<T = string> extends React.Component<ICustomFieldProps<T>> {
    render(): JSX.Element;
}
//# sourceMappingURL=CustomField.d.ts.map