import * as React from "react";
import { ITheme } from "../../../theme/ITheme";
import { IBoxColors } from "./IBoxColors";
import { IBoxColorsThunk } from "./IBoxColorsThunk";
import { IBoxMetrics } from "./IBoxMetrics";
export interface IBoxProps {
    className?: string;
    metrics: IBoxMetrics;
    colors: IBoxColors | IBoxColorsThunk<ITheme>;
    borderStyle?: React.CSSProperties["borderStyle"];
    Icon?: React.ComponentClass<IIconProps> | React.StatelessComponent<IIconProps>;
    iconPlacement?: "left" | "right";
    fullWidth?: boolean;
}
interface IIconProps {
    size?: number;
}
export declare const Box: import("styled-components").StyledComponentClass<IBoxProps, ITheme, Pick<IBoxProps, "borderStyle" | "className" | "Icon" | "iconPlacement" | "metrics" | "fullWidth" | "colors"> & {
    theme?: ITheme | undefined;
}>;
export {};
//# sourceMappingURL=Box.d.ts.map