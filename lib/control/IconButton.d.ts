import * as React from "react";
import { ITheme } from "../theme/ITheme";
interface IIconProps {
    size?: number;
    color?: string;
}
interface IColorThunk {
    (theme: ITheme): string | undefined;
}
export interface IIconButtonProps {
    Icon: React.ComponentClass<IIconProps> | React.StatelessComponent<IIconProps>;
    color?: string | IColorThunk;
    iconSize?: number;
    className?: string;
    theme: ITheme;
    onClick?(): void;
}
export declare const IconButton: React.ComponentClass<Pick<IIconButtonProps, "className" | "Icon" | "color" | "onClick" | "iconSize"> & {
    theme?: ITheme | undefined;
}, any>;
export {};
//# sourceMappingURL=IconButton.d.ts.map