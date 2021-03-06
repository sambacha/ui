import * as React from "react";
import { LoadStatus } from "./LoadStatus";
import { ICursorPaginationBaseProps } from "./internal/ICursorPaginationBaseProps";
export interface ICursorInfinitePaginationProps extends ICursorPaginationBaseProps {
    isLastPage: boolean;
}
export declare class CursorInfinitePagination extends React.Component<ICursorInfinitePaginationProps> {
    static defaultProps: {
        loadStatus: LoadStatus;
    };
    render(): JSX.Element;
}
//# sourceMappingURL=CursorInfinitePagination.d.ts.map