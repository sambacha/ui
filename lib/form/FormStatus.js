import styled from "../styled-components";
import React from "react";
import { WithFormState } from "./WithFormState";
const $FormStatus = styled.p.withConfig({ displayName: "$FormStatus", componentId: "sc-1dpky4c" }) `
    color: ${props => !props.success ? props.theme.colors.base.status.error : void 0};
`;
export const FormStatus = () => React.createElement(WithFormState, null, ({ status }) => {
    if (!status || !status.message) {
        return null;
    }
    return React.createElement($FormStatus, { success: status.success }, status.message);
});
//# sourceMappingURL=FormStatus.js.map