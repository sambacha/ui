import * as React from "react";
import { IPopoverProps } from "../../overlay/Popover";
export interface IDropdownProps<TItem> {
    popoverProps?: Partial<Omit<IPopoverProps, "visible" | "content">>;
    closeOnSelect?: boolean;
    children: ((params: {
        isOpen: boolean;
        requestToggle(): void;
    }) => React.ReactElement<{}>) | React.ReactElement<{}>;
    renderMenu(onSelectItem: (item: TItem) => void): React.ReactElement<{}>;
    onSelect?(item: TItem): void;
}
export declare class Dropdown<TItem> extends React.Component<IDropdownProps<TItem>> {
    static defaultProps: Pick<IDropdownProps<any>, "closeOnSelect">;
    private layerOpen;
    private layerMounted;
    private layerEl;
    private targetEl;
    constructor(props: IDropdownProps<TItem>);
    render(): JSX.Element;
    private renderPopover;
    private handleAnimationFinished;
    private handleSelectItem;
    private handleLayerToggle;
    private handleDocumentClick;
    private toggleLayer;
    componentWillUnmount(): void;
}
//# sourceMappingURL=Dropdown.d.ts.map