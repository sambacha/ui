import styled from "../styled-components";
import * as React from "react";
const $Spacer = ({ children, className }) => (React.createElement("div", { className: className }, children));
export const Spacer = styled($Spacer).withConfig({ displayName: "Spacer", componentId: "sc-1rghpo6" }) `
    height: ${props => props.height};
    flex: 0 0 auto;
`;
//# sourceMappingURL=Spacer.js.map