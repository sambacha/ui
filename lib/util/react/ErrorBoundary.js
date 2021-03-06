import * as React from "react";
export class ErrorBoundary extends React.Component {
    static getDerivedStateFromError(error) {
        return { hasError: true };
    }
    constructor(props) {
        super(props);
        this.state = { hasError: false };
    }
    componentDidCatch(error, errorInfo) {
        this.props.logger.error(error, errorInfo);
    }
    render() {
        if (this.state.hasError) {
            return this.props.errorEl;
        }
        return this.props.children;
    }
}
//# sourceMappingURL=ErrorBoundary.js.map