import React from "react";
import { IMediaChecks } from "./useMediaCheck";
import { IViewportSize } from "./useViewportSize";
export interface IWithMediaCheckProps {
    children(is: IMediaChecks, actual: IViewportSize): React.ReactElement;
}
export declare const WithMediaCheck: React.FC<IWithMediaCheckProps>;
//# sourceMappingURL=WithMediaCheck.d.ts.map