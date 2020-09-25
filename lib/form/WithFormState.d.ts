import React from "react";
import { IFormStatus } from "./IFormStatus";
import { IFormContextType } from "./IFormContextType";
export interface IWithFormStateProps<TFormValues, TStatus> {
    component?: React.ComponentType<IFormContextType<TFormValues, TStatus>>;
    children?: React.ReactNode | ((props: IFormContextType<TFormValues, TStatus>) => React.ReactNode);
    render?(props: IFormContextType<TFormValues, TStatus>): React.ReactNode;
}
export declare const WithFormState: <TFormValues, TStatus extends IFormStatus = IFormStatus>(props: IWithFormStateProps<TFormValues, TStatus>) => React.ReactElement<{}, string | ((props: any) => React.ReactElement<any, string | any | (new (props: any) => React.Component<any, any, any>)> | null) | (new (props: any) => React.Component<any, any, any>)>;
//# sourceMappingURL=WithFormState.d.ts.map