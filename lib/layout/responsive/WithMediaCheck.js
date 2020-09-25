import { useMediaCheck } from "./useMediaCheck";
export const WithMediaCheck = ({ children }) => {
    let [is, actual] = useMediaCheck();
    return children(is, actual);
};
//# sourceMappingURL=WithMediaCheck.js.map