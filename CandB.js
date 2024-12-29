// let student={
//     firstName:"Tony",
//     lastName:"Stark",
//     printStudent:function(gender,age){
//         console.log(this.firstName,this.lastName,gender,age);
//     },
// };
// let student1={
//     firstName:"Akshay",
//     lastName:"Kumar",
// };
// // student.printStudent();
// student.printStudent("male",30);
// // student.printStudent.call(student1);
// student.printStudent.call(student1,"male",22);


const add=(a)=>{
    return function(b){
        return function(c){
            return a+b+c;
        };
    };
};m
const addedValue=add(10)(20)(30);
console.log(addedValue);



