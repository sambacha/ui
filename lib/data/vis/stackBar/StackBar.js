import { __decorate } from "tslib";
import styled, { css } from "../../../styled-components";
import * as React from "react";
import { observer } from "mobx-react";
import { observable } from "mobx";
import { Tooltip } from "../../../overlay/tooltip/Tooltip";
const StackBarItemFill = styled("div").withConfig({ displayName: "StackBarItemFill", componentId: "sc-1ax4l8a" }) `
    background-color: ${({ color }) => color};
    width: 100%;
    height: 100%;
`;
const StackBarItem = styled("div").withConfig({ displayName: "StackBarItem", componentId: "sc-104188h" }) `
    width: ${({ percent }) => percent}%;
    height: ${props => props.height}px;
    transition: height .2s ease-out;

    ${props => props.selected ? css `
    > ${StackBarItemFill} {
        border-radius: 2px;
    }
    ` : css `
    &:first-child > ${StackBarItemFill} {
        border-radius: 2px 0 0 2px;
    }

    &:last-child > ${StackBarItemFill} {
        border-radius: 0 2px 2px 0;
    }`}
`;
let $StackBar = class $StackBar extends React.Component {
    render() {
        let { className, items, defaultBarHeight, maxBarHeight, minBarHeight } = this.props;
        let totalCount = items.reduce((acc, current) => acc + current.count, 0);
        return (React.createElement("div", { className: className, ref: ref => this.wrapperEl = ref }, items.map((item, idx) => {
            let percent = item.count / totalCount * 100;
            let height = this.selectedItem ? (item === this.selectedItem ? maxBarHeight : minBarHeight) : defaultBarHeight;
            return React.createElement(StackBarItem, { selected: item === this.selectedItem, percent: percent, height: height, onMouseEnter: () => this.selectItem(item), onMouseLeave: () => this.unselectItem(item), key: idx },
                React.createElement(Tooltip, { placement: "right", content: item.tooltip, referenceElement: () => this.wrapperEl },
                    React.createElement(StackBarItemFill, { color: item.color })));
        })));
    }
    selectItem(item) {
        this.selectedItem = item;
    }
    unselectItem(item) {
        if (this.selectedItem === item) {
            this.selectedItem = void 0;
        }
    }
};
__decorate([
    observable.ref
], $StackBar.prototype, "selectedItem", void 0);
$StackBar = __decorate([
    observer
], $StackBar);
export const StackBar = styled($StackBar).withConfig({ displayName: "StackBar", componentId: "sc-u99xf6" }) `
    height: ${props => props.maxBarHeight}px;
    display: flex;
    align-items: center;
    box-sizing: border-box;
    width: 100%;
`;
StackBar.defaultProps = {
    defaultBarHeight: 28,
    minBarHeight: 28,
    maxBarHeight: 28
};
//# sourceMappingURL=StackBar.js.map