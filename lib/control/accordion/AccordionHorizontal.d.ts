import * as React from "react";
import { IAccordionItemConfig } from "./IAccordionItemConfig";
import { AccordionItemState } from "./AccordionItemState";
import { AccordionItemContentStatus } from "./AccordionItemContentStatus";
import { IAccordionVerticalProps } from "./AccordionVertical";
export interface IAccordionHorizontalProps<TItemConfig extends IAccordionItemConfig> {
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
        onClick(): void;
    }): React.ReactElement<{}>;
    renderContent?(args: {
        content?: React.ReactElement<{}>;
        status: AccordionItemContentStatus;
        arrowPosition?: number;
        config: TItemConfig;
    }): React.ReactElement<{}>;
}
export declare class AccordionHorizontal<TItemConfig extends IAccordionItemConfig> extends React.Component<IAccordionHorizontalProps<TItemConfig>> {
    static defaultProps: Pick<IAccordionVerticalProps<any>, "contentAnimSeconds">;
    private expanderEls;
    private containerOffsetLeft;
    constructor(props: IAccordionHorizontalProps<TItemConfig>);
    render(): JSX.Element;
    private renderItems;
    private renderExpander;
    private handleContainerRef;
    private getContentArrowPosition;
}
//# sourceMappingURL=AccordionHorizontal.d.ts.map