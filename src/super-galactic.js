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

  getPlutoAgeInYears() {
    return (this.age / 248.59).toFixed(2);
  }

  lifeExpectancyOnEarth(age, gender) {
    if (gender === "male") {
      let men = 69.8;

      if (age < men) {
        return ("Years to life expectancy for you: " + (men - age).toFixed(2));
      }
      return "Years lived past life expectancy for you: " + (age - men).toFixed(2);
    }
    else if (gender === "female") {
      let women = 74.2;

      if (age < women) {
        return ("Years to life expectancy for you: " + (women - age).toFixed(2));
      }
      return "Years lived past life expectancy for you: " + (age - women).toFixed(2);
    }
    else {
      let non_binary = 72;

      if (age < non_binary) {
        return ("Years to life expectancy for you: " + (non_binary - age).toFixed(2));
      }
      return "Years lived past life expectancy for you: " + (age - non_binary).toFixed(2);
    }
  }
  lifeExpectancyOnMercury() {
    let value = this.getMercuryAgeInYears();
    return (this.lifeExpectancyOnEarth(value, this.gender));

  }

  lifeExpectancyOnVenus() {
    let value = this.getVenusAgeInYears();
    return this.lifeExpectancyOnEarth(value, this.gender);
  }

  lifeExpectancyOnMars() {
    let value = this.getMarsAgeInYears();
    return this.lifeExpectancyOnEarth(value, this.gender);
  }

  lifeExpectancyOnJupiter() {
    let value = this.getJupiterAgeInYears();
    return this.lifeExpectancyOnEarth(value, this.gender);
  }




}