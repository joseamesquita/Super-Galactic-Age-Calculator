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
}