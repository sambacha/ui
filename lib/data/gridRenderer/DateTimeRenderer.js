import * as React from "react";
import { DateTime } from "../DateTime";
export class DateTimeRenderer {
    constructor(locale, gridFieldDataGetter) {
        this.locale = locale;
        this.gridFieldDataGetter = gridFieldDataGetter;
    }
    render(f) {
        return (React.createElement(DateTime, { timestamp: this.gridFieldDataGetter(f), locale: this.locale }));
    }
}
//# sourceMappingURL=DateTimeRenderer.js.map