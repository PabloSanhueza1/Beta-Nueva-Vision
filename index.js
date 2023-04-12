function updateSliderValue() {
  var slider = document.getElementById("myRange");
  var output = document.getElementById("sliderValue");
  var value = slider.value;
  var valueElement = output.querySelector("span");
  valueElement.innerHTML = "$" + value;
}
