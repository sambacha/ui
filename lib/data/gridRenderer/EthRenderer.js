import * as React from "react";
import { EthValue } from "../EthValue";
export class EthRenderer {
    constructor(locale, gridFieldDataGetter, options = {}) {
        this.locale = locale;
        this.gridFieldDataGetter = gridFieldDataGetter;
        this.options = options;
    }
    render(f) {
        return (React.createElement(EthValue, { wei: this.gridFieldDataGetter(f), locale: this.locale, showSymbol: false, decimals: this.options.decimals }));
    }
}
//# sourceMappingURL=EthRenderer.js.map