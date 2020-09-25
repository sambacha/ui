import * as React from "react";
import { IBoxProps } from "../../layout/content/box/Box";
export interface IMenuItemProps {
    disabled?: boolean;
    selected?: boolean;
    Icon?: IBoxProps["Icon"];
    onClick?(): void;
}
export declare class MenuItem extends React.Component<IMenuItemProps> {
    render(): JSX.Element;
    private handleClick;
}
//# sourceMappingURL=MenuItem.d.ts.map