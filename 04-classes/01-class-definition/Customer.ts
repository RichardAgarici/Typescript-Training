class Customer{
    firstName: string;
    lastName: string;

    constructor(theFirst: string, theLast:string){
        this.firstName=theFirst;
        this.lastName=theLast;
    }
}

// let's create an instance of the class

let myCustomer = new Customer("Martin","Dixen");

console.log(myCustomer.firstName);
console.log(myCustomer.lastName);

