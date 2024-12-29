console.log('start')
function api1(callback){
     setTimeout(()=>{
     callback(5)
     },1000)
}
function api2(callback){
     setTimeout(()=>{
         callback(5)
         },1000)
}
function api3(callback){
     setTimeout(()=>{
         callback(5)
         },1000)
}
api1((value)=>{
     api2((value2)=>{
         api3((value3)=>{
            console.log(value+value2+value3);
})
})
})
console.log('end')