import styled from "../../../styled-components";
export const GridLayout = styled("div").withConfig({ displayName: "GridLayout", componentId: "sc-s5jf0a" }) `
    overflow-x: auto;
    display: grid;
    grid-template-columns: auto ${({ numberOfFields }) => {
    if (numberOfFields === 0) {
        return "";
    }
    if (numberOfFields === 1) {
        return "max-content";
    }
    const repeatTimes = numberOfFields - 1;
    return "repeat( " + repeatTimes + ", max-content 1px) max-content";
}} auto;
    font-size: 14px;
    font-weight: 500;
    letter-spacing: .2px;
`;
//# sourceMappingURL=GridLayout.js.map