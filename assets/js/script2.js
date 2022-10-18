var eventsContainerEl = document.querySelector('#events-list');


function printResultsEvents(resultObj) {
  console.log(resultObj);

  // set up `<div>` to hold result content
  var resultCard = document.createElement('div');
  resultCard.classList.add('card', 'mb3', 'p3');

  var resultBody = document.createElement('div');
  resultBody.classList.add('collection-item', 'col','s9', 'offset-s3');
  resultCard.append(resultBody);

  var titleEl = document.createElement('h5');
  titleEl.textContent = resultObj.name;

  var dateContentEl = document.createElement('p');
  dateContentEl.innerHTML =
    '<strong>Date:</strong> ' + resultObj.dates.start.localDate + '<br/>';

  var linkContentEl = document.createElement('a');
  linkContentEl.innerHTML = 'Visit Eventpage';
  linkContentEl.setAttribute('href', resultObj.url);
  linkContentEl.classList.add('secondary-content');

  resultBody.append(titleEl, dateContentEl, linkContentEl);
  resultBody.classList.add('card-panel', 'curve', 'z-depth-2');
  resultCard.append(resultBody);

  eventsContainerEl.append(resultCard);
}
    
    var getExchangeRates = function (localCurrency,destinationCurrency,amount) {
        var exchangeUrl = 'https://v6.exchangerate-api.com/v6/f9921cb9c7fe216d2921dff6/pair/'+ localCurrency + '/' + destinationCurrency + '/' + amount;
      
        fetch(exchangeUrl)
            .then(function(response) {
                if (response.ok) {
                    response.json().then(function (data) {
                    
                      console.log(data)

                })}})};


    var getEventsQuery = function (search) {
        var eventUrl = 'https://app.ticketmaster.com/discovery/v2/events.json?keyword=' + search + '&apikey=fwQUN4eQAOHYscFPSE5zrM9VO4cX5QdI';

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

      getEventsQuery('brisbane')
      getExchangeRates('USD','GBP', '80')