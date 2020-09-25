import { __decorate } from "tslib";
import React from "react";
import { WithFormState } from "./WithFormState";
import { Button } from "../control/Button";
import { observer } from "mobx-react";
import { observable } from "mobx";
import { SpinnerLite } from "../fx/SpinnerLite";
let SubmitButton = class SubmitButton extends React.Component {
    constructor() {
        super(...arguments);
        this.isClient = false;
    }
    componentDidMount() {
        this.isClient = true;
    }
    render() {
        let { children } = this.props;
        let isClient = this.isClient;
        return React.createElement(WithFormState, null, ({ isSubmitting }) => React.createElement(Button, { type: "submit", colors: "primary", Icon: isSubmitting || !isClient ? SpinnerLite : void 0, disabled: isSubmitting || !isClient }, children));
    }
};
__decorate([
    observable
], SubmitButton.prototype, "isClient", void 0);
SubmitButton = __decorate([
    observer
], SubmitButton);
export { SubmitButton };
//# sourceMappingURL=SubmitButton.js.map