import { IViewportSize } from "./useViewportSize";
import { IMediaQueries } from "./mediaQueries";
export declare type IMediaChecks = Record<keyof IMediaQueries, boolean>;
export declare const useMediaCheck: () => [Record<"xs" | "sAndBelow" | "sExact" | "sAndAbove" | "mAndBelow" | "mExact" | "mAndAbove" | "lAndBelow" | "lExact" | "lAndAbove" | "xlAndBelow" | "xlExact" | "xlAndAbove" | "xxl", boolean>, IViewportSize];
//# sourceMappingURL=useMediaCheck.d.ts.map