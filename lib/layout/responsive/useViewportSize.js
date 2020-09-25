import { useState, useEffect } from "react";
export const useViewportSize = () => {
    let [viewportSize, setViewportSize] = useState(() => computeViewportSize());
    useEffect(() => {
        let onResize = () => setViewportSize(computeViewportSize());
        window.addEventListener("resize", onResize);
        return () => {
            window.removeEventListener("resize", onResize);
        };
    }, []);
    return viewportSize;
};
const computeViewportSize = () => ({
    width: window.innerWidth,
    height: window.innerHeight
});
//# sourceMappingURL=useViewportSize.js.map