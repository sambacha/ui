import * as React from "react";
import { IClipboard } from "../IClipboard";
interface IHexDataProps {
    data: string;
    dataLimit?: number;
    clipboard?: IClipboard;
}
export declare class HexData extends React.Component<IHexDataProps> {
    static defaultProps: Pick<IHexDataProps, "dataLimit">;
    render(): JSX.Element;
}
export {};
//# sourceMappingURL=HexData.d.ts.map