class Parent{
    constructor() {
        this.fatherName = "Schwerznegger";
        
    }
}


class Child extends Parent{
    constructor(name){
        super();
        this.name = name;
    }
    getName(){
        return this.name + " " + this.fatherName;
    }
}
const baby = new Child("Arnold");
console.log(baby.getName());
console.log(baby);