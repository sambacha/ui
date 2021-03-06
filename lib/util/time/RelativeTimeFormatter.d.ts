declare type RelativeTimeKey = "s" | "ss" | "m" | "mm" | "h" | "hh" | "d" | "dd" | "M" | "MM" | "y" | "yy";
export declare type IRelativeTimeTranslations = Record<RelativeTimeKey | "future" | "past", string>;
export declare class RelativeTimeFormatter {
    private translations;
    constructor(translations?: IRelativeTimeTranslations);
    formatDiff(d1: number, d2: number): string;
    formatInterval(intv: number): string;
    private format;
    private humanizeDiffUnit;
    private formatRelativeTime;
}
export {};
//# sourceMappingURL=RelativeTimeFormatter.d.ts.map