document.addEventListener('DOMContentLoaded', function() {
    var elems = document.querySelectorAll('.modal');
    var instances = M.Modal.init(elems);
  });

// Exchange Rate Api
var exchangeUrl = "https://v6.exchangerate-api.com/v6/9ac30c9d3885914f5e6affff/pair/AUD/USD/5"

fetch(exchangeUrl) 
    .then(function(response) {
        return response.json()
    })
    .then(function (data) {
        console.log(data);
    })