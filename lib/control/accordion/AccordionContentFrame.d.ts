import * as React from "react";
import { ITheme } from "../../theme/ITheme";
interface IAccordionContentFrameProps {
    arrowPosition: number | undefined;
    backgroundColor?: string;
    borderColor?: string;
    noBorder?: boolean;
    theme?: ITheme;
}
export declare const AccordionContentFrame: React.ComponentClass<Pick<IAccordionContentFrameProps, "backgroundColor" | "borderColor" | "arrowPosition" | "noBorder"> & {
    theme?: ITheme | undefined;
}, any>;
export {};
//# sourceMappingURL=AccordionContentFrame.d.ts.map