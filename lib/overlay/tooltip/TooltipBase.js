import { __decorate, __rest } from "tslib";
import * as React from "react";
import { observer } from "mobx-react";
import { observable } from "mobx";
import { Popover } from "../Popover";
import { DomNodeProxy } from "../../util/react/DomNodeProxy";
import { MultiHover } from "../../util/react/MultiHover";
let TooltipBase = class TooltipBase extends React.Component {
    constructor(props) {
        super(props);
        this.visible = false;
        this.handleMouseEnter = () => {
            this.multiHover.enter(true);
        };
        this.handleMouseLeave = () => {
            this.multiHover.leave();
        };
        this.multiHover = new MultiHover({ enterDelay: this.props.showDelay, leaveDelay: this.props.hideDelay });
        this.multiHover.onActiveChange.subscribe(visible => this.visible = visible || false);
    }
    componentDidUpdate(prevProps) {
        if (this.props.showDelay !== prevProps.showDelay) {
            this.multiHover.applyOpts({ enterDelay: this.props.showDelay });
        }
        if (this.props.hideDelay !== prevProps.hideDelay) {
            this.multiHover.applyOpts({ leaveDelay: this.props.hideDelay });
        }
    }
    render() {
        let _a = this.props, { showDelay: _unused, hideDelay: _unused2, content, style } = _a, otherProps = __rest(_a, ["showDelay", "hideDelay", "content", "style"]);
        let target = React.Children.only(this.props.children);
        return (React.createElement(Popover, Object.assign({ visible: this.visible, content: () => React.createElement("div", { onMouseEnter: this.handleMouseEnter, onMouseLeave: this.handleMouseLeave }, content), style: Object.assign({ background: this.props.backgroundColor, boxShadow: "0 2px 6px 0 rgba(0, 0, 0, .08)", border: this.props.borderColor ? "1px solid " + this.props.borderColor : void 0, boxSizing: "border-box", pointerEvents: this.props.nonInteractive ? "none" : void 0 }, style) }, otherProps),
            React.createElement(DomNodeProxy, { onMount: el => {
                    el.addEventListener("mouseenter", this.handleMouseEnter);
                    el.addEventListener("mouseleave", this.handleMouseLeave);
                }, onUnmount: el => {
                    el.removeEventListener("mouseenter", this.handleMouseEnter);
                    el.removeEventListener("mouseleave", this.handleMouseLeave);
                } }, target)));
    }
};
TooltipBase.defaultProps = {
    showDelay: 400,
    hideDelay: 400,
    backgroundColor: "#fff"
};
__decorate([
    observable
], TooltipBase.prototype, "visible", void 0);
TooltipBase = __decorate([
    observer
], TooltipBase);
export { TooltipBase };
//# sourceMappingURL=TooltipBase.js.map