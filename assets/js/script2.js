var eventsContainerEl = document.querySelector('#events-list');
var exchangeContainer = document.querySelector("#exchange-section")

function printResultsEvents(eventResult) {
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


function printExchangeResultLabel(from, to) {
  var fromDiv = document.getElementById('from-div')
  var toDiv = document.getElementById('to-div')

  fromDiv.textContent = from
  toDiv.textContent = to

}

function printExchangeResults(data) {
  var exchangeEl = document.querySelector('#final-exchange')

  exchangeEl.innerHTML = data
}

document.querySelector('#submit').addEventListener('click', function(event) {
  event.preventDefault

  var searchParamsArr = document.location.search.split('&');

  var fromData = searchParamsArr[3].split('=').pop();
  var toData = searchParamsArr[4].split('=').pop();

  console.log(fromData);
  console.log(toData);

  var inputVal = document.getElementById('current').value

  console.log(inputVal);

  getExchangeRates(fromData, toData, inputVal)

  printExchangeResults()
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
        var eventUrl = 'https://app.ticketmaster.com/discovery/v2/events.json?size=10&city=' + city + '&apikey=fwQUN4eQAOHYscFPSE5zrM9VO4cX5QdI';
        fetch(eventUrl)
            .then(function(response) {
                if (response.ok) {
                    response.json().then(function (data) {
                      console.log(data)
                    eventsContainerEl.textContent = '';
                    for (var i = 0; i < 9; i++) {
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
        var fromStr = from.replace(/[^a-zA-Z ]/g, '');

        var to = searchParamsArr[1].split('=').pop();
        var toStr = to.replace(/[^a-zA-Z ]/g, '');
        var city = searchParamsArr[2].split('=').pop();

        getEventsQuery(city);

        printExchangeResultLabel(fromStr, toStr)


      };

      getParams();
