import styled from "../../../styled-components";
export const GridData = styled("div").withConfig({ displayName: "GridData", componentId: "sc-15q8ak0" }) `
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: ${({ dataType }) => dataType === "number" ? "flex-end" : "auto"};
`;
//# sourceMappingURL=GridData.js.map