function stringAssembly(arrQueries, objValues){

    let string = ` `
    let and = ` AND `
    let firstQueryDone = 0
    const arrValues = Object.keys(objValues);
   for(let i = 0; i < arrQueries.length; i++){
        if(objValues[arrValues[i]] == ""){
            console.log("Breaking " , i);
            continue;
        }
        if(firstQueryDone > 0){
            string += and;
        }
        string += arrQueries[i];
        string += objValues[arrValues[i]]
        
        firstQueryDone++ 
        console.log(`${i}: ${string}`);
   }
   return string
}

// const sql =stringAssembly([' hello = ', ' momey = ',' ronen = ', 'baby = '], {hello: '5', money: '90', ronen: '', baby: '99'})
// console.log(sql);

module.exports = {stringAssembly};