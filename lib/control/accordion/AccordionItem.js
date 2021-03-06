import * as React from "react";
import { PropTypes } from "mobx-react";
export class AccordionItem extends React.Component {
    componentDidMount() {
        this.itemConfig = this.props;
        this.context.accordionState.addItem(this.itemConfig);
    }
    componentDidUpdate() {
        let oldItemConfig = this.itemConfig;
        this.itemConfig = this.props;
        this.context.accordionState.updateItem(oldItemConfig, this.itemConfig);
    }
    componentWillUnmount() {
        this.context.accordionState.removeItem(this.itemConfig);
    }
    render() {
        return null;
    }
}
AccordionItem.contextTypes = {
    accordionState: PropTypes.objectOrObservableObject
};
//# sourceMappingURL=AccordionItem.js.map