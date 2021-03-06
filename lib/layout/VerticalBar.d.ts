import * as React from "react";
interface IVerticalBarProps {
    width: number;
    sticky?: boolean;
    zIndex?: number;
    mobileVisible?: boolean;
    contentRef?(instance: HTMLDivElement): void;
}
export declare class VerticalBar extends React.Component<IVerticalBarProps> {
    render(): JSX.Element;
}
export {};
//# sourceMappingURL=VerticalBar.d.ts.map