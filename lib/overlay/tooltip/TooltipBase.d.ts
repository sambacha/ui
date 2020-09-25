import * as React from "react";
import { IPopoverProps } from "../Popover";
export interface ITooltipProps extends Omit<IPopoverProps, "visible"> {
    showDelay?: number;
    hideDelay?: number;
    nonInteractive?: boolean;
    backgroundColor?: string;
    borderColor?: string;
}
export declare class TooltipBase extends React.Component<ITooltipProps> {
    static defaultProps: Pick<ITooltipProps, "showDelay" | "hideDelay" | "backgroundColor">;
    private visible;
    private multiHover;
    constructor(props: ITooltipProps);
    componentDidUpdate(prevProps: ITooltipProps): void;
    render(): JSX.Element;
    private handleMouseEnter;
    private handleMouseLeave;
}
//# sourceMappingURL=TooltipBase.d.ts.map