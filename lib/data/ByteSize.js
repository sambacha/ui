import * as React from "react";
import { NumberFormatter } from "../util/internal/locale/NumberFormatter";
export class ByteSize extends React.Component {
    render() {
        return (this.props.format.replace(/%d/, new NumberFormatter().format(this.props.children, this.props.locale)));
    }
}
//# sourceMappingURL=ByteSize.js.map