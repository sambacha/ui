import * as React from "react";
export interface IStackBarProps {
    items: IStackBarItem[];
    className?: string;
    defaultBarHeight?: number;
    maxBarHeight?: number;
    minBarHeight?: number;
}
export interface IStackBarItem {
    color: string;
    count: number;
    label: string;
    tooltip: React.ReactElement<{}>;
}
export declare const StackBar: import("styled-components").StyledComponentClass<IStackBarProps, import("../../../theme/ITheme").ITheme, Pick<IStackBarProps, "className" | "items" | "defaultBarHeight" | "maxBarHeight" | "minBarHeight"> & {
    theme?: import("../../../theme/ITheme").ITheme | undefined;
}>;
//# sourceMappingURL=StackBar.d.ts.map