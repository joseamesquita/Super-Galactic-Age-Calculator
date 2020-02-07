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
}