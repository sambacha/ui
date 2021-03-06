import * as React from "react";
import { DomNodeProxy } from "./DomNodeProxy";
export class ScrollIntoView extends React.Component {
    componentDidMount() {
        this.scrollTimeoutId = setTimeout(() => {
            this.ref.scrollIntoView({
                behavior: "smooth"
            });
        }, (this.props.delay || 0) * 1000);
    }
    componentWillUnmount() {
        if (this.scrollTimeoutId) {
            clearTimeout(this.scrollTimeoutId);
            this.scrollTimeoutId = void 0;
        }
    }
    render() {
        return (this.props.children ?
            React.createElement(DomNodeProxy, { onMount: ref => this.ref = ref, onUnmount: () => this.ref = void 0 }, this.props.children)
            : null);
    }
}
//# sourceMappingURL=ScrollIntoView.js.map