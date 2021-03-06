import * as React from "react";
import { weiToEth } from "../util/internal/wei";
import { BigNumberFormatter } from "../util/internal/locale/BigNumberFormatter";
export class EthValue extends React.Component {
    render() {
        return (new BigNumberFormatter().format(weiToEth(this.props.wei), this.props.locale, {
            minimumFractionDigits: 2,
            maximumFractionDigits: this.props.decimals
        }) + (this.props.showSymbol ? " " + this.props.symbol : ""));
    }
}
EthValue.defaultProps = {
    decimals: 4,
    symbol: "ETH"
};
//# sourceMappingURL=EthValue.js.map