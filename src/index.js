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
        const euros = (((response.conversion_rates.EUR)*(userAmount)).toFixed(0));
        const pesos = (((response.conversion_rates.MXN)*(userAmount)).toFixed(0));
        const hkd = (((response.conversion_rates.HKD)*(userAmount)).toFixed(0));
        const rupees = (((response.conversion_rates.INR)*(userAmount)).toFixed(0));
        const krona = (((response.conversion_rates.SEK)*(userAmount)).toFixed(0));
        $('.showEuros').text(`The amount in Euros is €` + euros);
        $('.showPesos').text(`The amount in Mexican Pesos is $` + pesos);
        $('.showHkDollars').text(`The amount in Hong Kong Dollars is $` + hkd);
        $('.showRupees').text(`The amount in Indian Rupees is ₹` + rupees);
        $('.showKrona').text(`The amount in Swedish Krona is kr` + krona);
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





