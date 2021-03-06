import * as React from "react";
interface IErrorBoundaryProps {
    errorEl: React.ReactNode;
    logger: ILogger;
}
interface ILogger {
    error(error: Error, context: any): void;
}
interface IErrorBoundaryState {
    hasError: boolean;
}
export declare class ErrorBoundary extends React.Component<IErrorBoundaryProps, IErrorBoundaryState> {
    static getDerivedStateFromError(error: any): {
        hasError: boolean;
    };
    constructor(props: IErrorBoundaryProps);
    componentDidCatch(error: Error, errorInfo: React.ErrorInfo): void;
    render(): React.ReactNode;
}
export {};
//# sourceMappingURL=ErrorBoundary.d.ts.map