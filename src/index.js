import $ from 'jquery';
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './css/styles.css';

$(document).ready(function() {
  $('#convert').click(function() {
    const city = $('#amount').val();
    $('#location').val("");

    let request = new XMLHttpRequest();
    const url = `https://v6.exchangerate-api.com/v6/${process.env.API_KEY}`;

    request.onreadystatechange = function() {
      if (this.readyState === 4 && this.status === 200) {
        const response = JSON.parse(this.responseText);
        getElements(response);
      }
    }

    request.open("GET", url, true);
    request.send();

    function getElements(response) {
      $('.showPesos').text(`The amount in Pesos is ${response.main.temp}`);
      $('.showYen').text(`The amount in Yen is ${response.main.temp} .`);
      $('.showRupees').text(`The amount in Rupees is ${response.main.temp} .`);
      $('.showWon').text(`The amount in Won is ${response.main.temp} .`);
      $('.showEuros').text(`The amount in Euros is ${response.main.temp} .`);
    }
  });
});