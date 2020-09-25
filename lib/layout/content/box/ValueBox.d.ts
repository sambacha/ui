import * as React from "react";
import { ITheme } from "../../../theme/ITheme";
import { IBoxProps } from "./Box";
export interface IValueBoxProps {
    variant?: keyof ITheme["spacing"]["valueBoxMetrics"];
    colors?: keyof ITheme["colors"]["valueBox"] | IBoxProps["colors"];
    Icon?: IBoxProps["Icon"];
    iconPlacement?: "left" | "right";
    fullWidth?: boolean;
    theme: ITheme;
    className?: string;
    borderStyle?: React.CSSProperties["borderStyle"];
}
export declare const ValueBox: React.ComponentClass<Pick<IValueBoxProps, "borderStyle" | "className" | "Icon" | "iconPlacement" | "fullWidth" | "colors" | "variant"> & {
    theme?: ITheme | undefined;
}, any>;
//# sourceMappingURL=ValueBox.d.ts.map