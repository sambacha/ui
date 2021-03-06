import { ILayoutRowItemProps } from "./LayoutRowItem";
interface ILayoutBoxItemProps extends ILayoutRowItemProps {
    className?: string;
}
export declare const LayoutBoxItem: import("styled-components").StyledComponentClass<ILayoutBoxItemProps, import("../../theme/ITheme").ITheme, Pick<ILayoutBoxItemProps, "className" | "isBeginningOfRow" | "ignoreFirstLabel" | "fullRow" | "baseHeight" | "autoHeight" | "autoWidth" | "justifyContent"> & {
    theme?: import("../../theme/ITheme").ITheme | undefined;
}>;
export {};
//# sourceMappingURL=LayoutBoxItem.d.ts.map