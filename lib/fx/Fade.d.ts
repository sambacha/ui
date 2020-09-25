import * as React from "react";
export interface IFadeProps {
    duration?: number;
    delay?: number;
    enabled?: boolean;
    in?: boolean;
    innerRef?(ref: HTMLDivElement): any;
    onFinished?(): void;
    onEnter?(): void;
}
export declare class Fade extends React.Component<IFadeProps> {
    static defaultProps: IFadeProps;
    private active;
    private delayTimer;
    componentDidMount(): void;
    componentDidUpdate(prevProps: IFadeProps): void;
    componentWillUnmount(): void;
    render(): JSX.Element;
}
//# sourceMappingURL=Fade.d.ts.map