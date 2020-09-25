import * as React from "react";
import { IAccordionItemConfig } from "./IAccordionItemConfig";
export declare class AccordionItem<TAccordionItemConfig> extends React.Component<TAccordionItemConfig & IAccordionItemConfig> {
    static contextTypes: {
        accordionState: React.Requireable<any>;
    };
    private itemConfig;
    componentDidMount(): void;
    componentDidUpdate(): void;
    componentWillUnmount(): void;
    render(): null;
}
//# sourceMappingURL=AccordionItem.d.ts.map