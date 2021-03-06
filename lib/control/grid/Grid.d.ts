import * as React from "react";
import { IGridSortingOptions } from "./state/IGridSortingOptions";
import { IGridHeaderExtraElements } from "./internal/header/GridHeader";
import { GridFields } from "./state/GridFields";
export interface IGridDataRow<TData> {
    key: string | number;
    data: TData;
}
export interface IGridProps<TData> {
    rows: IGridDataRow<TData>[];
    limitRows?: boolean;
    maxVisibleRows?: number;
    fields: GridFields<TData>;
    sortingOptions: IGridSortingOptions;
    extraHeaderElements?: IGridHeaderExtraElements;
    noDataText: string;
    loadMoreText: string;
}
export declare class Grid<TData> extends React.Component<IGridProps<TData>> {
    static defaultProps: {
        maxVisibleRows: number;
        limitRows: boolean;
    };
    private visibleRows;
    constructor(props: IGridProps<TData>);
    componentDidUpdate(prevProps: IGridProps<TData>): void;
    private updateVisibleRows;
    render(): JSX.Element;
    private dataItemRenderer;
    private changeSorting;
    private setColumnSelect;
    private getSortedRows;
    private defaultComparator;
    private loadMoreRows;
}
//# sourceMappingURL=Grid.d.ts.map