import * as React from "react";
export interface IScrollIntoViewProps {
    children: React.ReactElement<{}> | undefined;
    delay?: number;
}
export declare class ScrollIntoView extends React.Component<IScrollIntoViewProps> {
    private ref;
    private scrollTimeoutId;
    componentDidMount(): void;
    componentWillUnmount(): void;
    render(): JSX.Element | null;
}
//# sourceMappingURL=ScrollIntoView.d.ts.map