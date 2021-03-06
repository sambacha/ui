import * as React from "react";
export interface IHeightProps {
    duration: number;
    children: React.ReactNode;
}
export declare class Height extends React.Component<IHeightProps> {
    private contentRef;
    private contentHeight;
    render(): JSX.Element;
    componentDidUpdate(prevProps: IHeightProps): void;
    private updateHeight;
    private handleRef;
}
//# sourceMappingURL=Height.d.ts.map