import * as React from "react";
import * as PropTypes from "prop-types";
import { UIDReset as UIDResetBase, UIDConsumer } from "react-uid";
export class UIDReset extends React.Component {
    getChildContext() {
        return {
            UIDConsumer
        };
    }
    render() {
        return React.createElement(UIDResetBase, null, this.props.children);
    }
}
UIDReset.childContextTypes = {
    UIDConsumer: PropTypes.any
};
//# sourceMappingURL=UIDReset.js.map