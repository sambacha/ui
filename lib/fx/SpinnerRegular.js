import * as React from "react";
import { Spinner } from "./Spinner";
import styled, { withTheme } from "../styled-components";
const StyledSpinner = styled(Spinner).withConfig({ displayName: "StyledSpinner", componentId: "sc-vsdm0l" }) `
    margin-top: 2px;
`;
class $SpinnerRegular extends React.Component {
    render() {
        let { theme, size } = this.props;
        return (React.createElement(StyledSpinner, { size: size, borderColor: theme.colors.spinnerBorder, color: theme.colors.spinnerStroke, backgroundColor: theme.colors.spinnerBackground }));
    }
}
$SpinnerRegular.defaultProps = {
    size: 24
};
export const SpinnerRegular = withTheme($SpinnerRegular);
//# sourceMappingURL=SpinnerRegular.js.map