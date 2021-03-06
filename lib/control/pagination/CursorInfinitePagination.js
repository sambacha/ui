import * as React from "react";
import { NavButton } from "./internal/NavButton";
import { ArrowLeftIcon } from "../../icon/ArrowLeftIcon";
import { ArrowRightIcon } from "../../icon/ArrowRightIcon";
import { Number } from "../../data/Number";
import { DelayedRender } from "../../util/react/DelayedRender";
import { Cursor } from "./internal/Cursor";
import { ErrorHint } from "../../ErrorHint";
import { CursorPaginationRoot } from "./internal/CursorPaginationRoot";
import { StyledSpinner } from "./internal/Spinner";
import { LoadStatus } from "./LoadStatus";
export class CursorInfinitePagination extends React.Component {
    render() {
        let { rangeStart, rangeEnd, isLastPage: isEndPage, loadStatus, errorText, locale } = this.props;
        let isBusy = loadStatus === LoadStatus.NotLoaded;
        return (React.createElement(CursorPaginationRoot, null,
            React.createElement(NavButton, { Icon: ArrowLeftIcon, disabled: rangeStart === 1 || isBusy, onClick: () => this.props.onPrevPage() }),
            React.createElement(Cursor, null,
                React.createElement(Number, { value: rangeStart, locale: locale }),
                "-",
                React.createElement(Number, { value: rangeEnd, locale: locale })),
            React.createElement(NavButton, { Icon: ArrowRightIcon, disabled: isEndPage || isBusy, onClick: () => this.props.onNextPage() }),
            isBusy ?
                React.createElement(DelayedRender, { delay: 1 },
                    React.createElement(StyledSpinner, null))
                : loadStatus === LoadStatus.Error ?
                    React.createElement(ErrorHint, null, errorText)
                    : null));
    }
}
CursorInfinitePagination.defaultProps = {
    loadStatus: LoadStatus.Loaded
};
//# sourceMappingURL=CursorInfinitePagination.js.map