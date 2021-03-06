import * as React from "react";
export interface IClickThresholdProps {
    threshold?: number;
    onClick(): void;
}
export declare class ClickThreshold extends React.Component<IClickThresholdProps> {
    static defaultProps: Pick<IClickThresholdProps, "threshold">;
    private mouseDownCoords;
    private get threshold();
    render(): JSX.Element;
    private onMouseDown;
    private onMouseUp;
}
//# sourceMappingURL=ClickThreshold.d.ts.map