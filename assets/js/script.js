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
  var startData = document.querySelector("#countries"  + " option[value='" + start + "']").dataset.value;
  var destData = document.querySelector("#countries"  + " option[value='" + dest + "']").dataset.value;

  localStorage.setItem("start", start)
  localStorage.setItem("dest", dest) 
  localStorage.setItem("city", city) 
  localStorage.setItem("startData", startData)
  localStorage.setItem("destData", destData)  

  var newUrl = 'results.html?start=' + start + '&dest=' + dest + '&city=' + city + '&startData=' + startData + '&destData=' + destData

  location.href = newUrl
})

// Render previous inputs
function renderPreviousInputs() {
  var start = localStorage.getItem("start")
  var dest = localStorage.getItem("dest")
  var city = localStorage.getItem("city")
  var startData = localStorage.getItem("startData")
  var destData = localStorage.getItem("destData")

  var previousLink = document.getElementById('previous')

  previousLink.textContent = start + " > " + dest + ": " + city + " " 

  var newUrl = 'results.html?start=' + start + '&dest=' + dest + '&city=' + city + '&startData=' + startData + '&destData=' + destData
  
  previousLink.setAttribute('href', newUrl)
}

renderPreviousInputs()

