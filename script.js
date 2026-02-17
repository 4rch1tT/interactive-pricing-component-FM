const slider = document.querySelector('input[type="range"]');

function updateSliderColor() {
  const min = slider.min ? parseFloat(slider.min) : 0;
  const max = slider.max ? parseFloat(slider.max) : 100;
  const val = parseFloat(slider.value);
  const percent = ((val - min) / (max - min)) * 100;
  slider.style.setProperty('--value', percent + '%');
}

slider.addEventListener('input', updateSliderColor);
window.addEventListener('DOMContentLoaded', updateSliderColor);
