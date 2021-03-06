import * as React from "react";
import styled from "../../../styled-components";
const Wrapper = styled.div.withConfig({ displayName: "Wrapper", componentId: "sc-j0rvd6" }) `
    border-top: 1px solid ${props => props.theme.colors.gridBorder};
    border-bottom: 1px solid ${props => props.theme.colors.gridBorder};
`;
export const GridWrapper = ({ children }) => (React.createElement(Wrapper, null, children));
//# sourceMappingURL=GridWrapper.js.map