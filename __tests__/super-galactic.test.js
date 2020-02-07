import { SuperGalactic } from '../src/super-galactic';

describe("SuperGalactic", () => {
  test("should take user's input age and return their age", () => {
    let age = new SuperGalactic("23");
    expect(age.getAge()).toEqual("23")
  })
})