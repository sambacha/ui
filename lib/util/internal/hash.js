export function splitLongHash(hash, threshold, charsShown) {
    if (hash.length <= threshold || threshold < 2 * charsShown) {
        return false;
    }
    return [
        hash.substr(0, charsShown),
        hash.substr(charsShown, hash.length - 2 * charsShown),
        hash.substr(-charsShown)
    ];
}
//# sourceMappingURL=hash.js.map