import * as React from "react";
import styled from "../../../styled-components";
const GRID_CELL_PADDING_X = 32;
const GRID_CELL_PADDING_Y = 8;
const Spacer = styled("div").withConfig({ displayName: "Spacer", componentId: "sc-1c29phu" }) `
    background-color: ${({ odd, theme }) => odd ? theme.colors.gridOddRowBg : theme.colors.gridEvenRowBg};
`;
const Item = styled("div").withConfig({ displayName: "Item", componentId: "sc-1hffgui" }) `
    padding: ${GRID_CELL_PADDING_Y}px ${GRID_CELL_PADDING_X}px;
    background-color: ${({ odd, theme }) => odd ? theme.colors.gridOddRowBg : theme.colors.gridEvenRowBg};
`;
const VertBorder = styled.div.withConfig({ displayName: "VertBorder", componentId: "sc-fbvq5q" }) `
    background-color: ${props => props.theme.colors.gridBorder};
`;
export class GridRow extends React.PureComponent {
    render() {
        const propsChildren = React.Children.toArray(this.props.children);
        const resultChildren = propsChildren.reduce((acc, c, i) => {
            acc.push(React.createElement(Item, { odd: this.props.odd, key: -i - 1 }, c));
            if (i !== propsChildren.length - 1) {
                acc.push(React.createElement(VertBorder, { key: i + 1 }));
            }
            return acc;
        }, [
            React.createElement(Spacer, { odd: this.props.odd, key: 0 })
        ]);
        resultChildren.push(React.createElement(Spacer, { odd: this.props.odd, key: propsChildren.length + 1 }));
        return resultChildren;
    }
}
//# sourceMappingURL=GridRow.js.map