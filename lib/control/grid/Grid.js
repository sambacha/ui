import { __decorate } from "tslib";
import * as React from "react";
import styled from "../../styled-components";
import { observer } from "mobx-react";
import { observable } from "mobx";
import { GridLayout } from "./internal/GridLayout";
import { GridSortingOrder } from "./state/GridSortingOrder";
import { GridHeader } from "./internal/header/GridHeader";
import { GridRow } from "./internal/GridRow";
import { GridHeaderItem } from "./internal/header/GridHeaderItem";
import { GridWrapper } from "./internal/GridWrapper";
import { GridData } from "./internal/GridData";
const LoadMoreRows = styled.div.withConfig({ displayName: "LoadMoreRows", componentId: "sc-1t1g9lv" }) `
    text-align: center;
    font-size: 14px;
    font-weight: 500;
    padding: 8px;
    cursor: pointer;
`;
const NoRowsAvailable = styled.div.withConfig({ displayName: "NoRowsAvailable", componentId: "sc-1tninvo" }) `
    text-align: center;
    font-size: 14px;
    font-weight: 500;
    padding: 8px;
`;
let Grid = class Grid extends React.Component {
    constructor(props) {
        super(props);
        this.dataItemRenderer = (f, row) => {
            if (f.renderer) {
                return (React.createElement(GridData, { key: f.fieldKey, dataType: f.type }, typeof f.renderer === "function" ?
                    f.renderer(row.data) :
                    f.renderer.render(row.data)));
            }
            let data = f.getFieldValue(row.data).toString();
            return (React.createElement(GridData, { key: f.fieldKey, dataType: f.type }, data));
        };
        this.changeSorting = (field) => {
            if (this.props.sortingOptions.field !== field) {
                this.props.sortingOptions.setAscendingOrder();
            }
            else {
                this.props.sortingOptions.setNextOrder();
            }
            if (field !== undefined) {
                this.props.sortingOptions.field = field;
            }
        };
        this.setColumnSelect = (field) => {
            this.props.fields.setColumnSelect(field.fieldKey, !field.selected);
        };
        this.loadMoreRows = () => {
            if (this.visibleRows < this.props.rows.length) {
                this.visibleRows += 50;
            }
        };
        this.updateVisibleRows();
    }
    componentDidUpdate(prevProps) {
        if (this.props.limitRows !== prevProps.limitRows || this.props.maxVisibleRows !== prevProps.maxVisibleRows) {
            this.updateVisibleRows();
        }
    }
    updateVisibleRows() {
        this.visibleRows = this.props.limitRows ? this.props.maxVisibleRows : Number.POSITIVE_INFINITY;
    }
    render() {
        const sortedRows = this.getSortedRows();
        return (React.createElement(React.Fragment, null,
            React.createElement(GridWrapper, null,
                React.createElement(GridLayout, { numberOfFields: this.props.fields.selectedGridFields.length },
                    React.createElement(GridHeader, { onFieldsChange: this.setColumnSelect, fields: this.props.fields.gridFields, extraElements: this.props.extraHeaderElements }, this.props.fields.selectedGridFields.map(f => {
                        return (React.createElement(GridHeaderItem, { key: f.fieldKey, field: f, onClick: f.isSortable ? this.changeSorting : undefined, sortingOptions: this.props.sortingOptions }, f.label));
                    })),
                    sortedRows.slice(0, this.visibleRows).map((row, idx) => {
                        return (React.createElement(GridRow, { odd: !(idx % 2), key: row.key }, this.props.fields.selectedGridFields.map((f) => {
                            return this.dataItemRenderer(f, row);
                        })));
                    }))),
            this.visibleRows < this.props.rows.length ?
                React.createElement(LoadMoreRows, { onClick: this.loadMoreRows }, this.props.loadMoreText)
                : null,
            this.props.rows.length === 0 ?
                React.createElement(NoRowsAvailable, null, this.props.noDataText)
                : null));
    }
    getSortedRows() {
        const sortOpts = this.props.sortingOptions;
        if (sortOpts.field === undefined ||
            sortOpts.order === GridSortingOrder.Default) {
            return this.props.rows;
        }
        return [...this.props.rows].sort((a, b) => {
            if (sortOpts.field === undefined ||
                sortOpts.order === GridSortingOrder.Default) {
                return -1;
            }
            const aValue = sortOpts.field.getFieldValue(a.data);
            const bValue = sortOpts.field.getFieldValue(b.data);
            const compResult = typeof aValue !== "string" && typeof aValue !== "number" ?
                aValue.comparedTo(bValue) :
                this.defaultComparator(aValue, bValue);
            if (sortOpts.order === GridSortingOrder.Ascending) {
                return compResult;
            }
            else {
                return compResult * -1;
            }
        });
    }
    defaultComparator(a, b) {
        if (a === b) {
            return 0;
        }
        if (a < b) {
            return -1;
        }
        return 1;
    }
};
Grid.defaultProps = {
    maxVisibleRows: 50,
    limitRows: true
};
__decorate([
    observable
], Grid.prototype, "visibleRows", void 0);
Grid = __decorate([
    observer
], Grid);
export { Grid };
//# sourceMappingURL=Grid.js.map