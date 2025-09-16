export const keo = () => {
  const blocks = document.querySelectorAll('.keo');
  if (!blocks.length) return;

  blocks.forEach(block => {
    const range = block.querySelector('.keo__range');
    const number = block.querySelector('.keo__number');
    if (!range || !number) return;

    const min = parseFloat(range.min) || 0;
    const max = parseFloat(range.max) || 100;
    const step = parseFloat(range.step) || 0.1;

    const clamp = v => Math.min(max, Math.max(min, v));
    const roundStep = v => Math.round(v / step) * step;

    const syncFromRange = () => {
      const v = parseFloat(range.value);
      number.value = isNaN(v) ? min.toFixed(1) : v.toFixed(1);
    };

    const syncFromNumber = () => {
      let v = parseFloat(String(number.value || '').replace(',', '.'));
      if (isNaN(v)) v = min;
      v = clamp(roundStep(v));
      number.value = v.toFixed(1);
      range.value = v;
    };

    range.addEventListener('input', syncFromRange);
    number.addEventListener('input', syncFromNumber);
    number.addEventListener('blur', syncFromNumber);

    syncFromRange();
  });
};
