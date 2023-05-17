function updateSliderValue() {
  var slider = document.getElementById('myRange');
  var output = document.getElementById('sliderValue');
  var value = slider.value;

  var formattedValue =
      '$' + value.toString().replace(/\B(?=(\d{3})+(?!\d))/g, '.');
  output.innerHTML = formattedValue;  // actualizar valor del output
}

function ingresarMonto() {
  window.location.href = 'https://link.mercadopago.cl/nuevavisiontemplo';
}

function ofrendar() {
  var slider = document.getElementById('myRange');
  var value = parseInt(slider.value);
  console.log(value);
  var num = parseInt(value) / 1000

  switch (num) {
    case 1:
      window.location.href = 'https://mpago.la/2vJV4qj';
      break;
    case 2:
      window.location.href = 'https://mpago.la/2Aw6F7Y';
      break;
    case 3:
      window.location.href = 'https://mpago.la/2eo3Tne';
      break;
    case 4:
      window.location.href = 'https://mpago.la/2SLCPLN';
      break;
    case 5:
      window.location.href = 'https://mpago.la/2XzW6HJ';
      break;
    case 6:
      window.location.href = 'https://mpago.la/1ouCMSe';
      break;
    case 7:
      window.location.href = 'https://mpago.la/2ro1UdU';
      break;
    case 8:
      window.location.href = 'https://mpago.la/2ahLuuP';
      break;
    case 9:
      window.location.href = 'https://mpago.la/1Nd6Za3';
      break;
    case 10:
      window.location.href = 'https://mpago.la/2tjV1Rb';
      break;
    case 11:
      window.location.href = 'https://mpago.la/2n1f6q7';
      break;
    case 12:
      window.location.href = 'https://mpago.la/1TsHmVA';
      break;
    case 13:
      window.location.href = 'https://mpago.la/2nswiLZ';
      break;
    case 14:
      window.location.href = 'https://mpago.la/1JPWt8H';
      break;
    case 15:
      window.location.href = 'https://mpago.la/1JA8xJf';
      break;
    case 16:
      window.location.href = 'https://mpago.la/1V7ticW';
      break;
    case 17:
      window.location.href = 'https://mpago.la/2XJcTEn';
      break;
    case 18:
      window.location.href = 'https://mpago.la/1oAySXN';
      break;
    case 19:
      window.location.href = 'https://mpago.la/1XgH6BB';
      break;
    case 20:
      window.location.href = 'https://mpago.la/2JSFaKv';
      break;
    case 21:
      window.location.href = 'https://mpago.la/227D5ks';
      break;
    case 22:
      window.location.href = 'https://mpago.la/17R9E6k';
      break;
    case 23:
      window.location.href = 'https://mpago.la/31vqoEs';
      break;
    case 24:
      window.location.href = 'https://mpago.la/19VkEmH';
      break;
    case 25:
      window.location.href = 'https://mpago.la/1CFEnUo';
      break;
    case 26:
      window.location.href = 'https://mpago.la/1qgVJcE';
      break;
    case 27:
      window.location.href = 'https://mpago.la/1GrbYQJ';
      break;
    case 28:
      window.location.href = 'https://mpago.la/24eWSC5';
      break;
    case 29:
      window.location.href = 'https://mpago.la/1vszvLy';
      break;
    case 30:
      window.location.href = 'https://mpago.la/2szsrKC';
      break;
    case 31:
      window.location.href = 'https://mpago.la/1RjisrF';
      break;
    case 32:
      window.location.href = 'https://mpago.la/2KnzCjK';
      break;
    case 33:
      window.location.href = 'https://mpago.la/1mCbE8Y';
      break;
    case 34:
      window.location.href = 'https://mpago.la/2Gvte3J';
      break;
    case 35:
      window.location.href = 'https://mpago.la/1z6NRuL';
      break;
    case 36:
      window.location.href = 'https://mpago.la/2q61UMR';
      break;
    case 37:
      window.location.href = 'https://mpago.la/2RiLwwv';
      break;
    case 38:
      window.location.href = 'https://mpago.la/23whdDL';
      break;
    case 39:
      window.location.href = 'https://mpago.la/25T6zMN';
      break;
    case 40:
      window.location.href = 'https://mpago.la/1urmbLP';
      break;
    case 41:
      window.location.href = 'https://mpago.la/2FXzYJM';
      break;
    case 42:
      window.location.href = 'https://mpago.la/2PGkuQx';
      break;
    case 43:
      window.location.href = 'https://mpago.la/2CSMQ6F';
      break;
    case 44:
      window.location.href = 'https://mpago.la/1gxA69z';
      break;
    case 45:
      window.location.href = 'https://mpago.la/1LpTycQ';
      break;
    case 46:
      window.location.href = 'https://mpago.la/2dWQobV';
      break;
    case 47:
      window.location.href = 'https://mpago.la/2TptCkq';
      break;
    case 48:
      window.location.href = 'https://mpago.la/1M9exbL';
      break;
    case 49:
      window.location.href = 'https://mpago.la/2rbTCgQ';
      break;
    case 50:
      window.location.href = 'https://mpago.la/2Buo3AD';
      break;
    case 51:
      window.location.href = 'https://mpago.la/14WfQX7';
      break;
    case 52:
      window.location.href = 'https://mpago.la/1T9vdDS';
      break;
    case 53:
      window.location.href = 'https://mpago.la/1pCswQJ';
      break;
    case 54:
      window.location.href = 'https://mpago.la/2qGzVSa';
      break;
    case 55:
      window.location.href = 'https://mpago.la/19AUHGr';
      break;
    case 56:
      window.location.href = 'https://mpago.la/1NS94Pi';
      break;
    case 57:
      window.location.href = 'https://mpago.la/1rv2APS';
      break;
    case 58:
      window.location.href = 'https://mpago.la/1usaHfX';
      break;
    case 59:
      window.location.href = 'https://mpago.la/2VoJMAT';
      break;
    case 60:
      window.location.href = 'https://mpago.la/1ogAn3Q';
      break;
    case 61:
      window.location.href = 'https://mpago.la/2TiJDWa';
      break;
    case 62:
      window.location.href = 'https://mpago.la/1ZDoM9Q';
      break;
    case 63:
      window.location.href = 'https://mpago.la/1JzgT9y';
      break;
    case 64:
      window.location.href = 'https://mpago.la/1mDdpop';
      break;
    case 65:
      window.location.href = 'https://mpago.la/2i8RNBh';
      break;
    case 66:
      window.location.href = 'https://mpago.la/2cGF7YD';
      break;
    case 67:
      window.location.href = 'https://mpago.la/1n2KupG';
      break;
    case 68:
      window.location.href = 'https://mpago.la/29XPTAo';
      break;
    case 69:
      window.location.href = 'https://mpago.la/1Qzaz3r';
      break;
    case 70:
      window.location.href = 'https://mpago.la/1R5M6E1';
      break;
    case 71:
      window.location.href = 'https://mpago.la/14pUXvK';
      break;
    case 72:
      window.location.href = 'https://mpago.la/1fzFJpQ';
      break;
    case 73:
      window.location.href = 'https://mpago.la/2VrVfRz';
      break;
    case 74:
      window.location.href = 'https://mpago.la/1E7z6He';
      break;
    case 75:
      window.location.href = 'https://mpago.la/2i9uVXd';
      break;
    case 76:
      window.location.href = 'https://mpago.la/29T7DKW';
      break;
    case 77:
      window.location.href = 'https://mpago.la/1dZwNzg';
      break;
    case 78:
      window.location.href = 'https://mpago.la/2z2YfB8';
      break;
    case 79:
      window.location.href = 'https://mpago.la/1qvKNxa';
      break;
    case 80:
      window.location.href = 'https://mpago.la/14zUFCH';
      break;
    case 81:
      window.location.href = 'https://mpago.la/1rjCr1G';
      break;
    case 82:
      window.location.href = 'https://mpago.la/32vjnH7';
      break;
    case 83:
      window.location.href = 'https://mpago.la/1H2kME5';
      break;
    case 84:
      window.location.href = 'https://mpago.la/1PS6syF';
      break;
    case 85:
      window.location.href = 'https://mpago.la/23cDyrk';
      break;
    case 86:
      window.location.href = 'https://mpago.la/1BuU71Z';
      break;
    case 87:
      window.location.href = 'https://mpago.la/181QxXd';
      break;
    case 88:
      window.location.href = 'https://mpago.la/262nwnA';
      break;
    case 89:
      window.location.href = 'https://mpago.la/21x1m1n';
      break;
    case 90:
      window.location.href = 'https://mpago.la/2izXDhN';
      break;
    case 91:
      window.location.href = 'https://mpago.la/1f4gS23';
      break;
    case 92:
      window.location.href = 'https://mpago.la/18TMTeZ';
      break;
    case 93:
      window.location.href = 'https://mpago.la/31xPbQQ';
      break;
    case 94:
      window.location.href = 'https://mpago.la/2t7T4Kr';
      break;
    case 95:
      window.location.href = 'https://mpago.la/1fgELwb';
      break;
    case 96:
      window.location.href = 'https://mpago.la/1eyQUGA';
      break;
    case 97:
      window.location.href = 'https://mpago.la/15VgPrE';
      break;
    case 98:
      window.location.href = 'https://mpago.la/175tXZT';
      break;
    case 99:
      window.location.href = 'https://mpago.la/2qrZC4s';
      break;
    case 100:
      window.location.href = 'https://mpago.la/1HqcjwN';
      break;
  }
}

window.onload = function() {
  updateSliderValue();
  var button = document.getElementById('ofrendar');
  button.addEventListener('click', updateButton);
};
