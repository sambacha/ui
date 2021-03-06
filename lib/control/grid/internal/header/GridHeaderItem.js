import { __decorate } from "tslib";
import * as React from "react";
import styled, { css } from "../../../../styled-components";
import { Label } from "../../../../data/Label";
import { GridSortingOrder } from "../../state/GridSortingOrder";
import { observer } from "mobx-react";
const GridHeaderHitBox = styled.div.withConfig({ displayName: "GridHeaderHitBox", componentId: "sc-hhp3yb" }) `
`;
const HeaderItem = styled("div").withConfig({ displayName: "HeaderItem", componentId: "sc-cqyutx" }) `
    background: ${props => props.theme.colors.gridEvenRowBg};
    padding: 10px 8px 10px 32px;
    border-bottom: 1px solid ${props => props.theme.colors.gridBorder};
    cursor: ${props => props.isSortable ? "pointer" : "default"};
    display: flex;
    align-items: center;
    justify-content: space-between;

    ${props => props.isSortable ? css `
        & ${Label} {
            padding: 0;
            ${GridHeaderHitBox}:hover & {
                color: ${props.theme.colors.gridHeaderHover};
            }
        }
    ` : css `
        & ${Label} {
            padding: 0;
        }
    `}
`;
const ArrowDown = styled.div.withConfig({ displayName: "ArrowDown", componentId: "sc-qgie92" }) `
    border-top: 5px solid ${props => props.theme.colors.selectBoxArrow};
    border-left: 5px solid transparent;
    border-right: 5px solid transparent;
    margin: 0 7px;
    ${GridHeaderHitBox}:hover & {
        border-top-color: ${props => props.theme.colors.gridHeaderHover};;
    }
`;
const ArrowUp = styled.div.withConfig({ displayName: "ArrowUp", componentId: "sc-idudi1" }) `
    border-bottom: 5px solid ${props => props.theme.colors.selectBoxArrow};
    border-left: 5px solid transparent;
    border-right: 5px solid transparent;
    margin: 0 7px;
    ${GridHeaderHitBox}:hover & {
        border-bottom-color: ${props => props.theme.colors.gridHeaderHover};;
    }
`;
const NoArrow = styled.div.withConfig({ displayName: "NoArrow", componentId: "sc-1rvh5nc" }) `
    width: 24px;
`;
let GridHeaderItem = class GridHeaderItem extends React.Component {
    constructor() {
        super(...arguments);
        this.onClick = () => {
            if (this.props.onClick) {
                this.props.onClick(this.props.field);
            }
        };
    }
    render() {
        return (React.createElement(GridHeaderHitBox, null,
            React.createElement(HeaderItem, { onClick: this.onClick, isSortable: this.props.field.isSortable },
                React.createElement(Label, null, this.props.children),
                this.getHeaderSortArrow())));
    }
    getHeaderSortArrow() {
        if (!this.props.sortingOptions || this.props.sortingOptions.field !== this.props.field) {
            return React.createElement(NoArrow, null);
        }
        if (this.props.sortingOptions.order === GridSortingOrder.Ascending) {
            return React.createElement(ArrowUp, null);
        }
        if (this.props.sortingOptions.order === GridSortingOrder.Descending) {
            return React.createElement(ArrowDown, null);
        }
        return React.createElement(NoArrow, null);
    }
};
GridHeaderItem = __decorate([
    observer
], GridHeaderItem);
export { GridHeaderItem };
//# sourceMappingURL=GridHeaderItem.js.map