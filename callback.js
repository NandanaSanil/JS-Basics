//lets take about callback

function addEvent(callback){
    setTimeout(function(){
        var i = 0;
        while(i < 1000000000){
            i++;
        }
        if(i ==445454){
            callback('done',null);
        }else{
            callback(null,'error');
        }
    }, 0);
}

// addEvent(function(text,err){
//     if(err){
//         return console.log(err);
//     }
//     console.log(text);
// })
