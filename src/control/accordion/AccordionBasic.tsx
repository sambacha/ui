import * as React from "react";
import { observer, PropTypes } from "mobx-react";
import { AccordionState } from "./internal/AccordionState";
import { reaction, IReactionDisposer } from "mobx";

export interface IAccordionBasicProps<TItemConfig> {
    /** Open first item initially? */
    initialOpen?: boolean;
    children?: React.ReactNode;
    renderItems(args: {
        config: TItemConfig;
        content?: React.ReactNode;
        isOpen: boolean;
        onClick(): void;
    }[], activeContent?: React.ReactNode): React.ReactElement<{}>;
}

/**
 * Basic accordion with customizable rendering
 *
 * For each accordion item, a corresponding <AccordionItem /> instance should be passed as a child
 * to the accordion instance (or it can be rendered asynchronously in a nested component).
 * Passing arbitrary props to each item is possible and is reflected in the TItemConfig generic type parameter.
 *
 * NB: Items can be added dynamically and asynchronously, but they will render in the order in which they were added.
 * E.g. dynamically inserting an item in children at a given index will still append the item after all existing items.
 * If you want to specify the index at which to render the item, pass a `priority` prop to the AccordionItem element.
 *
 * Example:
 * ```ts
 * interface IItemData {
 *     foo: string;
 * }
 * <AccordionBasic<IItemData> renderItems={(items, activeContent) => <div>...</div>}>
 *     <AccordionItem<IItemData> foo="bar">
 *         Item content
 *     </AccordionItem>
 * </AccordionBasic>
 * ```
 */
@observer
export class AccordionBasic<TItemConfig>
extends React.Component<IAccordionBasicProps<TItemConfig>> {
    // We use legacy context because the accordion and the children
    // may be instantiated from different apps library instances and the createContext API won't work in this case
    /** @internal */
    static childContextTypes = {
        // Just so we don't have to import react prop-types. We don't care about the shape anyway
        accordionState: PropTypes.objectOrObservableObject
    };
    /** @internal */
    private accordionState: AccordionState<TItemConfig>;

    private initialOpenDisposer: IReactionDisposer | undefined;

    constructor(props: IAccordionBasicProps<TItemConfig>) {
        super(props);

        this.accordionState = new AccordionState<TItemConfig>();

        if (props.initialOpen) {
            this.initialOpenDisposer = reaction(() => this.accordionState.getItems().length, (length, r) => {
                if (length) {
                    this.accordionState.getItems()[0].onClick();
                    r.dispose();
                }
            }, { fireImmediately: true });
        }
    }

    componentWillUnmount() {
        this.initialOpenDisposer?.();
    }

    /** @internal */
    getChildContext() {
        return { accordionState: this.accordionState };
    }

    render() {
        let items = this.accordionState.getItems();
        let activeItem = this.accordionState.getActiveItem();

        return <>
            { /* Just make sure there wasn't something extra besides <AccordionItem>-s, which return null */ }
            <div style={{ position: "fixed", top: -10000, left: -10000 }}>
                { /* Children aren't actually visible, we just use this method as hook to add items dynamically */ }
                { this.props.children }
            </div>
            { this.props.renderItems(items.map(item => ({
                config: item.config,
                isOpen: item === activeItem,
                onClick: item.onClick,
                content: item.content
            })), activeItem?.content) }
        </>;
    }
}
