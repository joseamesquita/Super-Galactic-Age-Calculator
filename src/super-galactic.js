export class SuperGalactic {
  constructor(age, gender) {
    this.age = age,
      this.gender = gender;
  }

  getMercuryAgeInYears() {
    return (this.age / .24).toFixed(2);
  }

  getVenusAgeInYears() {
    return (this.age / .62).toFixed(2);
  }

  getMarsAgeInYears() {
    return (this.age / 1.88).toFixed(2);
  }

  getJupiterAgeInYears() {
    return (this.age / 11.86).toFixed(2);
  }

  getSaturnAgeInYears() {
    return (this.age / 29.46).toFixed(2);
  }

  getUranusAgeInYears() {
    return (this.age / 84.01).toFixed(2);
  }

  getNeptuneAgeInYears() {
    return (this.age / 164.79).toFixed(2);
  }

  lifeExpectancyOnEarth() {
    if (this.gender === "male") {
      let men = 69.8;

      if (this.age < men) {
        return ("Years to life expectancy for you: " + (men - this.age).toFixed(2));
      }
      return "Years lived past life expectancy for you: " + (this.age - men).toFixed(2);
    }
    else if (this.gender === "female") {
      let women = 74.2;

      if (this.age < women) {
        return ("Years to life expectancy for you: " + (women - this.age).toFixed(2));
      }
      return "Years lived past life expectancy for you: " + (this.age - women).toFixed(2);
    }
    else {
      let non_binary = 72;

      if (this.age < non_binary) {
        return ("Years to life expectancy for you: " + (non_binary - this.age).toFixed(2));
      }
      return "Years lived past life expectancy for you: " + (this.age - non_binary).toFixed(2);
    }
  }
  lifeExpectancyOnMercury(age, gender) {
    this.age = age;
    this.gender = gender;
    return this.lifeExpectancyOnEarth();

  }

  lifeExpectancyOnVenus(age, gender) {
    this.age = age;
    this.gender = gender
    return this.lifeExpectancyOnEarth();
  }

  lifeExpectancyOnMars(age, gender) {
    this.age = age;
    this.gender = gender
    return this.lifeExpectancyOnEarth();
  }

  lifeExpectancyOnJupiter(age, gender) {
    this.age = age;
    this.gender = gender
    return this.lifeExpectancyOnEarth();
  }




}