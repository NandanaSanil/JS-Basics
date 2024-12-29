// function setCookies(){
//     document.cookie='name=Edureka';
//     document.cookie=null;
//     document.cookie='Name=another name';
// }
// setCookies();


// // localStorage.setItem('class',JSON.stringify({a:10,b:'Edureka'}))

// console.log(localStorage.getItem('class'));

// localStorage.clear();


// sessionStorage.setItem('class',JSON.stringify({a:10,b:'Edureka'}))
// console.log(sessionStorage.getItem('class'));
// sessionStorage.clear();

// (function(){
//     var a = "Hello Alexa";
//     console.log(a);
//     return a;
// })();

// let sum=(a,b)=>a+b;
// let addOwn=a=>a+=a;
// console.log(sum(10,20));
// console.log(addOwn(5));

// console.log('Waiting for setTimeOut');
// function greeting(phrase,name){
//     alert(phrase+','+name);
// }
// setTimeout(greeting,5000,"Hello","John");


console.log('Waiting for setInterval');
function greeting(phrase,name){
    console.log(phrase+','+name);
}
var handle=setInterval(greeting,1000,"Hello","John");
clearInterval(handle);
