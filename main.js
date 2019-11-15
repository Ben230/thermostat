$( document ).ready(function(){
  var thermostat = new Thermostat();
  function updateTemperature() {
    $('#temperature').text(thermostat.temperature);
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
