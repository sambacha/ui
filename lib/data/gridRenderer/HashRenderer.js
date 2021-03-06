import * as React from "react";
import { Hash } from "../Hash";
export class HashRenderer {
    constructor(gridFieldDataGetter) {
        this.gridFieldDataGetter = gridFieldDataGetter;
    }
    render(f) {
        let hash = this.gridFieldDataGetter(f);
        return (React.createElement(Hash, null, hash));
    }
}
//# sourceMappingURL=HashRenderer.js.map