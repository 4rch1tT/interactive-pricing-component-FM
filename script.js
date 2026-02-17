const range = document.querySelector('input[type="range"]');

const update = () => {
  const min = range.min || 0;
  const max = range.max || 100;
  const value = ((range.value - min) / (max - min)) * 100;
  range.style.setProperty('--value', `${value}%`);
};

range.addEventListener('input', update);
update();

// Dynamically update slider track color for all browsers
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
