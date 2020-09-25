import * as React from "react";
export interface ISpinnerProps {
    size?: number;
    color?: string;
    borderColor?: string;
    backgroundColor?: string;
    className?: string;
}
export declare class Spinner extends React.Component<ISpinnerProps> {
    static defaultProps: {
        size: number;
        color: string;
        borderColor: string;
        backgroundColor: string;
    };
    render(): JSX.Element;
}
//# sourceMappingURL=Spinner.d.ts.map