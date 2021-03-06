import * as React from "react";
interface IHoverStateProps {
    children(hover: boolean): React.ReactElement<{}>;
}
export declare class HoverState extends React.Component<IHoverStateProps> {
    private isHovered;
    render(): JSX.Element;
    private handleMount;
    private handleUnmount;
    private onMouseEnter;
    private onMouseLeave;
}
export {};
//# sourceMappingURL=HoverState.d.ts.map