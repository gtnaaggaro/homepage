function updateRangeEl(rangeEl) {
  var ratio = valueTotalRatio(rangeEl.value, rangeEl.min, rangeEl.max);
  rangeEl.style.backgroundImage = getLinearGradientCSS(
    ratio,
    "#b6985a",
    "#4B4B4B"
  );
}
