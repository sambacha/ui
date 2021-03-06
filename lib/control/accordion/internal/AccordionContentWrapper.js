import * as React from "react";
import { AccordionItemContentStatus } from "../AccordionItemContentStatus";
import { AccordionContentFrame } from "../AccordionContentFrame";
import { Fade } from "../../../fx/Fade";
import { SpinnerRegular } from "../../../fx/SpinnerRegular";
import { ValueBox } from "../../../layout/content/box/ValueBox";
import { ErrorIcon } from "../../../icon/ErrorIcon";
export class AccordionContentWrapper extends React.Component {
    render() {
        let { status, content, config, arrowPosition, loadingDelay, loadingText, errorText } = this.props;
        let contentEl;
        if (status === AccordionItemContentStatus.Loaded) {
            if (!this.props.renderContent) {
                contentEl = React.createElement(AccordionContentFrame, { arrowPosition: arrowPosition }, content);
            }
            else {
                contentEl = content;
            }
        }
        else if (status === AccordionItemContentStatus.NotLoaded) {
            contentEl = React.createElement(Fade, { duration: .2, delay: loadingDelay },
                React.createElement("div", { style: { display: "flex" } },
                    React.createElement(SpinnerRegular, null),
                    React.createElement(ValueBox, null, loadingText)));
        }
        else {
            contentEl = React.createElement(React.Fragment, null,
                React.createElement("div", { style: { display: "flex" } },
                    React.createElement(ErrorIcon, null),
                    React.createElement(ValueBox, { colors: "error" }, errorText)));
        }
        return this.props.renderContent ?
            this.props.renderContent({ content: contentEl, status, arrowPosition, config }) :
            contentEl;
    }
}
//# sourceMappingURL=AccordionContentWrapper.js.map