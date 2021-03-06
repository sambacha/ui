import * as React from "react";
export interface IToolbarItemProps {
    title?: string;
    className?: string;
    backgroundColor?: string;
    children: React.ReactElement<{}>;
}
export declare class ToolbarItem extends React.Component<IToolbarItemProps> {
    private rootEl;
    render(): JSX.Element;
}
//# sourceMappingURL=ToolbarItem.d.ts.map