import { __decorate } from "tslib";
import * as React from "react";
import { observable } from "mobx";
import { observer } from "mobx-react";
import { Clipboard } from "@puzzl/browser/lib/Clipboard";
import { IconButton } from "../IconButton";
import { CopyIcon } from "../../icon/CopyIcon";
import { StatusConfirmedIcon } from "../../icon/StatusConfirmedIcon";
let CopyValueButton = class CopyValueButton extends React.Component {
    constructor() {
        super(...arguments);
        this.confirmationVisible = false;
        this.copyValue = () => {
            let clipboard = this.props.clipboard || new Clipboard(document);
            clipboard.copy(this.props.value);
            this.confirmationVisible = true;
            this.confirmationHideId = setTimeout(() => this.confirmationVisible = false, this.props.confirmationVisibleFor);
        };
    }
    render() {
        return React.createElement(IconButton, { className: this.props.className, Icon: this.confirmationVisible ? StatusConfirmedIcon : CopyIcon, color: theme => theme.colors.copyIcon, onClick: this.copyValue });
    }
    componentDidUpdate(prevProps) {
        if (prevProps.value !== this.props.value && this.confirmationVisible) {
            this.confirmationVisible = false;
            if (this.confirmationHideId) {
                clearTimeout(this.confirmationHideId);
                this.confirmationHideId = void 0;
            }
        }
    }
    componentWillUnmount() {
        if (this.confirmationHideId) {
            clearTimeout(this.confirmationHideId);
        }
    }
};
CopyValueButton.defaultProps = {
    confirmationVisibleFor: 3000
};
__decorate([
    observable
], CopyValueButton.prototype, "confirmationVisible", void 0);
CopyValueButton = __decorate([
    observer
], CopyValueButton);
export { CopyValueButton };
//# sourceMappingURL=CopyValueButton.js.map