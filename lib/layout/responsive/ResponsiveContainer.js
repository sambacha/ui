import styled from "../../styled-components";
export const ResponsiveContainer = styled("div").withConfig({ displayName: "ResponsiveContainer", componentId: "sc-1wtgj02" }) `
    display: ${props => props.behavior === "hide" ? "block" : "none"};

    @media ${({ mediaQuery: q, theme }) => typeof q === "function" ? q(theme) : q} {
        display: ${props => props.behavior === "hide" ? "none" : "block"};
    }
`;
//# sourceMappingURL=ResponsiveContainer.js.map