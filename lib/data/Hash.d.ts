import * as React from "react";
export interface IHashProps {
    children: string;
    useEllipsis?: boolean;
    ellipsisThreshold?: number;
    ellipsisChars?: number;
}
export declare class Hash extends React.PureComponent<IHashProps> {
    static defaultProps: Pick<IHashProps, "ellipsisThreshold" | "ellipsisChars" | "useEllipsis">;
    render(): JSX.Element;
    private handleCopy;
}
//# sourceMappingURL=Hash.d.ts.map