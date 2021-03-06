import * as React from "react";
export interface IMobileMenuLayerProps {
    open: boolean;
    onRequestClose(): void;
}
export declare class MobileMenuLayer extends React.Component<IMobileMenuLayerProps> {
    render(): React.ReactPortal | null;
    private handleRootClick;
    private onClose;
}
//# sourceMappingURL=MobileMenuLayer.d.ts.map