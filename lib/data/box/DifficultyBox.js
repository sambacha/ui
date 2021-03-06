import * as React from "react";
import { ValueBox } from "../../layout/content/box/ValueBox";
import { DifficultyFormatter } from "../../util/internal/locale/DifficultyFormatter";
import { BigNumberFormatter } from "../../util/internal/locale/BigNumberFormatter";
export class DifficultyBox extends React.Component {
    render() {
        let difficultyFormatter = new DifficultyFormatter(new BigNumberFormatter());
        return (React.createElement(ValueBox, null, difficultyFormatter.format(this.props.value, this.props.locale)));
    }
}
//# sourceMappingURL=DifficultyBox.js.map