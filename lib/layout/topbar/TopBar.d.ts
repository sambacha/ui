import * as React from "react";
import { ITheme } from "../../theme/ITheme";
interface ITopbarProps {
    zIndex?: number;
    theme: ITheme;
}
export declare class $TopBar extends React.Component<ITopbarProps> {
    render(): JSX.Element;
}
export declare const TopBar: React.ComponentClass<Pick<ITopbarProps, "zIndex"> & {
    theme?: ITheme | undefined;
}, any>;
export {};
//# sourceMappingURL=TopBar.d.ts.map