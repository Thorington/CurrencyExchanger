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

    function getElements(response) {
      if (response.conversion_rates) {
        const euros = (response.conversion_rates.EUR);
        const pesos = (response.conversion_rates.MXN);
        const hongKongDollar = (response.conversion_rates.HKD);
        const rupees = (response.conversion_rates.INR);
        const krona = (response.conversion_rates.SEK);

        $('.showConversion').text(`The amount in is ` + f  + ` degrees.`);
        
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

    function getExchange(response) {
      $('.showEuros').text(`The amount in Euros is € ${euros}`);
      $('.showPesos').text(`The amount in Mexican pesos is ${pesos}$`);
      $('.showHongKongDollar').text(`The amount in Hong Kong dollars is ${hongKongDollar}$`);
      $('.showRupees').text(`The amount in Rupees is ₹ ${rupees}`);
      $('.showKrona').text(`The amount in Swedish Krona is ${krona} kr`);
    }
  });
});