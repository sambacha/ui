import * as React from "react";
import * as PropTypes from "prop-types";
import { UIDConsumer as UIDConsumerFallback } from "react-uid";
export class UIDConsumer extends React.Component {
    render() {
        let UIDConsumerBase = this.context.UIDConsumer || UIDConsumerFallback;
        return React.createElement(UIDConsumerBase, null, this.props.children);
    }
}
UIDConsumer.contextTypes = {
    UIDConsumer: PropTypes.any
};
//# sourceMappingURL=UIDConsumer.js.map