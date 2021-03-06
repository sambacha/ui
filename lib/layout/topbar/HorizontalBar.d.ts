import * as React from "react";
interface IHorizontalBarProps {
    height: number;
    sticky?: boolean;
    zIndex?: number;
    contentRef?(instance: HTMLDivElement): void;
}
export declare class HorizontalBar extends React.Component<IHorizontalBarProps> {
    render(): JSX.Element;
}
export {};
//# sourceMappingURL=HorizontalBar.d.ts.map