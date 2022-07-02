import $ from 'jquery';
import './css/styles.css';

$(document).ready(function() {
  $('#convert').click(function() {
    let userAmount = $('#amount').val();
    let userCurrency = $('#currency').val();
    $('#amount').val("");
    $('#currency').val("");
  });
});

let request = new XMLHttpRequest();
const url = `https://v6.exchangerate-api.com/v6/${process.env.API_KEY}`;

request.onreadystatechange = function() {
  if (this.readyState === 4 && this.status === 200) {
    const response = JSON.parse(this.responseText);
    getElements(response);
  }
};
  
request.open("GET", url, true);
request.send();

function getElements(response) {
  $('#showEuros').text(`The amount in Euros is € ${response.conversion_rates.EUR} `);
}
