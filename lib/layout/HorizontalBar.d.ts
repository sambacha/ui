import * as React from "react";
import { IBarProps } from "./Bar";
interface IHorizontalBarProps extends IBarProps {
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