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
})