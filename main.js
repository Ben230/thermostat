$( document ).ready(function(){
  $.get('http://api.openweathermap.org/data/2.5/weather?q=London&appid=a3d9eb01d4de82b9b8d0849ef604dbed&units=metric', function (data) {
    $('#current-temperature').text(data.main.temp);
  })
  var thermostat = new Thermostat();
  function updateTemperature() {
    $('#temperature').text(thermostat.temperature);
    $('#temperature').attr('class', thermostat.energyUsage());
  };

  updateTemperature();

  $('#temperature-up').click(function() {
    thermostat.up();
    updateTemperature();
  });

  $('#temperature-down').click(function() {
    thermostat.down();
    updateTemperature();
  });

  $('#temperature-reset').click(function() {
    thermostat.resetTemperature();
    updateTemperature();
  })

  $('#powersaving-switch').click(function() {
    if (thermostat.powerSavingMode) {
      $('#powersaving-status').text('off')
    } else {
      $('#powersaving-status').text('on')
    }
    thermostat.switchPowerSavingMode();
  });

});
