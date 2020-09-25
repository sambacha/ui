import React from "react";
import { connect } from "formik";
const $WithFormState = ({ formik, component: Component, render, children }) => {
    if (Component) {
        return React.createElement(Component, Object.assign({}, formik));
    }
    if (render) {
        return render(formik);
    }
    if (typeof children === "function") {
        return children(formik);
    }
    return children;
};
export const WithFormState = connect($WithFormState);
//# sourceMappingURL=WithFormState.js.map