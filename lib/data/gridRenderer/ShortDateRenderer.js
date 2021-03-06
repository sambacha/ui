import * as React from "react";
import { ShortDate } from "../ShortDate";
export class ShortDateRenderer {
    constructor(locale, gridFieldDataGetter) {
        this.locale = locale;
        this.gridFieldDataGetter = gridFieldDataGetter;
    }
    render(f) {
        return (React.createElement(ShortDate, { timestamp: this.gridFieldDataGetter(f), locale: this.locale }));
    }
}
//# sourceMappingURL=ShortDateRenderer.js.map