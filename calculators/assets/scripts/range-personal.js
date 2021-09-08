function updateRangeEl(rangeEl) {
  var ratio = valueTotalRatio(rangeEl.value, rangeEl.min, rangeEl.max);
  rangeEl.style.backgroundImage = getLinearGradientCSS(
    ratio,
    "#f37e20",
    "#4B4B4B"
  );
}
