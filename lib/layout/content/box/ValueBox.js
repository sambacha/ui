import * as React from "react";
import { Box } from "./Box";
import { withTheme } from "../../../styled-components";
const $ValueBox = ({ children, className, Icon, iconPlacement, variant, colors, borderStyle, fullWidth, theme }) => (React.createElement(Box, { className: className, metrics: theme.spacing.valueBoxMetrics[variant], colors: typeof colors === "string" ? theme.colors.valueBox[colors] : colors, borderStyle: borderStyle, Icon: Icon, iconPlacement: iconPlacement, fullWidth: fullWidth }, children));
export const ValueBox = withTheme($ValueBox);
ValueBox.defaultProps = {
    variant: "normal",
    colors: "primary",
    borderStyle: "solid"
};
//# sourceMappingURL=ValueBox.js.map