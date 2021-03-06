import * as React from "react";
import { LoadStatus } from "./LoadStatus";
import { ICursorPaginationBaseProps } from "./internal/ICursorPaginationBaseProps";
export interface ICursorPaginationProps extends ICursorPaginationBaseProps {
    totalItems: number;
}
export declare class CursorPagination extends React.Component<ICursorPaginationProps> {
    static defaultProps: {
        loadStatus: LoadStatus;
    };
    render(): JSX.Element;
}
//# sourceMappingURL=CursorPagination.d.ts.map