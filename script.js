const range = document.querySelector('input[type="range"]');

const update = () => {
  const min = range.min || 0;
  const max = range.max || 100;
  const value = ((range.value - min) / (max - min)) * 100;
  range.style.setProperty('--value', `${value}%`);
};

range.addEventListener('input', update);
update();
