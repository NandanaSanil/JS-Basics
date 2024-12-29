// const listusers=(names)=>{
//     names.forEach((name)=>{
//         console.log(name)
//     })
// }
// const myusers=['John','Andy']
// listusers(myusers)


// function buttonClicked(event){
//     alert("I was clicked!!!");
// }

// class Employee extends Person {
//     constructor(name, age, jobTitle) {
//       super(name, age); // Call the parent class constructor
//       this.jobTitle = jobTitle; // Initialize additional property
//     }
    
//     introduce() {
//       console.log(`Hi, I'm ${this.name}, a ${this.jobTitle}.`);
//     }
//   }
  
//   const employee = new Employee('Bob', 40, 'Developer');
//   employee.introduce(); // 'Hi, I'm Bob, a Developer.'
  


class Dog {
  constructor(color, speed) {
    this.speed = speed;
    this.color = color;
  }
}

class Husky extends Dog {
  constructor(color, speed, owner) {
    super(color, speed);
    this.owner = owner;
  }

  showInfo() {
    console.log("color:" + this._color + "owner:" + this._owner + "speed:" + this._speed);
  }
}

let Dog = {
  color: "white"
};

let Husky = {
  owner: 'ABC'
};

Husky.__proto__ = Dog;

console.log(Husky.owner + " is a owner of" + Dog.color + "Husky");
