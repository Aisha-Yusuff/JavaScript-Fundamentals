class Thermostat {
  constructor() {
    this.temperature = 20;
    this.status = false;
  }

  getTemperature() {
    return this.temperature;
  }

  up() {
    if (this.status == true) {
      if (this.temperature < 25) {
        this.temperature += 1;
      }
    } else {
      if (this.temperature < 32) {
        this.temperature += 1;
      }
    }
  }

  down() {
    if (this.temperature > 10) {
      this.temperature -= 1;
    }
  }
  setPowerSavingMode(status) {
    this.status = status;
  }

  reset() {
    this.temperature = 20;
  }

  energyUsage() {
    if (this.temperature < 18) {
      return "low-usage";
    } else if (this.temperature <= 25) {
      return "medium-usage";
    } else {
      return "high-usage";
    }
  }
}

module.exports = Thermostat;
