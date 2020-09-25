import { useMemo } from "react";
import { useViewportSize } from "./useViewportSize";
import { mediaQueries } from "./mediaQueries";
export const useMediaCheck = () => {
    let viewportSize = useViewportSize();
    let mediaChecks = useMemo(runMediaChecks, [viewportSize.width]);
    return [mediaChecks, viewportSize];
};
const runMediaChecks = () => {
    let result = {};
    Object.keys(mediaQueries).forEach(mediaType => {
        let mediaQuery = mediaQueries[mediaType];
        let match = window.matchMedia(mediaQuery).matches;
        result[mediaType] = match;
    });
    return result;
};
//# sourceMappingURL=useMediaCheck.js.map