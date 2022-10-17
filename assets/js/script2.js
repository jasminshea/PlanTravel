var eventsContainerEl = document.querySelector('#events-container');

    
    var getExchangeRates = function (localCurrency,destinationCurrency, amount) {
        var exchangeUrl = 'https://v6.exchangerate-api.com/v6/f9921cb9c7fe216d2921dff6/pair/'+ localCurrency + '/' + destinationCurrency + '/' + amount;
      
        fetch(exchangeUrl)
            .then(function(response) {
                if (response.ok) {
                    response.json().then(function (data) {
                    console.log(data)
                    //displayExchangeRate(data);
                });
        } else {
              alert('Error: ' + response.statusText);
            }
          })
          .catch(function (error) {
            alert('Unable to connect to GitHub');
          });
      };


    var getEventsQuery = function (search) {
        var eventUrl = 'https://app.ticketmaster.com/discovery/v2/events.json?keyword=' + search + '&apikey=fwQUN4eQAOHYscFPSE5zrM9VO4cX5QdI';

        fetch(eventUrl)
            .then(function(response) {
                if (response.ok) {
                    response.json().then(function (data) {
                    console.log(data)
                    displayEvents(data);
                });
            } else {
              alert('Error: ' + response.statusText);
            }
          })
          .catch(function (error) {
            alert('Unable to return search results');
          });
      };


      var displayEvents = function (events) {
        if (events.length === 0) {
          eventsContainerEl.textContent = 'No events found.';
          return;
        }
      
        for (var i = 0; i < events.length; i++) {
          var eventsName = events._embedded.events[i].name;
      
          var eventsEl = document.createElement('a');
          eventsEl.classList = 'collection-item';
      
          var titleEl = document.createElement('span');
          titleEl.textContent = eventsName;
      
          eventsEl.appendChild(titleEl);
      
          var statusEl = document.createElement('span');
          statusEl.classList = 'flex-row align-center';
      
          eventsEl.appendChild(statusEl);
      
          eventsContainerEl.appendChild(eventsEl);
        }
      };

      getEventsQuery('brisbane');
      getExchangeRates('USD','GBP','5.8');