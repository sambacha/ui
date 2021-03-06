import * as React from "react";
import * as PropTypes from "prop-types";
declare type ChildrenFn = (requestClose: () => void) => React.ReactNode;
interface IMobileMenuItemProps {
    title: string;
    children: React.ReactNode | ChildrenFn;
    sticky?: boolean;
}
export declare class MobileMenuItem extends React.Component<IMobileMenuItemProps> {
    static contextTypes: {
        requestClose: PropTypes.Requireable<any>;
    };
    render(): JSX.Element;
}
export {};
//# sourceMappingURL=MobileMenuItem.d.ts.map