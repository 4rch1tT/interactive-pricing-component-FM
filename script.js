const slider = document.querySelector('input[type="range"]');
const pageview = document.getElementById("pageview-no");
const amount = document.getElementById("amount-no");
const checkbox = document.getElementById("checkbox");

function updatePricing() {
  const min = slider.min ? parseFloat(slider.min) : 0;
  const max = slider.max ? parseFloat(slider.max) : 100;
  const val = parseFloat(slider.value);
  const percent = ((val - min) / (max - min)) * 100;

  if (percent === 0 && percent < 25) {
    pageview.innerHTML = "10K";
    checkbox.checked
      ? (amount.innerHTML = "$2")
      : (amount.innerHTML = "$8.00" + " ");
  } else if (percent >= 25 && percent < 50) {
    pageview.innerHTML = "50K";
    checkbox.checked
      ? (amount.innerHTML = "$3")
      : (amount.innerHTML = "$12.00 ");
  } else if (percent >= 50 && percent < 75) {
    pageview.innerHTML = "100K";
    checkbox.checked
      ? (amount.innerHTML = "$4")
      : (amount.innerHTML = "$16.00");
  } else if (percent >= 75 && percent < 100) {
    pageview.innerHTML = "500K";
    checkbox.checked
      ? (amount.innerHTML = "$6")
      : (amount.innerHTML = "$24.00 ");
  } else if (percent === 100) {
    pageview.innerHTML = "1M";
    checkbox.checked
      ? (amount.innerHTML = "$9")
      : (amount.innerHTML = "$36.00 ");
  }
}

function updateSliderColor() {
  const min = slider.min ? parseFloat(slider.min) : 0;
  const max = slider.max ? parseFloat(slider.max) : 100;
  const val = parseFloat(slider.value);
  const percent = ((val - min) / (max - min)) * 100;
  slider.style.setProperty("--value", percent + "%");
}

slider.addEventListener("input", function () {
  updateSliderColor();
  updatePricing();
});
window.addEventListener("DOMContentLoaded", function () {
  updateSliderColor();
  updatePricing();
});

checkbox.addEventListener("change", function () {
  updatePricing();
});
