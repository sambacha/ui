import { __decorate } from "tslib";
import * as React from "react";
import { CSSTransition } from "react-transition-group";
import styled from "../styled-components";
import { observable } from "mobx";
import { observer } from "mobx-react";
const CLASS_NAME = "fade";
const FadeRoot = styled("div").withConfig({ displayName: "FadeRoot", componentId: "sc-1xobv7r" }) `
    & .${CLASS_NAME}-enter,
    & .${CLASS_NAME}-exit {
        transition: opacity ${props => props.duration}s ease-in-out;
    }

    & .${CLASS_NAME}-enter {
        opacity: 0;
    }

    & .${CLASS_NAME}-enter-active {
        opacity: 1;
    }

    & .${CLASS_NAME}-exit {
        opacity: 1;
    }

    & .${CLASS_NAME}-exit-active {
        opacity: 0;
    }
`;
let Fade = class Fade extends React.Component {
    constructor() {
        super(...arguments);
        this.active = false;
    }
    componentDidMount() {
        if (this.props.enabled === true) {
            this.delayTimer = setTimeout(() => this.active = true, this.props.delay * 1000);
        }
    }
    componentDidUpdate(prevProps) {
        if (prevProps.enabled !== this.props.enabled) {
            if (this.delayTimer) {
                clearTimeout(this.delayTimer);
            }
            this.delayTimer = setTimeout(() => {
                this.active = (this.props.enabled === true);
            }, this.props.delay * 1000);
        }
    }
    componentWillUnmount() {
        if (this.delayTimer) {
            clearTimeout(this.delayTimer);
        }
    }
    render() {
        return (React.createElement(FadeRoot, { duration: this.props.duration, innerRef: this.props.innerRef },
            React.createElement(CSSTransition, { in: this.active && this.props.in, classNames: CLASS_NAME, timeout: this.props.duration * 1000, onExited: this.props.onFinished, onEnter: this.props.onEnter, unmountOnExit: true },
                React.createElement("div", null, this.props.children))));
    }
};
Fade.defaultProps = {
    duration: .2,
    delay: 0,
    in: true,
    enabled: true
};
__decorate([
    observable
], Fade.prototype, "active", void 0);
Fade = __decorate([
    observer
], Fade);
export { Fade };
//# sourceMappingURL=Fade.js.map