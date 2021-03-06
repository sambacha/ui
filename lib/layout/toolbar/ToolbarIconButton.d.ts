import * as React from "react";
import { IIconButtonProps } from "../../control/IconButton";
export interface IToolbarIconButtonProps {
    Icon: IIconButtonProps["Icon"];
    iconSize?: number;
    active?: boolean;
    onClick?(): void;
}
export declare class ToolbarIconButton extends React.Component<IToolbarIconButtonProps> {
    render(): JSX.Element;
}
//# sourceMappingURL=ToolbarIconButton.d.ts.map