import $ from 'jquery';
import './css/styles.css';
import exchangeChecker from './js/exchanger.js';

$(document).ready(function () {
  $('#convert').click(function () {
    let userAmount = $('#amount').val();
    let userCurrency = $('#currency').val();
    $('#amount').val("");
    $('#currency').val("");
    console.log(makeApiCall(userCurrency));
   

    // let request = new XMLHttpRequest();
    // const url = `https://v6.exchangerate-api.com/v6/${process.env.API_KEY}/latest/USD?=${userCurrency}`;

    // request.onreadystatechange = function () {
    //   if (this.readyState === 4 && this.status === 200) {
    //     const response = JSON.parse(this.responseText);
    //     getElements(response);
    //   }
    // };

    // request.open("GET", url, true);
    // request.send();

    function getElements(response) {
      if (response.conversion_rates) {
        $('#showEuros').text(`The amount in Euros is € (${(userAmount)} * ${(response.conversion_rates.EUR)}`);
      } else {
        $('.showErrors').text(`There was an error: ${response}`);
      }
    }
    async function makeApiCall(userCurrency) {
      const response = await exchangeChecker.getCurrency(userCurrency);
      console.log(response);
      getElements(response);
    }
  });
});





