import * as React from "react";
interface IBubbleProps {
    size: number;
    wrapperSize: number;
    highlightThreshold?: number;
    highlightColor?: string;
    backgroundColor?: string;
    highlightBorderColor?: string;
    borderColor?: string;
}
export declare class Bubble extends React.Component<IBubbleProps, {
    hover: boolean;
}> {
    constructor(props: IBubbleProps);
    render(): JSX.Element;
    private handleMouseEnter;
    private handleMouseLeave;
}
export {};
//# sourceMappingURL=Bubble.d.ts.map