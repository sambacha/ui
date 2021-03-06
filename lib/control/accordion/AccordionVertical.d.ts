import * as React from "react";
import { IAccordionItemConfig } from "./IAccordionItemConfig";
import { AccordionItemState } from "./AccordionItemState";
import { AccordionItemContentStatus } from "./AccordionItemContentStatus";
export interface IAccordionVerticalProps<TItemConfig extends IAccordionItemConfig> {
    label: string;
    noDataContent: React.ReactElement<{}>;
    loadingText: string;
    errorText: string;
    contentAnimSeconds?: number;
    children?: React.ReactNode;
    onContentError(e: any, item: AccordionItemState<TItemConfig>): void;
    renderExpander(args: {
        config: TItemConfig;
        isOpen: boolean;
        isFullWidth: boolean;
        onClick(): void;
        onResize(): void;
    }): React.ReactElement<{}>;
    renderHeader?(args: {
        config: TItemConfig;
        isOpen: boolean;
    }): React.ReactNode;
    renderContent?(args: {
        content?: React.ReactElement<{}>;
        status: AccordionItemContentStatus;
        arrowPosition?: number;
        config: TItemConfig;
    }): React.ReactElement<{}>;
}
export declare class AccordionVertical<TItemConfig extends IAccordionItemConfig> extends React.Component<IAccordionVerticalProps<TItemConfig>> {
    static defaultProps: Pick<IAccordionVerticalProps<any>, "contentAnimSeconds">;
    private expanderEls;
    private fixedExpanderWidth;
    private containerOffsetLeft;
    private widthWatchDisposer;
    private refreshDisposer;
    constructor(props: IAccordionVerticalProps<TItemConfig>);
    componentDidMount(): void;
    private setupWidthWatch;
    private destroyWidthWatch;
    componentWillUnmount(): void;
    private computeWidth;
    render(): JSX.Element;
    private renderItems;
    private handleContainerRef;
    private getContentArrowPosition;
    private onExpanderResize;
}
//# sourceMappingURL=AccordionVertical.d.ts.map