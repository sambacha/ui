import * as React from "react";
import * as PropTypes from "prop-types";
import { UIDProps } from "react-uid/dist/es5/context";
export interface IUIDConsumerProps {
    children: UIDProps["children"];
}
export declare class UIDConsumer extends React.Component<IUIDConsumerProps> {
    static contextTypes: {
        UIDConsumer: PropTypes.Requireable<any>;
    };
    render(): JSX.Element;
}
//# sourceMappingURL=UIDConsumer.d.ts.map