import * as React from "react";
interface ILayoutResponsiveOptions {
    ignoreFirstLabel?: "forMobile" | "forLowRes";
}
export interface ILayoutRowProps {
    minWidth?: number;
    responsive?: ILayoutResponsiveOptions;
}
export declare class LayoutRow extends React.Component<ILayoutRowProps> {
    private smallScreen;
    private isFirstLabelIgnored;
    private isLayoutRowItemInstance;
    render(): JSX.Element | (JSX.Element | null | undefined)[];
    private onResize;
}
export {};
//# sourceMappingURL=LayoutRow.d.ts.map