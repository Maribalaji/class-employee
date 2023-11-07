class Employee {
    constructor(name,salary){
        this.name=name;
        this.salary=salary;
    }
    calculate(){
        let a=12*this.salary;
        console.log(`Hi I'm ${this.name} ,My salary per annual ${a}`);
    }
}



class Manager extends Employee{
    constructor(name,salary,department,bonus){
        super(name,salary)
        this.department=department;
        this.bonus=bonus;

    }
    calculate(){
        let y=this.salary+this.bonus;
        console.log(`I'm ${this.name},my monthly salary ${this.salary} Department is ${this.department} my bonus is ${this.bonus} total  salary ${y}`);


    }
}
let res=new Employee("john",25000);
res.calculate()
let ans=new Manager("john",25000,"developer",1000);
ans.calculate();