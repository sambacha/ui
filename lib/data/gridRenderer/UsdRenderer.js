import * as React from "react";
import { UsdValueBox } from "../box/UsdValueBox";
export class UsdRenderer {
    constructor(locale, gridFieldDataGetter) {
        this.locale = locale;
        this.gridFieldDataGetter = gridFieldDataGetter;
    }
    render(f) {
        let bigN = this.gridFieldDataGetter(f);
        return (React.createElement(UsdValueBox, { value: bigN, locale: this.locale, variant: "small", colors: "primary" }));
    }
}
//# sourceMappingURL=UsdRenderer.js.map