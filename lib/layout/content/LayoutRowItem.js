import * as React from "react";
import styled from "../../styled-components";
import { LayoutBoxItem } from "./LayoutBoxItem";
import * as ReactIs from "react-is";
const $LayoutRowItemWrapper = ({ children, className }) => (React.createElement("div", { className: className }, children));
const LayoutRowItemWrapper = styled($LayoutRowItemWrapper).withConfig({ displayName: "LayoutRowItemWrapper", componentId: "sc-11yba97" }) `
    display: flex;
    flex: ${props => props.fullRow ? "1 1" : "0 0"} auto;
`;
const $LayoutInfoBoxItem = ({ children, className }) => (React.createElement("div", { className: className }, children));
const LayoutInfoBoxItem = styled($LayoutInfoBoxItem).withConfig({ displayName: "LayoutInfoBoxItem", componentId: "sc-9wvpim" }) `
    display: flex;
    flex: ${({ fullRow }) => fullRow ? "1 1" : "0 1"} auto;
    flex-wrap: wrap;
`;
export class LayoutRowItem extends React.PureComponent {
    render() {
        const childrenArray = React.Children.toArray(this.props.children)
            .reduce((outArr, child) => {
            if (ReactIs.isFragment(child)) {
                outArr.push(...React.Children.map(child.props.children, c => {
                    if (!ReactIs.isElement(c)) {
                        console.error(`Fragment passed to LayoutRowItem contains a child that is not a React.Element.`, c);
                        return c;
                    }
                    return React.cloneElement(c, {});
                }));
            }
            else {
                outArr.push(child);
            }
            return outArr;
        }, []);
        const labelElement = childrenArray.shift();
        return (React.createElement(LayoutRowItemWrapper, { fullRow: this.props.fullRow },
            this.props.ignoreFirstLabel ? null :
                React.createElement(LayoutBoxItem, { isBeginningOfRow: this.props.isBeginningOfRow, baseHeight: this.props.baseHeight, autoWidth: this.props.autoWidth }, labelElement),
            childrenArray.length === 1 ?
                this.childrenArrayRender(childrenArray) :
                React.createElement(LayoutInfoBoxItem, { fullRow: this.props.fullRow }, this.childrenArrayRender(childrenArray))));
    }
    childrenArrayRender(children) {
        return children.map((c, idx) => {
            return (React.createElement(LayoutBoxItem, { baseHeight: this.props.baseHeight, autoHeight: this.props.autoHeight, autoWidth: this.props.autoWidth, key: idx }, c));
        });
    }
}
LayoutRowItem._brand = "layoutRowItem";
//# sourceMappingURL=LayoutRowItem.js.map