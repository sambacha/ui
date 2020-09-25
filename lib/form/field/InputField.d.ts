import React from "react";
import { GenericFieldHTMLAttributes } from "formik";
import { ISvgIconProps } from "../../util/react/SvgIcon";
export interface IInputFieldProps {
    id?: string;
    name: string;
    type: string;
    alignRight?: boolean;
    LeftIcon?: React.ComponentType<ISvgIconProps>;
    hasValidationIcon?: boolean;
    validate?(value: string): string | Promise<string | void> | undefined;
    innerRef?(instance: HTMLInputElement): void;
}
export declare class InputField extends React.Component<IInputFieldProps & GenericFieldHTMLAttributes & React.HTMLAttributes<HTMLInputElement>> {
    static defaultProps: {
        hasValidationIcon: boolean;
    };
    render(): JSX.Element;
}
//# sourceMappingURL=InputField.d.ts.map