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
  var startData = document.querySelector("#countries"  + " option[value='" + start + "']").dataset.value;
  var destData = document.querySelector("#countries"  + " option[value='" + dest + "']").dataset.value;

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

