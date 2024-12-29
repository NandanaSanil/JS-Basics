// const promise1 = new Promise((resolve,reject)=>{
//         resolve(['javascript','java'])
//     })
    
//     const promise2 = new Promise((resolve,reject)=>{
//         resolve(['React','Angular'])
//     })
    
//     promise1.then((res)=>{
//         document.write(res);
//         //console.log(res)
//     })
    
//     promise2.then((res)=>{
//         document.write(res);
//         //console.log(res)
//     })
    
//promise.all

// const promise1 = new Promise((resolve, reject) => {
//     resolve(['javascript', 'java']);
// });

// const promise2 = new Promise((resolve, reject) => {
//     resolve(['React', 'Angular']);
// });

// const allpromises = Promise.all([promise1, promise2]);

// allpromises.then((res) => {
//     document.write(res);
//     //console.log(res);
// });

//promise.race

// const promise1 = new Promise((resolve, reject) => {
//     resolve(['javascript', 'java']);
//     // reject('failed');
// });

// const promise2 = new Promise((resolve, reject) => {
//     resolve(['React', 'Angular']);
//     // reject('failed');
// });

// const allpromises = Promise.race([promise1, promise2]);

// allpromises.then((res) => {
//     document.write(res.flat(Infinity));
//     //console.log(res.flat(Infinity));
// }).catch((error) => {
//     document.write(error);
//     //console.log(error);
// });
 
//promise.any

// const promise1 = new Promise((resolve, reject) => {
//     resolve(['javascript', 'java']);
//     // reject('failed');
// });

// const promise2 = new Promise((resolve, reject) => {
//     resolve(['React', 'Angular']);
//     // reject('failed');
// });

// const allpromises = Promise.any([promise1, promise2]);

// allpromises.then((res) => {
//     document.write(res.flat(Infinity));
//     //console.log(res.flat(Infinity));
// });

//promise.allSettled

// const promise1 = new Promise((resolve, reject) => {
//     resolve(['javascript', 'java']);
// });

// const promise2 = new Promise((resolve, reject) => {
//     // resolve(['React', 'Angular']);
//     reject("failed");
// });

// const allpromises = Promise.allSettled([promise1, promise2]);

// // allpromises.then((res) => {
// //     document.write(res.flat(Infinity));
// //     //console.log(res.flat(Infinity));

// // });

// // allpromises.then((res) => {
// //     res.flat(Infinity).forEach(obj => console.log(obj));
// // });

// allpromises.then((res) => {
//     document.write(JSON.stringify(res.flat(Infinity), null, 2));
// });


