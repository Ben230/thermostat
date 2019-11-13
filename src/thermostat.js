'use strict';

function Thermostat() {
  this.DEFAULT_TEMPERATURE = 20;
  this.MAXIMUM_TEMPERATURE = 25
  this.MINIMUM_TEMPERATURE = 10;
  this.powerSavingMode = true;
  this.temperature = this.DEFAULT_TEMPERATURE;
};

Thermostat.prototype.getCurrentTemperature = function() {
  return this.temperature;
};

Thermostat.prototype.up = function() {
  if (this.isMaximumTemperature()) {
    return;
  };
  this.temperature ++;
};

Thermostat.prototype.down = function () {
  if (this.isMinimumTemperature()) {
    return;
  };
  this.temperature --;
};

Thermostat.prototype.isMinimumTemperature = function() {
  return this.temperature === this.MINIMUM_TEMPERATURE;
};

Thermostat.prototype.isMaximumTemperature = function() {
  return this.temperature === this.MAXIMUM_TEMPERATURE;
};

Thermostat.prototype.isPowerSavingModeOn = function() {
  return this.powerSavingMode === true;
};

Thermostat.prototype.switchPowerSavingMode = function() {
  if (this.powerSavingMode) {
    this.MAXIMUM_TEMPERATURE = 32;
  } else {
    this.MAXIMUM_TEMPERATURE = 25;
  }
  this.powerSavingMode = !this.powerSavingMode;
};

Thermostat.prototype.resetTemperature = function() {
  this.temperature = this.DEFAULT_TEMPERATURE;
};
