$(function() {

  var apiCall = 'http://api.openweathermap.org/data/2.5/weather?q=';
  var units = '&units=metric';
  var appId = '&appid=6946b019de6496e854c48733148457d4';

  $('input[type="submit"]').click(function() {
    var request = apiCall + $('#cityName').val() + units + appId;
    $.getJSON(request, function(response) {
      $('.update').append('<div class="element"> <span class="listItem">- </span>' + '<span class="cityName">' + response.name + ', </span>'
        + '<span class="country">' + response.sys.country + ': </span>'
        + '<span class="temp">' + response.main.temp + '&deg;C, </span>'
        + '<span class="description">' + response.weather[0].description + '</span> </div>');
    });
  });

  $('input[type="reset"]').click(function() {
    $('.update').empty();
  });

});
