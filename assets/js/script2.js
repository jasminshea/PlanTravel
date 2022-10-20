var eventsContainerEl = document.querySelector('#events-list');
var exchangeContainer = document.querySelector("#exchange-section")
var exchangeSubmit = document.querySelector('#submit')

function printResultsEvents(eventResult) {
  console.log(eventResult);

  // set up `<div>` to hold result content
  var resultCard = document.createElement('div');
  resultCard.classList.add('event-card');
  resultCard.classList.add('card', 'mb3', 'p3');

  var resultBody = document.createElement('div');
  resultBody.classList.add('collection-item', 'col','s9', 'offset-s3');
  resultCard.append(resultBody);

  var titleEl = document.createElement('h5');
  titleEl.textContent = eventResult.name;

  var dateContentEl = document.createElement('p');
  dateContentEl.innerHTML =
    '<strong>Date:</strong> ' + eventResult.dates.start.localDate + '<br/>';

  var linkContentEl = document.createElement('a');
  linkContentEl.innerHTML = 'Visit Eventpage';

  linkContentEl.setAttribute('href', eventResult.url);
  linkContentEl.classList.add('event-list');
  linkContentEl.classList.add('secondary-content');

  resultBody.append(titleEl, dateContentEl, linkContentEl);
  resultBody.classList.add('card-panel', 'curve', 'z-depth-2');
  resultCard.append(resultBody);

  eventsContainerEl.append(resultCard);
}

function printExchangeResults(exchangeRes) {

  var inputVal = document.getElementById('current').value
  console.log(inputVal);

  var exchangeEl = document.querySelector('#final-exchange')

  exchangeEl.innerHTML = exchangeRes

}

exchangeSubmit.addEventListener('submit', function(event) {
  event.preventDefault
  
  
})
    
    var getExchangeRates = function (localCurrency,destinationCurrency,amount) {
        var exchangeUrl = 'https://v6.exchangerate-api.com/v6/f9921cb9c7fe216d2921dff6/pair/'+ localCurrency + '/' + destinationCurrency + '/' + amount;
      
        fetch(exchangeUrl)
            .then(function(response) {
                if (response.ok) {
                    response.json().then(function (data) {
                      printExchangeResults(data.conversion_result)
                      console.log(data.conversion_result);

                })}})};


    var getEventsQuery = function (city) {
        console.log('date',date);
        var eventUrl = 'https://app.ticketmaster.com/discovery/v2/events.json?size=10&city=' + city + '&apikey=fwQUN4eQAOHYscFPSE5zrM9VO4cX5QdI';
        fetch(eventUrl)
            .then(function(response) {
                if (response.ok) {
                    response.json().then(function (data) {
                      console.log(data)
                    eventsContainerEl.textContent = '';
                    for (var i = 0; i < 20; i++) {
                        printResultsEvents(data._embedded.events[i]);
                    }
                    })
                  }
                })
              };

      

      function getParams(){
        var searchParamsArr = document.location.search.split('&');
        //Get the query and format values
        var from = searchParamsArr[0].split('=').pop();
        var to = searchParamsArr[1].split('=').pop();
        var city = searchParamsArr[2].split('=').pop();
        var date = searchParamsArr[3].split('=').pop();

        getEventsQuery(city);

        getExchangeRates(from,to,'1');
      };

      getParams();