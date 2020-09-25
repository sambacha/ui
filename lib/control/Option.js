import * as React from "react";
import { MenuItem } from "./menu/MenuItem";
export class Option extends React.Component {
    render() {
        return React.createElement(MenuItem, Object.assign({}, this.props));
    }
}
//# sourceMappingURL=Option.js.map