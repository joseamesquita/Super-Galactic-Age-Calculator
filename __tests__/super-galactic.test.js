import { SuperGalactic } from '../src/super-galactic';

describe("SuperGalactic", () => {
  test("should take user's input age and return their age in Mercury years", () => {
    const age = new SuperGalactic(23);
    expect(age.getMercuryAgeInYears()).toEqual("95.83")
  });

  test("should take user's input age and return their age in Venus years", () => {
    const age = new SuperGalactic(23);
    expect(age.getVenusAgeInYears()).toEqual("37.10")
  });

  test("should take user's input age and return their age in Mars years", () => {
    const age = new SuperGalactic(23);
    expect(age.getMarsAgeInYears()).toEqual("12.23")
  });

  test("should take user's input age and return their age in Jupiter years", () => {
    const age = new SuperGalactic(23);
    expect(age.getJupiterAgeInYears()).toEqual("1.94")
  });

  test("should take user's input age and return their age in Saturn years", () => {
    const age = new SuperGalactic(23);
    expect(age.getSaturnAgeInYears()).toEqual("0.78")
  });

  test("should take user's input age and return their age in Uranus years", () => {
    const age = new SuperGalactic(23);
    expect(age.getUranusAgeInYears()).toEqual("0.27")
  });

  test("should take user's input age and return their age in Neptune years", () => {
    const age = new SuperGalactic(23);
    expect(age.getNeptuneAgeInYears()).toEqual("0.14")
  });

  test("should take user's input age for men and return their years to life expectancy on Earth", () => {
    const earth = new SuperGalactic(23, "male");
    expect(earth.lifeExpectancyOnEarth()).toEqual("Years to life expectancy for you: 46.80")
  });

  test("should take user's input age for women and return their years to life expectancy on Earth", () => {
    const earth = new SuperGalactic(23, "female");
    expect(earth.lifeExpectancyOnEarth()).toEqual("Years to life expectancy for you: 51.20")
  });

  test("should take user's input age for non-binary and return their years to life expectancy on Earth", () => {
    const earth = new SuperGalactic(23, "non-binary");
    expect(earth.lifeExpectancyOnEarth()).toEqual("Years to life expectancy for you: 49.00")
  });

  test("should take user's input age for men and return their years they lived past life expectancy on Earth", () => {
    const earth = new SuperGalactic(84, "male");
    expect(earth.lifeExpectancyOnEarth()).toEqual("Years lived past life expectancy for you: 14.20")
  });

  test("should take user's input age for women and return their years they lived past life expectancy on Earth", () => {
    const earth = new SuperGalactic(84, "female");
    expect(earth.lifeExpectancyOnEarth()).toEqual("Years lived past life expectancy for you: 9.80")
  });

  test("should take user's input age for non-binary and return their years they lived past life expectancy on Earth", () => {
    const earth = new SuperGalactic(84, "non-binary");
    expect(earth.lifeExpectancyOnEarth()).toEqual("Years lived past life expectancy for you: 12.00")
  });

  test("should take user's input age for men and return their years to life expectancy or their years they lived past life expectancy on Mercury", () => {
    const mercury = new SuperGalactic(23, "male");
    let age = mercury.getMercuryAgeInYears();
    expect(mercury.lifeExpectancyOnMercury(age, mercury.gender)).toEqual("Years lived past life expectancy for you: 26.03")
  });

  test("should take user's input age for men and return their years to life expectancy or their years they lived past life expectancy on Venus", () => {
    const venus = new SuperGalactic(23, "male");
    let age = venus.getVenusAgeInYears()
    expect(venus.lifeExpectancyOnVenus(age, venus.gender)).toEqual("Years to life expectancy for you: 32.70")
  });

  test("should take user's input age for men and return their years to life expectancy or their years they lived past life expectancy on Mars", () => {
    const mars = new SuperGalactic(23, "male");
    let age = mars.getMarsAgeInYears()
    expect(mars.lifeExpectancyOnMars(age, mars.gender)).toEqual("Years to life expectancy for you: 57.57")
  });

  test("should take user's input age for men and return their years to life expectancy or their years they lived past life expectancy on Jupiter", () => {
    const jupiter = new SuperGalactic(23, "male");
    let age = jupiter.getJupiterAgeInYears()
    expect(jupiter.lifeExpectancyOnJupiter(age, jupiter.gender)).toEqual("Years to life expectancy for you: 67.86")
  });
})