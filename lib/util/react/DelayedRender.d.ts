import * as React from "react";
export interface IDelayedRenderProps {
    delay: number;
}
export declare class DelayedRender extends React.Component<IDelayedRenderProps> {
    private visible;
    private renderTimer;
    componentDidMount(): void;
    componentWillUnmount(): void;
    render(): {} | null | undefined;
}
//# sourceMappingURL=DelayedRender.d.ts.map