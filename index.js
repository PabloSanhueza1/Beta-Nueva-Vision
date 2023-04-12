function updateSliderValue() {
  var slider = document.getElementById('myRange');
  var output = document.getElementById('sliderValue');
  var value = slider.value;

  var formattedValue =
      '$' + value.toString().replace(/\B(?=(\d{3})+(?!\d))/g, '.');
  output.innerHTML = formattedValue;  // actualizar valor del output
}

function updateButton() {
  var slider = document.getElementById('myRange');
  var value = parseInt(slider.value);
  console.log(value);
  var num = parseInt(value) / 1000

  switch (num) {
    case 1:
      window.location.href = 'https://mpago.la/26CNAhV';
      break;
    case 2:
      window.location.href = 'https://mpago.la/26CNAhV';
      break;
    case 3:
      window.location.href = 'https://mpago.la/26CNAhV';
      break;
    case 4:
      window.location.href = 'https://mpago.la/26CNAhV';
      break;
    case 5:
      window.location.href = 'https://mpago.la/26CNAhV';
      break;
    case 6:
      window.location.href = 'https://mpago.la/26CNAhV';
      break;
    case 7:
      window.location.href = 'https://mpago.la/26CNAhV';
      break;
    case 8:
      window.location.href = 'https://mpago.la/26CNAhV';
      break;
    case 9:
      window.location.href = 'https://mpago.la/26CNAhV';
      break;
    case 10:
      window.location.href = 'https://mpago.la/26CNAhV';
      break;
    case 11:
      window.location.href = 'https://mpago.la/26CNAhV';
      break;
    case 12:
      window.location.href = 'https://mpago.la/26CNAhV';
      break;
    case 13:
      window.location.href = 'https://mpago.la/26CNAhV';
      break;
    case 14:
      window.location.href = 'https://mpago.la/26CNAhV';
      break;
    case 15:
      window.location.href = 'https://mpago.la/26CNAhV';
      break;
    case 16:
      window.location.href = 'https://mpago.la/26CNAhV';
      break;
    case 17:
      window.location.href = 'https://mpago.la/26CNAhV';
      break;
    case 18:
      window.location.href = 'https://mpago.la/26CNAhV';
      break;
    case 19:
      window.location.href = 'https://mpago.la/26CNAhV';
      break;
    case 20:
      window.location.href = 'https://mpago.la/26CNAhV';
      break;
    case 21:
      window.location.href = 'https://mpago.la/26CNAhV';
      break;
    case 22:
      window.location.href = 'https://mpago.la/26CNAhV';
      break;
    case 23:
      window.location.href = 'https://mpago.la/26CNAhV';
      break;
    case 24:
      window.location.href = 'https://mpago.la/26CNAhV';
      break;
    case 25:
      window.location.href = 'https://mpago.la/26CNAhV';
      break;
    case 26:
      window.location.href = 'https://mpago.la/26CNAhV';
      break;
    case 27:
      window.location.href = 'https://mpago.la/26CNAhV';
      break;
    case 28:
      window.location.href = 'https://mpago.la/26CNAhV';
      break;
    case 29:
      window.location.href = 'https://mpago.la/26CNAhV';
      break;
  }
}

window.onload = function() {
  updateSliderValue();
  var button = document.getElementById('ofrendar');
  button.addEventListener('click', updateButton);
};
