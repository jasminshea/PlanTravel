// Exchange Rate Api
var exchangeUrl = "https://v6.exchangerate-api.com/v6/9ac30c9d3885914f5e6affff/pair/AUD/USD"

fetch(exchangeUrl)
    .then(function(response) {
        return response.json()
    })
    .then(function (data) {
        console.log(data);
    })