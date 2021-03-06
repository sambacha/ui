export function getNumberSeparator(locale, separatorType) {
    let numberFormat = Intl.NumberFormat(locale);
    if (numberFormat.formatToParts) {
        return numberFormat
            .formatToParts(1000.1)
            .find((part) => part.type === separatorType)
            .value;
    }
    if (separatorType === "group") {
        return (1000).toLocaleString().replace(/[0-9]/g, "");
    }
    else {
        return 1.1.toLocaleString().replace(/[0-9]/g, "");
    }
}
//# sourceMappingURL=numberFormat.js.map