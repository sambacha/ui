import * as React from "react";
import { MessageBox } from "./MessageBox";
import { SpinnerRegular } from "./fx/SpinnerRegular";
import { DelayedRender } from "./util/react/DelayedRender";
export class LoadingBox extends React.Component {
    render() {
        return (React.createElement(DelayedRender, { delay: 1 },
            React.createElement(MessageBox, { Icon: SpinnerRegular, colors: this.props.colors }, this.props.children)));
    }
}
//# sourceMappingURL=LoadingBox.js.map