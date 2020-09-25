import React from "react";
import { FormikErrors, FormikTouched } from "formik";
import { IFormStatus } from "./IFormStatus";
export interface IFormHelpers<TFormValues, TStatus extends IFormStatus = IFormStatus> {
    setStatus(status?: TStatus): void;
    setErrors(errors: FormikErrors<TFormValues>): void;
    setSubmitting(isSubmitting: boolean): void;
    setTouched(touched: FormikTouched<TFormValues>): void;
    setValues(values: TFormValues): void;
    setFieldValue(field: keyof TFormValues & string, value: any, shouldValidate?: boolean): void;
    setFieldError(field: keyof TFormValues & string, message: string): void;
    setFieldTouched(field: keyof TFormValues & string, isTouched?: boolean, shouldValidate?: boolean): void;
    resetForm(): void;
}
export interface IFormProps<TFormValues, TStatus extends IFormStatus = IFormStatus> {
    children?: React.ReactNode;
    initialValues: TFormValues;
    initialStatus?: TStatus;
    initialErrors?: FormikErrors<TFormValues>;
    initialTouched?: FormikTouched<TFormValues>;
    validateOnChange?: boolean;
    validateOnBlur?: boolean;
    isInitialValid?: boolean;
    enableReinitialize?: boolean;
    onReset?(values: TFormValues, formikHelpers: IFormHelpers<TFormValues, TStatus>): void;
    onSubmit(values: TFormValues, formikHelpers: IFormHelpers<TFormValues, TStatus>): void;
    validate?(values: TFormValues): void | object | Promise<FormikErrors<TFormValues>>;
}
export declare class Form<TFormValues, TStatus extends IFormStatus = IFormStatus> extends React.Component<IFormProps<TFormValues, TStatus>> {
    render(): JSX.Element;
}
//# sourceMappingURL=Form.d.ts.map