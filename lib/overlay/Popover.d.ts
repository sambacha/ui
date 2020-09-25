import * as React from "react";
import { PopperArrowProps } from "react-popper";
import { ReferenceObject, Placement } from "popper.js";
export interface IPopoverProps {
    visible: boolean;
    content: React.ReactNode | ((placement: Placement, arrowProps: PopperArrowProps, scheduleUpdate: () => void) => React.ReactNode);
    noFlip?: boolean;
    placement?: Placement;
    offset?: number;
    alignmentOffset?: number;
    style?: React.CSSProperties;
    children: React.ReactElement<{}>;
    referenceElement?: (() => HTMLElement) | ReferenceObject;
}
export declare class Popover extends React.Component<IPopoverProps> {
    static defaultProps: Pick<IPopoverProps, "placement" | "offset">;
    render(): JSX.Element;
    private createReferenceObject;
}
//# sourceMappingURL=Popover.d.ts.map