import { __decorate } from "tslib";
import * as React from "react";
import { observable } from "mobx";
import { observer } from "mobx-react";
import { ValueBox } from "../../layout/content/box/ValueBox";
import { RelativeTimeFormatter } from "../../util/time/RelativeTimeFormatter";
import { Tooltip } from "../../overlay/tooltip/Tooltip";
import { ClickThreshold } from "../../util/react/ClickThreshold";
import styled from "../../styled-components";
import { CopyValueButton } from "../../control/button/CopyValueButton";
import { DateTime } from "../DateTime";
const TimeElapsedContentRoot = styled.div.withConfig({ displayName: "TimeElapsedContentRoot", componentId: "sc-u2fmf6" }) `
    user-select: none;
    cursor: pointer;
`;
const CopyValueButtonWrapper = styled.div.withConfig({ displayName: "CopyValueButtonWrapper", componentId: "sc-1vwon8f" }) `
    margin: 0 0 0 16px;
`;
var DisplayMode;
(function (DisplayMode) {
    DisplayMode[DisplayMode["AbsoluteTime"] = 0] = "AbsoluteTime";
    DisplayMode[DisplayMode["RelativeTime"] = 1] = "RelativeTime";
})(DisplayMode || (DisplayMode = {}));
let TimeElapsedBox = class TimeElapsedBox extends React.Component {
    constructor() {
        super(...arguments);
        this.displayMode = DisplayMode.RelativeTime;
        this.cycleDisplayMode = () => {
            if (this.displayMode === DisplayMode.RelativeTime) {
                this.displayMode = DisplayMode.AbsoluteTime;
            }
            else if (this.displayMode === DisplayMode.AbsoluteTime) {
                this.displayMode = DisplayMode.RelativeTime;
            }
            else {
                throw new Error(`Unknown display mode "${this.displayMode}`);
            }
        };
        this.updateCurrentTime = () => {
            this.currentTime = Math.floor(Date.now() / 1000);
            this.timeoutId = setTimeout(this.updateCurrentTime, this.computeRefreshInterval());
        };
    }
    componentDidMount() {
        this.updateCurrentTime();
    }
    componentDidUpdate(prevProps) {
        if (this.props.timestamp !== prevProps.timestamp) {
            if (this.timeoutId) {
                clearTimeout(this.timeoutId);
            }
            this.updateCurrentTime();
        }
    }
    componentWillUnmount() {
        if (this.timeoutId) {
            clearTimeout(this.timeoutId);
        }
    }
    render() {
        let value;
        if (this.displayMode === DisplayMode.RelativeTime) {
            value = new RelativeTimeFormatter(this.props.translations).formatDiff(this.currentTime * 1000, this.props.timestamp * 1000);
        }
        else if (this.displayMode === DisplayMode.AbsoluteTime) {
            value = React.createElement(DateTime, { timestamp: this.props.timestamp, locale: this.props.locale });
        }
        else {
            throw new Error(`Unsupported display mode "${DisplayMode[this.displayMode]}"`);
        }
        let box = (React.createElement(ValueBox, { variant: this.props.variant },
            React.createElement(TimeElapsedContentRoot, null, value)));
        return (React.createElement(Tooltip, { content: React.createElement("div", { style: { display: "flex", alignItems: "center" } },
                React.createElement("div", null, this.props.timestamp),
                React.createElement(CopyValueButtonWrapper, null,
                    React.createElement(CopyValueButton, { value: "" + this.props.timestamp, clipboard: this.props.clipboard }))) }, this.props.nonclickable ? box :
            React.createElement(ClickThreshold, { onClick: this.cycleDisplayMode }, box)));
    }
    computeRefreshInterval() {
        return this.currentTime - this.props.timestamp > 60 ? 60000 : 1000;
    }
};
__decorate([
    observable
], TimeElapsedBox.prototype, "currentTime", void 0);
__decorate([
    observable
], TimeElapsedBox.prototype, "displayMode", void 0);
TimeElapsedBox = __decorate([
    observer
], TimeElapsedBox);
export { TimeElapsedBox };
//# sourceMappingURL=TimeElapsedBox.js.map