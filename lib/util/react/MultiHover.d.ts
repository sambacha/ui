export interface IMultiHoverOptions {
    enterDelay?: number;
    leaveDelay?: number;
}
export declare class MultiHover<TActiveItem> {
    private options;
    private showTimeoutId;
    private hideTimeoutId;
    private hoveredElements;
    private _onActiveChange;
    get onActiveChange(): import("@puzzl/core/lib/event/EventDispatcher").IEvent<this, TActiveItem | undefined>;
    constructor(opts?: IMultiHoverOptions);
    applyOpts(opts: Partial<IMultiHoverOptions>): void;
    enter(item?: TActiveItem): void;
    leave(): void;
}
//# sourceMappingURL=MultiHover.d.ts.map