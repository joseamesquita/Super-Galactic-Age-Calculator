export class SuperGalactic {
    constructor(age){
        this.age = age;
    }

    getAgeInYears(){
        return Number(this.age);
    }

    getMercuryAgeInYears(){
        return Number((this.age / .24).toFixed(2)); 
    }

    getVenusAgeInYears(){
        return Number((this.age / .62).toFixed(2)); 
    }

    getMarsAgeInYears(){
        return Number((this.age / 1.88).toFixed(2)); 
    }

    getJupiterAgeInYears(){
        return Number((this.age / 11.86).toFixed(2)); 
    }

    getSaturnAgeInYears(){
        return Number((this.age / 29.46).toFixed(2)); 
    }

    getUranusAgeInYears(){
        return Number((this.age / 84.01).toFixed(2)); 
    }

    getNeptuneAgeInYears(){
        return Number((this.age / 164.79).toFixed(2)); 
    }

    getPlutoAgeInYears(){
        return Number((this.age / 248.59).toFixed(2)); 
    }

    lifeExpectancyMenOnEarth(){
        let men = 70;

        if (this.age < men){
            return ("Years to life expectancy for men: " + (men - this.age));
        }
        return "Years lived past life expectancy for men: " + (this.age - men);
    }
}