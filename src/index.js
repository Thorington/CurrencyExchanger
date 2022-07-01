import $ from 'jquery';
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './css/styles.css';
import currencyExchanger from './js/exchange.js';


function clearFields() {
  $('#amount').val("");
  // $('#amenities').text("");
  // $('#descript').text("");
}


function getElements(response) {
  if (response.data) {
    $('#descript').text(`${response.conversion_rates.EUR} `);
    // $('#amenities').text(`${response.data[0].activities[0].name}`);
    // $('#amenities').append(`, ${response.data[0].activities[1].name}`);
    // $('#amenities').append(`, ${response.data[0].activities[2].name}`);
    // $('#amenities').append(`, ${response.data[0].activities[3].name}`);
    // $('#amenities').append(`, ${response.data[0].activities[4].name}`);
  } else {
    $('.showErrors').text(`There was an error: ${response}`);
  }
}

async function makeApiCall(amount) {
  const response = await currencyExchanger.getConversion(amount);
  console.log(response);
  getElements(response);
}


$(document).ready(function() {
  $('#convert').click(function() {
    let input = $('#amount').val();
    clearFields();
    makeApiCall(park);
  });
});




// $(document).ready(function() {
//   $('#convert').click(function() {
//     const input = $('#amount').val();
//     $('#').val("");

//     let request = new XMLHttpRequest();
//     const url = `https://v6.exchangerate-api.com/v6/${process.env.API_KEY}`;

//     function getElements(response) {
//       if (response.conversion_rates) {
//         const euros = (response.conversion_rates.EUR);
//         const pesos = (response.conversion_rates.MXN);
//         const hongKongDollar = (response.conversion_rates.HKD);
//         const rupees = (response.conversion_rates.INR);
//         const krona = (response.conversion_rates.SEK);

//         $('.showConversion').text(`The amount in is ` + f  + ` degrees.`);
        
//       } else {
//         $('.showErrors').text(`There was an error: ${response}`);
//       }
//     }

//     request.onreadystatechange = function() {
//       if (this.readyState === 4 && this.status === 200) {
//         const response = JSON.parse(this.responseText);
//         getElements(response);
//       }
//     }

//     request.open("GET", url, true);
//     request.send();

//     function getExchange(response) {
//       $('.showEuros').text(`The amount in Euros is € ${euros}`);
//       $('.showPesos').text(`The amount in Mexican pesos is ${pesos}$`);
//       $('.showHongKongDollar').text(`The amount in Hong Kong dollars is ${hongKongDollar}$`);
//       $('.showRupees').text(`The amount in Rupees is ₹ ${rupees}`);
//       $('.showKrona').text(`The amount in Swedish Krona is ${krona} kr`);
//     }
//   });
// });
