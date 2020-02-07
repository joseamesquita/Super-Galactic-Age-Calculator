import { SuperGalactic } from '../src/super-galactic';

describe("SuperGalactic", () => {
  test("should take user's input age and return their age", () => {
    const age = new SuperGalactic(23);
    expect(age.getAgeInYears()).toEqual(23)
  });

  test("should take user's input age and return their age in Mercury years", () => {
    const age = new SuperGalactic(23);
    expect(age.getMercuryAgeInYears()).toEqual(95.83)
  });

  test("should take user's input age and return their age in Venus years", () => {
    const age = new SuperGalactic(23);
    expect(age.getVenusAgeInYears()).toEqual(37.10)
  });

  test("should take user's input age and return their age in Mars years", () => {
    const age = new SuperGalactic(23);
    expect(age.getMarsAgeInYears()).toEqual(12.23)
  });

  test("should take user's input age and return their age in Jupiter years", () => {
    const age = new SuperGalactic(23);
    expect(age.getJupiterAgeInYears()).toEqual(1.94)
  });

  test("should take user's input age and return their age in Saturn years", () => {
    const age = new SuperGalactic(23);
    expect(age.getSaturnAgeInYears()).toEqual(0.78)
  });

  test("should take user's input age and return their age in Uranus years", () => {
    const age = new SuperGalactic(23);
    expect(age.getUranusAgeInYears()).toEqual(0.27)
  });

  test("should take user's input age and return their age in Neptune years", () => {
    const age = new SuperGalactic(23);
    expect(age.getNeptuneAgeInYears()).toEqual(0.14)
  });
  test("should take user's input age and return their age in Pluto years", () => {
    const age = new SuperGalactic(23);
    expect(age.getPlutoAgeInYears()).toEqual(0.09)
  });

  test("should take user's input age for men and return their years to life expectancy or their years they lived past life expectancy on Earth", () => {
    const age = new SuperGalactic(23);
    expect(age.lifeExpectancyMenOnEarth()).toEqual("Years to life expectancy for men: 46.80")
  });

  test("should take user's input age for women and return their years to life expectancy or their years they lived past life expectancy on Earth", () => {
    const age = new SuperGalactic(23);
    expect(age.lifeExpectancyWomenOnEarth()).toEqual("Years to life expectancy for women: 51.20")
  });
})