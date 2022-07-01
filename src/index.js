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

    function getExchangeRate(response) {
      if (response.conversion_rates) {
        const euros = (1.8 * (response.conversion_rates.EUR - 273) + 32).toFixed(1);
        const pesos = (1.8 * (response.main.temp_min - 273) + 32).toFixed(1);
        const yen = (1.8 * (response.main.temp_max - 273) + 32).toFixed(1);
        const rupees = (1.8 * (response.main.temp_max - 273) + 32).toFixed(1);
        const won = (1.8 * (response.main.temp_max - 273) + 32).toFixed(1);

        // $('.showHumidity').text(`The humidity in ${city} is ${response.main.humidity}%`);
        $('.showConversion').text(`The temperature is ` + f  + ` degrees.`);
        
      } else {
        $('.showErrors').text(`There was an error: ${response}`);
      }
    }

    request.onreadystatechange = function() {
      if (this.readyState === 4 && this.status === 200) {
        const response = JSON.parse(this.responseText);
        getElements(response);
      }
    }

    request.open("GET", url, true);
    request.send();

    function getElements(response) {
      $('.showPesos').text(`The amount in Pesos is ${response.conversion_rates.EUR}`);
      $('.showYen').text(`The amount in Yen is ${response.main.temp} .`);
      $('.showRupees').text(`The amount in Rupees is ${response.main.temp} .`);
      $('.showWon').text(`The amount in Won is ${response.main.temp} .`);
      $('.showEuros').text(`The amount in Euros is ${response.conversion_rates.EUR} .`);
    }
  });
});