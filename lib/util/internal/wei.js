export function weiToEth(wei) {
    return wei.shiftedBy(-18);
}
export function ethToWei(eth) {
    return eth.shiftedBy(18);
}
export function weiToGwei(wei) {
    return wei.shiftedBy(-9);
}
//# sourceMappingURL=wei.js.map