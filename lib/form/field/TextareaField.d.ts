import { GenericFieldHTMLAttributes } from "formik";
import React from "react";
export interface ITextareaFieldProps {
    id?: string;
    name: string;
    validate?(value: string): string | Promise<string | void> | undefined;
    innerRef?(instance: HTMLTextAreaElement): void;
}
export declare class TextareaField extends React.Component<ITextareaFieldProps & GenericFieldHTMLAttributes & React.HTMLAttributes<HTMLTextAreaElement>> {
    render(): JSX.Element;
}
//# sourceMappingURL=TextareaField.d.ts.map