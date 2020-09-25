/// <reference types="react" />
import { ITheme } from "../../theme/ITheme";
export declare type MediaQueryThunk = string | ((theme: ITheme) => string);
export interface IResponsiveContainerProps {
    mediaQuery: MediaQueryThunk;
    behavior?: "show" | "hide";
}
export declare const ResponsiveContainer: import("styled-components").StyledComponentClass<IResponsiveContainerProps, ITheme, IResponsiveContainerProps & import("react").ClassAttributes<HTMLDivElement> & import("react").HTMLAttributes<HTMLDivElement>>;
//# sourceMappingURL=ResponsiveContainer.d.ts.map