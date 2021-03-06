import * as React from "react";
export interface ILayoutRowItemProps {
    isBeginningOfRow?: boolean;
    ignoreFirstLabel?: boolean;
    fullRow?: boolean;
    baseHeight?: number;
    autoHeight?: boolean;
    autoWidth?: boolean;
    justifyContent?: string;
}
export declare class LayoutRowItem extends React.PureComponent<ILayoutRowItemProps> {
    static _brand: string;
    render(): JSX.Element;
    private childrenArrayRender;
}
//# sourceMappingURL=LayoutRowItem.d.ts.map