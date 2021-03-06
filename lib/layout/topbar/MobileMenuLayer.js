import { __decorate } from "tslib";
import * as React from "react";
import ReactDOM from "react-dom";
import styled from "../../styled-components";
import { observer } from "mobx-react";
import { Fade } from "../../fx/Fade";
import { Mask } from "../../overlay/Mask";
import { CloseIcon } from "../../icon/CloseIcon";
import { ToolbarIconButton } from "../toolbar/ToolbarIconButton";
import { TopbarItem } from "./TopbarItem";
import * as PropTypes from "prop-types";
const Layer = styled.div.withConfig({ displayName: "Layer", componentId: "sc-64urln" }) `
    position: fixed;
    top: 0;
    left: 0;
    bottom: 0;
    right: 0;
`;
const Content = styled.div.withConfig({ displayName: "Content", componentId: "sc-60z89h" }) `
    display: flex;
    flex-direction: column;
    box-sizing: border-box;
`;
let MobileMenuLayer = class MobileMenuLayer extends React.Component {
    constructor() {
        super(...arguments);
        this.handleRootClick = (e) => {
            if (e.target === e.currentTarget) {
                this.onClose();
            }
        };
        this.onClose = () => {
            this.props.onRequestClose();
        };
    }
    getChildContext() {
        return { requestClose: this.onClose };
    }
    render() {
        let { open } = this.props;
        return (open ?
            ReactDOM.createPortal(React.createElement(Fade, { duration: .2 },
                React.createElement(Mask, { onClick: this.handleRootClick }),
                React.createElement(Layer, null,
                    React.createElement(TopbarItem, null,
                        React.createElement(ToolbarIconButton, { onClick: this.onClose, Icon: CloseIcon, iconSize: 48 })),
                    React.createElement(Content, null, this.props.children))), document.body)
            : null);
    }
};
MobileMenuLayer.childContextTypes = {
    requestClose: PropTypes.any
};
MobileMenuLayer = __decorate([
    observer
], MobileMenuLayer);
export { MobileMenuLayer };
//# sourceMappingURL=MobileMenuLayer.js.map