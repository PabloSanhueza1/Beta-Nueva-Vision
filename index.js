var slider = document.getElementById("myRange");
var output = document.querySelector("output");

slider.addEventListener("input", function() {
  output.value = slider.value;
});
