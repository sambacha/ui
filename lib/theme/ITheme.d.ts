import { IBoxColors } from "../layout/content/box/IBoxColors";
import { IBoxMetrics } from "../layout/content/box/IBoxMetrics";
import { ButtonColors } from "../control/Button";
import { IMediaQueries } from "../layout/responsive/mediaQueries";
import { IExpanderColors } from "../control/expander/ExpanderBase";
declare type ValueBoxColors = "primary" | "primaryAlt" | "primaryInvert" | "secondary" | "secondaryInvert" | "highlight" | "error" | "warn";
declare type ValueBoxVariant = "small" | "normal";
export interface ITheme {
    colors: IThemeColors;
    spacing: IThemeSpacing;
    media: IThemeMediaQueries;
    font: IThemeFont;
}
export interface IThemeBaseColors {
    primary: {
        color: string;
        contrast: string;
    };
    secondary: {
        color: string;
        contrast: string;
    };
    disabled: string;
    status: {
        error: string;
        warn: string;
        success: string;
    };
    bg: {
        main: string;
        alt: string;
    };
    highlight: {
        color: string;
        contrast: string;
    };
    accent: {
        color: string;
        contrast: string;
    };
}
export interface IThemeColors {
    base: IThemeBaseColors;
    alethioLogo: string;
    toolbar: {
        item: {
            disabled: string;
            normal: string;
            hover: string;
            active: string;
            activeHover: string;
        };
    };
    toolbarAlethioIcon: string;
    toolbarAlethioIconHover: string;
    overlayBg: string;
    overlayBorder: string;
    overlayToolbarBorder: string;
    overlayText: string;
    copyIcon: string;
    label: {
        default: string;
        strong: string;
        disabled: string;
    };
    gasPercentageBoxText: string;
    hexDataItem: string;
    selectBoxText: string;
    selectBoxTextDisabled: string;
    selectBoxBg: string;
    selectBoxBubble: string;
    selectBoxArrow: string;
    selectBoxBorder: string;
    closeBtn: string;
    gridHeaderHover: string;
    gridBorder: string;
    gridOddRowBg: string;
    gridEvenRowBg: string;
    gridColumnSelector: string;
    valueBox: Record<ValueBoxColors, IBoxColors>;
    error: string;
    rawDataBackground: string;
    rawDataText: string;
    spinnerStroke: string;
    spinnerBorder: string;
    spinnerBackground: string;
    select: {
        expander: {
            disabled: string;
            closed: IExpanderColors;
            open: IExpanderColors;
        };
    };
    accordion: {
        expander: {
            disabled: string;
            closed: IExpanderColors;
            open: IExpanderColors;
        };
        content: {
            background: string;
            border: string;
        };
    };
    msgCountInIcon: string;
    msgCountOutIcon: string;
    msgCountPendingIcon: string;
    button: Record<ButtonColors, {
        normal: IBoxColors;
        hover: IBoxColors;
        disabled: IBoxColors;
    }>;
    input: IBoxColors & {
        activeBorder: string;
        placeholder: string;
    };
    radio: Record<"unchecked" | "checked", {
        label: string;
        icon: string;
    }>;
    checkbox: Record<"unchecked" | "checked", {
        label: string;
        icon: string;
    }>;
    menu: {
        background: string;
        item: {
            normal: IBoxColors;
            hover: IBoxColors;
            disabled: IBoxColors;
            selected: IBoxColors;
        };
    };
    typedValueBoxBg: string;
    typedValueBoxText: string;
    typedValueBoxTypeText: string;
    typedValueBoxBorder: string;
    paginationBtnBorder: string;
    paginationBtnBg: string;
    paginationBtnText: string;
    paginationBtnHoverText: string;
    paginationCursorText: string;
    paginationBtnDisabledText: string;
    messageBoxPrimaryText: string;
    messageBoxPrimaryBg: string;
    messageBoxPrimaryBorder: string;
    messageBoxSecondaryText: string;
    messageBoxSecondaryBg: string;
    messageBoxSecondaryBorder: string;
    separator: string;
    link: string;
}
export interface IThemeSpacing {
    valueBoxMetrics: Record<ValueBoxVariant, IBoxMetrics>;
    toolbarWidth: number;
    topbarHeight: number;
    borderRadius: {
        normal: number;
        thin: number;
    };
    expander: {
        fontSize: number;
        fontWeight: number;
        lineHeight: number;
        letterSpacing: string;
    };
}
export interface IThemeMediaQueries extends IMediaQueries {
}
export interface IThemeFont {
    weight: {
        thin: number;
        extralight: number;
        light: number;
        regular: number;
        medium: number;
        semibold: number;
        bold: number;
        extrabold: number;
        black: number;
    };
}
export {};
//# sourceMappingURL=ITheme.d.ts.map