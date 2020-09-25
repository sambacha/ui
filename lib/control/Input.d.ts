import React from "react";
import { ISvgIconProps } from "../util/react/SvgIcon";
export interface IInputProps extends React.InputHTMLAttributes<HTMLInputElement> {
    LeftIcon?: React.ComponentType<ISvgIconProps>;
    RightIcon?: React.ComponentType<ISvgIconProps>;
    alignRight?: boolean;
    innerRef?(instance: HTMLInputElement): void;
}
export declare class Input extends React.Component<IInputProps> {
    render(): JSX.Element;
}
//# sourceMappingURL=Input.d.ts.map