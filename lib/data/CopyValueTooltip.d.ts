import * as React from "react";
import { IClipboard } from "./IClipboard";
export interface ICopyValueTooltipProps {
    value: string;
    clipboard?: IClipboard;
    children: React.ReactElement<{}>;
}
export declare class CopyValueTooltip extends React.Component<ICopyValueTooltipProps> {
    render(): JSX.Element;
}
//# sourceMappingURL=CopyValueTooltip.d.ts.map