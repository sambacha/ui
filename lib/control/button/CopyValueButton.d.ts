import * as React from "react";
import { IClipboard } from "../../data/IClipboard";
export interface ICopyValueButtonProps {
    value: string;
    className?: string;
    clipboard?: IClipboard;
    confirmationVisibleFor?: number;
}
export declare class CopyValueButton extends React.Component<ICopyValueButtonProps> {
    static defaultProps: Pick<ICopyValueButtonProps, "confirmationVisibleFor">;
    private confirmationVisible;
    private confirmationHideId;
    render(): JSX.Element;
    componentDidUpdate(prevProps: ICopyValueButtonProps): void;
    componentWillUnmount(): void;
    private copyValue;
}
//# sourceMappingURL=CopyValueButton.d.ts.map