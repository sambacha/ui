import * as React from "react";
export interface IGaugeProps {
    value: number;
    min?: number;
    max?: number;
    width: number;
    height: number;
    backgroundColor?: string;
    color?: string;
    lineColor?: string;
}
export declare class Gauge extends React.Component<IGaugeProps> {
    static defaultProps: {
        min: number;
        max: number;
        color: string;
        backgroundColor: string;
        lineColor: string;
    };
    private get min();
    private get max();
    private getPathValues;
    private getPath;
    private getLinePath;
    render(): JSX.Element;
}
//# sourceMappingURL=Gauge.d.ts.map