import * as React from "react";
export interface IAccordionBasicProps<TItemConfig> {
    initialOpen?: boolean;
    children?: React.ReactNode;
    renderItems(args: {
        config: TItemConfig;
        content?: React.ReactNode;
        isOpen: boolean;
        onClick(): void;
    }[], activeContent?: React.ReactNode): React.ReactElement<{}>;
}
export declare class AccordionBasic<TItemConfig> extends React.Component<IAccordionBasicProps<TItemConfig>> {
    private initialOpenDisposer;
    constructor(props: IAccordionBasicProps<TItemConfig>);
    componentWillUnmount(): void;
    render(): JSX.Element;
}
//# sourceMappingURL=AccordionBasic.d.ts.map