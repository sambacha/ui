import * as React from "react";
import * as PropTypes from "prop-types";
export declare class UIDReset extends React.Component<{}> {
    static childContextTypes: {
        UIDConsumer: PropTypes.Requireable<any>;
    };
    getChildContext(): {
        UIDConsumer: React.SFC<import("react-uid/dist/es5/context").UIDProps>;
    };
    render(): JSX.Element;
}
//# sourceMappingURL=UIDReset.d.ts.map