/// <reference types="react" />
import { IAccordionItemConfig } from "./IAccordionItemConfig";
import { AccordionItemContentStatus } from "./AccordionItemContentStatus";
export declare class AccordionItemState<TConfig extends IAccordionItemConfig> {
    index: number;
    config: TConfig;
    onClick: () => void;
    private _content;
    private _contentStatus;
    updateContent(content: this["content"], contentStatus: this["contentStatus"]): void;
    resetContent(): void;
    get content(): import("react").ReactNode;
    get contentStatus(): AccordionItemContentStatus;
}
//# sourceMappingURL=AccordionItemState.d.ts.map