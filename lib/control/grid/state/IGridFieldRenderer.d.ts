/// <reference types="react" />
export interface IGridFieldRenderer<T> {
    render: IGridFieldRendererFn<T>;
}
interface IGridFieldRendererFn<T> {
    (f: T): React.ReactChild;
}
export declare type IGridFieldRendererObjectOrFn<T> = IGridFieldRenderer<T> | IGridFieldRendererFn<T>;
export {};
//# sourceMappingURL=IGridFieldRenderer.d.ts.map