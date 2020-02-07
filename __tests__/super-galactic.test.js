import { SuperGalactic } from '../src/super-galactic';

describe("SuperGalactic", () => {
  test("should take user's input age and return their age", () => {
    const age = new SuperGalactic(23);
    expect(age.getAge()).toEqual(23)
  });

  test("should take user's input age and return their age in Mercury years", () => {
    const age = new SuperGalactic(23);
    expect(age.getMercuryAge()).toEqual(95.83)
  });

  test("should take user's input age and return their age in Venus years", () => {
    const age = new SuperGalactic(23);
    expect(age.getVenusAge()).toEqual(37.10)
  });

  test("should take user's input age and return their age in Mars years", () => {
    const age = new SuperGalactic(23);
    expect(age.getMarsAge()).toEqual(12.23)
  });

  test("should take user's input age and return their age in Jupiter years", () => {
    const age = new SuperGalactic(23);
    expect(age.getJupiterAge()).toEqual(1.94)
  });
})