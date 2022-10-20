// Datepicker Function
document.addEventListener('DOMContentLoaded', function() {
    var elems = document.querySelectorAll('.datepicker');
    var instances = M.Datepicker.init(elems);
  });

// Modal Function
document.addEventListener('DOMContentLoaded', function() {
    var elems = document.querySelectorAll('.modal');
    var instances = M.Modal.init(elems);
  });

// Linking both pages 
document.getElementById('continue').addEventListener('click', function() {
  var start = document.getElementById('startloc').value
  var dest = document.getElementById('dest').value
  var city = document.getElementById('city').value
  var date = document.getElementById('date').value

  var newUrl = 'results.html?start=' + start + '&dest=' + dest + '&city=' + city + '&date=' + date
  location.href = newUrl
})

// Exchange Rate API
//var exchangeUrl = "https://v6.exchangerate-api.com/v6/9ac30c9d3885914f5e6affff/pair/AUD/USD/5"

//fetch(exchangeUrl) 
   // .then(function(response) {
   //     return response.json()
    //})
   // .then(function (data) {
   //     console.log(data);
   // })
