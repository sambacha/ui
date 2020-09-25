import { __decorate } from "tslib";
import * as React from "react";
import { observable } from "mobx";
import { observer } from "mobx-react";
let DelayedRender = class DelayedRender extends React.Component {
    constructor() {
        super(...arguments);
        this.visible = false;
    }
    componentDidMount() {
        this.renderTimer = setTimeout(() => {
            this.visible = true;
        }, this.props.delay * 1000);
    }
    componentWillUnmount() {
        if (this.renderTimer) {
            clearTimeout(this.renderTimer);
            this.renderTimer = void 0;
        }
    }
    render() {
        return this.visible ? this.props.children : null;
    }
};
__decorate([
    observable
], DelayedRender.prototype, "visible", void 0);
DelayedRender = __decorate([
    observer
], DelayedRender);
export { DelayedRender };
//# sourceMappingURL=DelayedRender.js.map