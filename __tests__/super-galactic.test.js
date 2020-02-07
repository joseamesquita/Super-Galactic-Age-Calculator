import { SuperGalactic } from '../src/super-galactic';

describe("SuperGalactic", () => {
  test("should take user's input age and return their age", () => {
    const age = new SuperGalactic(23);
    expect(age.getAge()).toEqual(23)
  });
  test("should take user's input age and return their age in Mercury years", () => {
    const age = new SuperGalactic(23);
    expect(age.getMercuryAge()).toEqual(23)
  });
})