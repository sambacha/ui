import * as React from "react";
import { IBoxProps } from "../layout/content/box/Box";
export declare type ButtonColors = "primary" | "primaryInverted" | "secondary" | "secondaryInverted" | "special";
declare type Elevation = "none" | "high" | "low";
declare type IHtmlButtonProps = Pick<React.ButtonHTMLAttributes<HTMLButtonElement>, "autoFocus" | "name" | "type" | "value">;
export interface IButtonProps extends IHtmlButtonProps {
    Icon?: IBoxProps["Icon"];
    iconPlacement?: IBoxProps["iconPlacement"];
    colors?: ButtonColors;
    elevation?: Elevation;
    rounded?: boolean;
    children?: string;
    disabled?: boolean;
    onClick?(): void;
}
export declare class Button extends React.Component<IButtonProps> {
    static defaultProps: Pick<IButtonProps, "colors" | "elevation">;
    render(): JSX.Element;
}
export {};
//# sourceMappingURL=Button.d.ts.map