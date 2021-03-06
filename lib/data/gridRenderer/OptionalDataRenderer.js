import * as React from "react";
export class OptionalDataRenderer {
    constructor(dataRenderer, dataChecker) {
        this.dataRenderer = dataRenderer;
        this.dataChecker = dataChecker;
    }
    render(f) {
        return (this.dataChecker(f) ?
            this.dataRenderer.render(f) :
            React.createElement("div", { style: { display: "flex", justifyContent: "center", width: "100%" } }, "-"));
    }
}
//# sourceMappingURL=OptionalDataRenderer.js.map