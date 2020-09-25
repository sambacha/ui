import * as React from "react";
import { IBoxColors } from "../../layout/content/box/IBoxColors";
import { ITheme } from "../../theme/ITheme";
export interface IExpanderColors extends IBoxColors {
    value: string;
    icon: string;
    iconBackground: string;
}
export interface IExpanderColorsThunk<TTheme> {
    (theme: TTheme): IExpanderColors;
}
export interface IExpanderWithValueProps extends IExpanderBaseProps {
    value?: number;
    locale: string;
}
export interface IExpanderWithoutValueProps extends IExpanderBaseProps {
    value?: never;
}
export interface IExpanderBaseProps {
    label: string;
    open: boolean;
    colors: IExpanderColorsThunk<ITheme>;
    fullWidth?: boolean;
    disabled?: boolean;
    onClick?(): void;
    onResize?(): void;
}
export declare type IExpanderProps = IExpanderWithoutValueProps | IExpanderWithValueProps;
export declare const ExpanderBase: React.ComponentClass<IExpanderProps, any>;
//# sourceMappingURL=ExpanderBase.d.ts.map