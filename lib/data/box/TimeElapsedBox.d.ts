import * as React from "react";
import { IValueBoxProps } from "../../layout/content/box/ValueBox";
import { IRelativeTimeTranslations } from "../../util/time/RelativeTimeFormatter";
import { IClipboard } from "../IClipboard";
export { IRelativeTimeTranslations } from "../../util/time/RelativeTimeFormatter";
export interface ITimeElapsedBoxProps {
    timestamp: number;
    nonclickable?: boolean;
    locale: string | undefined;
    translations: IRelativeTimeTranslations | undefined;
    clipboard?: IClipboard;
    variant?: IValueBoxProps["variant"];
}
export declare class TimeElapsedBox extends React.Component<ITimeElapsedBoxProps> {
    private currentTime;
    private displayMode;
    private timeoutId;
    componentDidMount(): void;
    componentDidUpdate(prevProps: ITimeElapsedBoxProps): void;
    componentWillUnmount(): void;
    render(): JSX.Element;
    private cycleDisplayMode;
    private updateCurrentTime;
    private computeRefreshInterval;
}
//# sourceMappingURL=TimeElapsedBox.d.ts.map