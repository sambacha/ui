import { breakpoints } from "./breakpoints";
let { xsMax, sMax, mMax, lMax, xlMax } = breakpoints;
export const mediaQueries = {
    xs: `screen and (max-width: ${xsMax - 1}px)`,
    sAndBelow: `screen and (max-width: ${sMax - 1}px)`,
    sExact: `screen and (min-width: ${xsMax}px) and (max-width: ${sMax - 1}px)`,
    sAndAbove: `screen and (min-width: ${xsMax}px)`,
    mAndBelow: `screen and (max-width: ${mMax - 1}px)`,
    mExact: `screen and (min-width: ${sMax}px) and (max-width: ${mMax - 1}px)`,
    mAndAbove: `screen and (min-width: ${sMax}px)`,
    lAndBelow: `screen and (max-width: ${lMax - 1}px)`,
    lExact: `screen and (min-width: ${mMax}px) and (max-width: ${lMax - 1}px)`,
    lAndAbove: `screen and (min-width: ${mMax}px)`,
    xlAndBelow: `screen and (max-width: ${xlMax - 1}px)`,
    xlExact: `screen and (min-width: ${lMax}px) and (max-width: ${xlMax - 1}px)`,
    xlAndAbove: `screen and (min-width: ${lMax}px)`,
    xxl: `screen and (min-width: ${xlMax}px)`
};
//# sourceMappingURL=mediaQueries.js.map