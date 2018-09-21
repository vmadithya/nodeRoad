// var somePromise = new Promise(((resolve,reject) => {
//     setTimeout(()=>{
//         // resolve('Hey I got resolved');
//         reject('Unable to handle this');
//     },2500);
    
// }));

// somePromise.then((message)=>{
//     console.log('Success: '+message);
// },(errorMessage)=>{
//     console.log('Error: '+errorMessage);
// });

var addTwoNum = (a,b) =>{
    return new Promise((resolve, reject) =>{
        setTimeout(()=>{
            if( typeof a === 'number' && typeof b === 'number'){
                resolve(a+b);
            } else {
                reject('Arguments not the right type');
            }
        }, 1500);
    });
};

addTwoNum(3,4).then((res)=>{
console.log('Result: ',res);
return addTwoNum (res, '5').then((suc) =>{
console.log("Success2: ",suc);
});
}).catch((errrr)=>{
    console.log('Final Err: ',errrr);
});