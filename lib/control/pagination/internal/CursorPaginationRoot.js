import styled from "../../../styled-components";
export const CursorPaginationRoot = styled.div.withConfig({ displayName: "CursorPaginationRoot", componentId: "sc-x0es0n" }) `
    padding: 24px;
    display: flex;
    justify-content: center;
    align-items: center;
    background: ${props => props.theme.colors.base.bg.alt};

    & > *:not(:first-child) {
        margin-left: 8px;
    }
`;
//# sourceMappingURL=CursorPaginationRoot.js.map