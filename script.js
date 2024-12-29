// Example of carriage return in JavaScript

// let text = "Hello, World! \r Goodbye";
// console.log(text);


// console.log(5 % 3);
// let x = 5;
// console.log(x);
// x++; 
// console.log(x);


// function egFunction(){
//     x=10
//     y=20
//     newFunction =function(){
//      alert(x + y)
//     }
//    newFunction()
//     }
//     egFunction()

    // function myFunction(){
    //         var x=10;
    //         function newFunction(){
    //             alert(x)
    //         }
    //         newFunction()
    //     }
    //     myFunction();
        
    // let employee ={
    //     name :'sayooj',
    //     position : 'hr',
    //     salary : 40000 ,
    //     getsalary : function (){
    //      document.write("salary of "+this.name+" is "+this.salary+"<br>"+"position:"+this.position)
    //     }
    //     }
    //     console.log(employee)
    //     document.write(employee.name + "<br>")
    //     employee.getsalary() 
        
    // class Employee{
    //     constructor(name,position,salary){
    //     this.name1 = name;
    //     this.position1 =position;
    //     this.salary1 =salary;
    //     }
    //     getsalary1(){
    //      document.write("Salary of "+this.name1+" is "+this.salary1+"<br>")
    //     }
    //     }
    //     class manager extends Employee{
    //     }
    //     let e2 = new manager("sayooj","hr",50000)
    //     e2.getsalary1();

// console.log("start")
// setTimeout(()=>{
//  console.log('start1')
// },3000)
// console.log('start2')

// console.log("start")
// function getApi(){
//  return 'hello'
// }
// console.log(getApi())
// console.log("end")

// console.log("start")
// function getApi(){
//  setTimeout(() => {
//  return 'hello'
//  }, 3000);
// }
// console.log(getApi())
// console.log("end")

// console.log("start")
// function getApi(callback){
//  setTimeout(() => {
//  callback("hello")
//  }, 3000);
// }
// getApi((callback)=>{
//  console.log(callback)
// })
// console.log("end")

function hello (hi){
    console.log("hello world");
    hi()    
}
function good(){
    console.log("good");
} 
hello(good)


// const promise = new Promise((resolve,reject)=>{
//         setTimeout(()=>{
//             resolve("success")
//         },3000)
//         
//     })
//     promise.then((response)=>{
//         console.log(response)
//     })
    
    // const promise = new Promise((resolve,reject)=>{
    //             reject("failed")
    //         
    //     })
    //     promise.then((response)=>{
    //         console.log(response)
    //     })
    //     .catch((error)=>{
    //         console.log(error)
    //     })
        
        // const promise1 = new Promise((resolve,reject)=>{
        //         resolve(['javascript','java'])
        //         // reject('failed')
        //     })
        //     promise1.then((res)=>{
        //         console.log(res)
        //         document.write(res)
        //     })
        //     .catch((error)=>{
        //         console.log(error)
        //     })
            

// const promise1 = new Promise((resolve, reject) => {
//     setTimeout(() => {
//       resolve(['JavaScript', 'Python', 'Java']);
//     }, 1000); 
//   });
  
//   const fetchData = async () => {
//     try {
//       const response = await promise1;
//       document.write( response)
//       console.log("Fetched data:", response);
//     } catch (error) {
//       console.log("Error:", error);
//     }
//   };
  
//   fetchData();
  



        
        