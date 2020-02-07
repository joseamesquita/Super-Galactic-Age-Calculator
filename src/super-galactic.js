export class SuperGalactic {
    constructor(age){
        this.age = age;
    }

    getAge(){
        return Number(this.age);
    }

    getMercuryAge(){
        return Number((this.age / .24).toFixed(2)); 
    }

    getVenusAge(){
        return Number((this.age / .62).toFixed(2)); 
    }

    getMarsAge(){
        return Number((this.age / 1.88).toFixed(2)); 
    }
}