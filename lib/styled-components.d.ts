/// <reference types="react" />
import * as styledComponents from "styled-components";
import { ITheme } from "./theme/ITheme";
declare type WithOptionalTheme<P extends {
    theme?: T;
}, T> = Omit<P, "theme"> & {
    theme?: T;
};
declare const styled: styledComponents.ThemedBaseStyledInterface<ITheme>, css: styledComponents.ThemedCssFunction<ITheme>, injectGlobal: (strings: TemplateStringsArray, ...interpolations: styledComponents.SimpleInterpolation[]) => void, keyframes: (strings: TemplateStringsArray, ...interpolations: styledComponents.SimpleInterpolation[]) => string, ThemeProvider: import("react").ComponentClass<styledComponents.ThemeProviderProps<ITheme>, any>, withTheme: <P extends {
    theme?: ITheme | undefined;
}>(component: import("react").ComponentType<P>) => import("react").ComponentClass<WithOptionalTheme<P, ITheme>, any>;
export { css, injectGlobal, keyframes, ThemeProvider, withTheme };
export default styled;
//# sourceMappingURL=styled-components.d.ts.map