import * as React from "react";
interface ITypedValueBox {
    value?: string;
    type?: string;
    withinForm?: boolean;
}
export declare class TypedValueBox extends React.Component<ITypedValueBox> {
    static defaultProps: {
        withinForm: boolean;
    };
    render(): JSX.Element;
}
export {};
//# sourceMappingURL=TypedValueBox.d.ts.map