import { __decorate } from "tslib";
import * as React from "react";
import styled from "../styled-components";
import { observer } from "mobx-react";
import { observable } from "mobx";
import { TransitionGroup, CSSTransition } from "react-transition-group";
const CLASS_NAME = "height-transition";
const HeightRoot = styled("div").withConfig({ displayName: "HeightRoot", componentId: "sc-xo2fm9" }) `
    & .${CLASS_NAME}-enter,
    & .${CLASS_NAME}-exit {
        transition: height ${props => props.duration}s ease-in-out;
        overflow: hidden;
    }

    & .${CLASS_NAME}-enter {
        height: 0;
    }

    & .${CLASS_NAME}-enter-active {
        height: ${props => props.computedHeight ? props.computedHeight + "px" : "auto"};
    }

    & .${CLASS_NAME}-enter-done {
    }

    & .${CLASS_NAME}-exit {
        height: ${props => props.computedHeight ? props.computedHeight + "px" : "auto"};
    }

    & .${CLASS_NAME}-exit-active {
        height: 0;
    }
`;
let Height = class Height extends React.Component {
    constructor() {
        super(...arguments);
        this.handleRef = (ref) => {
            if (ref) {
                this.contentRef = ref;
                this.updateHeight();
            }
        };
    }
    render() {
        return (React.createElement(HeightRoot, { computedHeight: this.contentHeight, duration: this.props.duration },
            React.createElement(TransitionGroup, null, this.props.children && React.createElement(CSSTransition, { key: status, timeout: this.props.duration * 1000, classNames: CLASS_NAME, unmountOnExit: true },
                React.createElement("div", null,
                    React.createElement("div", { ref: this.handleRef, style: { overflowY: "visible", height: "auto" } }, this.props.children))))));
    }
    componentDidUpdate(prevProps) {
        if (this.props.children !== prevProps.children) {
            this.updateHeight();
        }
    }
    updateHeight() {
        this.contentHeight = this.contentRef.offsetHeight;
    }
};
__decorate([
    observable
], Height.prototype, "contentHeight", void 0);
Height = __decorate([
    observer
], Height);
export { Height };
//# sourceMappingURL=Height.js.map