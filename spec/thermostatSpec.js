'use strict';

describe('Thermostat', function() {
  var thermostat;

  beforeEach(function(){
    thermostat = new Thermostat();
  });

  it('starts at 20 degrees', function() {
    expect(thermostat.getCurrentTemperature()).toEqual(20);
  });

  it('increases in temperature with up()', function() {
    thermostat.up();
    expect(thermostat.getCurrentTemperature()).toEqual(21);
  });

  it('decreases in temperature with down()', function() {
    thermostat.down();
    expect(thermostat.getCurrentTemperature()).toEqual(19);
  });

  it('has a minimum of 10 degrees', function() {
    for (var i = 0; i < 11; i++) {
      thermostat.down();
    };
    expect(thermostat.getCurrentTemperature()).toEqual(10);
  });

  it('has power saving mode on by default', function() {
    expect(thermostat.isPowerSavingModeOn()).toBe(true);
  });

  it('can switch PSM off', function() {
    thermostat.switchPowerSavingMode();
    expect(thermostat.isPowerSavingModeOn()).toBe(false);
  });

  it('can switch PSM back on', function() {
    thermostat.switchPowerSavingMode();
    thermostat.switchPowerSavingMode();
    expect(thermostat.isPowerSavingModeOn()).toBe(true);
  });

  it('can be reset to the default temperature', function() {
    thermostat.up();
    thermostat.resetTemperature();
    expect(thermostat.getCurrentTemperature()).toEqual(20);
  });

  describe('when power saving mode is on', function() {
    it('has a default max temp of 25', function() {
      expect(thermostat.MAXIMUM_TEMPERATURE).toEqual(25);
    });

    it('has a maximum temperature of 25 degrees', function() {
      for (var i=0; i<6; i++) {
        thermostat.up();
      };
      expect(thermostat.getCurrentTemperature()).toEqual(25);
    });
  });

  describe('when power saving mode is off', function() {
    beforeEach(function() {
      thermostat.switchPowerSavingMode();
    });

    it('has a max temp of 32 my default not in PSM', function() {
      expect(thermostat.MAXIMUM_TEMPERATURE).toEqual(32);
    });

    it('has a max temp of 32', function() {
      for (var i=0; i<13; i++) {
        thermostat.up();
      };
      expect(thermostat.MAXIMUM_TEMPERATURE).toEqual(32);
    });
  });

  describe('usage levels', function() {
    describe('when the temperature is below 18 degrees', function() {
      it('is low-usage', function() {
        for (var i=0; i<3; i++) {
          thermostat.down();
        };
        expect(thermostat.energyUsage()).toEqual('low-usage');
      });
    });

    describe('when temp is between 18 and 25', function() {
      it('is med-usage for 25', function() {
        for (var i=0; i<4; i++) {
          thermostat.up();
        };
        expect(thermostat.energyUsage()).toEqual('med-usage');
      });

      it('is med-usage for 18', function() {
        for (var i=0; i<2; i++) {
          thermostat.down();
        };
        expect(thermostat.energyUsage()).toEqual('med-usage');
      });
    });

    describe('when the temperature is above 25 degrees', function() {
      it('is high-usage', function() {
        for (var i=0; i<6; i++) {
          thermostat.up();
        };
        expect(thermostat.energyUsage()).toEqual('high-usage');
      });
    });
  });
});
