import * as React from "react";
export interface IEventProxyProps<T> {
    children: Element | React.ReactElement<{}>;
    onMount(el: T): void;
    onUnmount?(el: T): void;
}
export declare class DomNodeProxy<T extends Element = HTMLElement> extends React.Component<IEventProxyProps<T>> {
    private innerRef;
    render(): React.FunctionComponentElement<{
        ref: (r: T) => void;
    }>;
    componentDidMount(): void;
    componentWillUnmount(): void;
}
//# sourceMappingURL=DomNodeProxy.d.ts.map