$(function() {

  var apiCall = 'http://api.openweathermap.org/data/2.5/weather?q=';
  var units = '&units=metric';
  var appId = '&appid=6946b019de6496e854c48733148457d4';

  // Submit button event.
  $('input[type="submit"]').click(function() {
    getData();
  });

  // Reset button event.
  $('input[type="reset"]').click(function() {
    $('.update').empty();
  });

  getData = function() {
    getRequest()
      .done(function(response) {

        if (!(response.sys || response.main || response.weather)) {
          $('.update').append('<li class="element"><span class="listItem">- </span><span class="description">Invalid input!</span></li>');
          return;
        }

        $('.update').append('<li class="element"> <span class="listItem">- </span>' + '<span class="cityName">' + response.name + ', </span>'
          + '<span class="country">' + response.sys.country + ': </span>'
          + '<span class="temp">' + response.main.temp + '&deg;C, </span>'
          + '<span class="description">' + response.weather[0].description + '</span> </li>');
      })
      .fail(function(jqXHR, textStatus, errorThrown) {
        console.log(textStatus);
      });
  }

  getRequest = function() {
    var request = apiCall + $('#cityName').val() + units + appId;
    return $.getJSON(request);
  }

});
