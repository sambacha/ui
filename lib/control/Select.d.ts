import * as React from "react";
export interface ISelectProps {
    value?: string;
    placeholder?: string;
    fullWidth?: boolean;
    disabled?: boolean;
    menuZIndex?: number;
    children?: React.ReactNode;
    onSelect?(x: string): void;
}
export declare class Select extends React.Component<ISelectProps> {
    static defaultProps: Pick<ISelectProps, "placeholder" | "menuZIndex">;
    private expanderEl;
    private selected;
    constructor(props: ISelectProps);
    componentDidUpdate(prevProps: ISelectProps): void;
    private updateSelectValue;
    getOptionLabel: (value: string) => string;
    render(): JSX.Element;
}
//# sourceMappingURL=Select.d.ts.map