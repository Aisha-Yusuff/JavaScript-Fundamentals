const Thermostat = require("./thermostat");

describe("Thermostat", () => {
  it("returns 20 for the inital temperature", () => {
    const thermostat = new Thermostat();
    expect(thermostat.getTemperature()).toBe(20);
  });

  it("returns 22 when I raise the temperature twice", () => {
    const thermostat = new Thermostat();
    thermostat.up();
    thermostat.up();
    expect(thermostat.getTemperature()).toBe(22);
  });

  it("returns 19 when I lower the temperature", () => {
    const thermostat = new Thermostat();
    thermostat.down();
    expect(thermostat.getTemperature()).toBe(19);
  });

  it("the minimum possible temperature is 10", () => {
    const thermostat = new Thermostat();
    for (let i = 0; i < 20; i++) {
      thermostat.down();
    }
    expect(thermostat.getTemperature()).toBe(10);
  });

  it("the max temperature is 32 with power saving mode off", () => {
    const thermostat = new Thermostat();
    for (let i = 0; i < 20; i++) {
      thermostat.up();
    }
    expect(thermostat.getTemperature()).toBe(32);
  });

  it("checks if power saving mode is on", () => {
    const thermostat = new Thermostat();
    thermostat.setPowerSavingMode(true);
    expect(thermostat.status).toBeTruthy();
  });

  it("checks if power saving mode is off", () => {
    const thermostat = new Thermostat();
    expect(thermostat.status).toBeFalsy();
  });

  it("the max temperature is 25 with power saving mode on", () => {
    const thermostat = new Thermostat();
    thermostat.setPowerSavingMode(true);
    for (let i = 0; i < 20; i++) {
      thermostat.up();
    }
    expect(thermostat.getTemperature()).toBe(25);
  });

  it("the temperature resets to 20", () => {
    const thermostat = new Thermostat();
    thermostat.up;
    thermostat.up;
    thermostat.reset;
    expect(thermostat.getTemperature()).toBe(20);
  });

  it("returns low energy usage when temperature is lower than 18", () => {
    const thermostat = new Thermostat();
    thermostat.down();
    thermostat.down();
    thermostat.down();
    expect(thermostat.energyUsage()).toBe("low-usage");
    expect(thermostat.getTemperature()).toBe(17);
  });

  it("returns mediun energy usage when temperature is more than 18 but less than 25", () => {
    const thermostat = new Thermostat();
    thermostat.up();
    thermostat.up();
    thermostat.up();
    expect(thermostat.energyUsage()).toBe("medium-usage");
    expect(thermostat.getTemperature()).toBe(23);
  });

  it("returns high energy usage when temperature is more than 25", () => {
    const thermostat = new Thermostat();
    thermostat.up();
    thermostat.up();
    thermostat.up();
    thermostat.up();
    thermostat.up();
    thermostat.up();
    expect(thermostat.energyUsage()).toBe("high-usage");
    expect(thermostat.getTemperature()).toBe(26);
  });
});
