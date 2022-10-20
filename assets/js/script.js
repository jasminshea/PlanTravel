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

  localStorage.setItem("start", start)
  localStorage.setItem("dest", dest) 
  localStorage.setItem("city", city) 
  localStorage.setItem("date", date)  

  var newUrl = 'results.html?start=' + start + '&dest=' + dest + '&city=' + city + '&date=' + date

  location.href = newUrl
})

// Render previous inputs
function renderPreviousInputs() {
  var start = localStorage.getItem("start")
  var dest = localStorage.getItem("dest")
  var city = localStorage.getItem("city")
  var date = localStorage.getItem("date")

  var previousLink = document.getElementById('previous')

  previousLink.textContent = start + " > " + dest + ": " + city + " " + date

  var newUrl = 'results.html?start=' + start + '&dest=' + dest + '&city=' + city + '&date=' + date
  
  previousLink.setAttribute('href', newUrl)
}

renderPreviousInputs()

// Exchange Rate API
//var exchangeUrl = "https://v6.exchangerate-api.com/v6/9ac30c9d3885914f5e6affff/pair/AUD/USD/5"

//fetch(exchangeUrl) 
   // .then(function(response) {
   //     return response.json()
    //})
   // .then(function (data) {
   //     console.log(data);
   // })
