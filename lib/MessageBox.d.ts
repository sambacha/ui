import * as React from "react";
import { ISvgIconProps } from "./util/react/SvgIcon";
export declare type IMessageBoxColors = "primary" | "secondary";
export interface IMessageBoxProps {
    Icon: React.ComponentType<ISvgIconProps>;
    colors?: IMessageBoxColors;
}
export declare class MessageBox extends React.Component<IMessageBoxProps> {
    static defaultProps: Pick<IMessageBoxProps, "colors">;
    render(): JSX.Element;
}
//# sourceMappingURL=MessageBox.d.ts.map