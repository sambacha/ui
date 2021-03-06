import * as React from "react";
import { ValueBox } from "../../layout/content/box/ValueBox";
export const GasPercentageBox = ({ children }) => (React.createElement(ValueBox, { colors: (theme) => ({
        text: theme.colors.gasPercentageBoxText,
        background: theme.colors.valueBox.primary.background
    }) }, children));
//# sourceMappingURL=GasPercentageBox.js.map