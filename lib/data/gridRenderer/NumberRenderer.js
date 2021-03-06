import * as React from "react";
import { Number } from "../Number";
export class NumberRenderer {
    constructor(locale, gridFieldDataGetter) {
        this.locale = locale;
        this.gridFieldDataGetter = gridFieldDataGetter;
    }
    render(f) {
        let bigN = this.gridFieldDataGetter(f);
        return (React.createElement(Number, { value: bigN, locale: this.locale }));
    }
}
//# sourceMappingURL=NumberRenderer.js.map