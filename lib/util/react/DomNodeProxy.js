import * as React from "react";
import * as ReactDOM from "react-dom";
export class DomNodeProxy extends React.Component {
    render() {
        let child = React.Children.only(this.props.children);
        return (React.cloneElement(child, {
            ref: (r) => {
                this.innerRef = r instanceof Element ? r : ReactDOM.findDOMNode(r);
            }
        }));
    }
    componentDidMount() {
        this.props.onMount(this.innerRef);
    }
    componentWillUnmount() {
        if (this.props.onUnmount) {
            this.props.onUnmount(this.innerRef);
        }
    }
}
//# sourceMappingURL=DomNodeProxy.js.map