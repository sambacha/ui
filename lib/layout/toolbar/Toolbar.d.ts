import * as React from "react";
import { ITheme } from "../../theme/ITheme";
export declare const TOOLBAR_WIDTH = 72;
interface IToolbarProps {
    zIndex?: number;
    theme: ITheme;
}
export declare class $Toolbar extends React.Component<IToolbarProps> {
    render(): JSX.Element;
}
export declare const Toolbar: React.ComponentClass<Pick<IToolbarProps, "zIndex"> & {
    theme?: ITheme | undefined;
}, any>;
export {};
//# sourceMappingURL=Toolbar.d.ts.map