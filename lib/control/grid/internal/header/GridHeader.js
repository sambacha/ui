import * as React from "react";
import styled from "../../../../styled-components";
import { GridColumnSelector } from "./GridColumnSelector";
const HeaderSpacer = styled.div.withConfig({ displayName: "HeaderSpacer", componentId: "sc-u92orw" }) `
    border-bottom: 1px solid ${props => props.theme.colors.gridBorder};
    background-color: ${props => props.theme.colors.gridEvenRowBg};
    display: flex;
`;
const HeaderSpacerLeft = styled(HeaderSpacer).withConfig({ displayName: "HeaderSpacerLeft", componentId: "sc-ndwoj9" }) ``;
const HeaderSpacerRight = styled(HeaderSpacer).withConfig({ displayName: "HeaderSpacerRight", componentId: "sc-imy4xt" }) `
    justify-content: flex-end;
`;
const HeaderVertBorder = styled.div.withConfig({ displayName: "HeaderVertBorder", componentId: "sc-1fiun8u" }) `
    background-color: ${props => props.theme.colors.gridBorder};
    height: 100%;
    align-self: end;
`;
export class GridHeader extends React.PureComponent {
    render() {
        const propsChildren = React.Children.toArray(this.props.children);
        const resultChildren = propsChildren.reduce((acc, c, i) => {
            acc.push(React.createElement("span", { key: -i - 1 }, c));
            if (i !== propsChildren.length - 1) {
                acc.push(React.createElement(HeaderVertBorder, { key: i + 1 }));
            }
            return acc;
        }, [
            React.createElement(HeaderSpacerLeft, { key: 0 },
                React.createElement(GridColumnSelector, { onChange: (field) => {
                        this.props.onFieldsChange(field);
                    }, fields: this.props.fields }),
                this.props.extraElements && this.props.extraElements.left)
        ]);
        resultChildren.push(React.createElement(HeaderSpacerRight, { key: propsChildren.length + 1 }, this.props.extraElements && this.props.extraElements.right));
        return resultChildren;
    }
}
//# sourceMappingURL=GridHeader.js.map