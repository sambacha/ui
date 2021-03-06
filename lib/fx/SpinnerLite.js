import * as React from "react";
import { Spinner } from "./Spinner";
export class SpinnerLite extends React.Component {
    render() {
        return (React.createElement(Spinner, { size: this.props.size, borderColor: "transparent" }));
    }
}
SpinnerLite.defaultProps = {
    size: 24
};
//# sourceMappingURL=SpinnerLite.js.map