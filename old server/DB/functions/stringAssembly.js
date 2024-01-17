function stringAssembly(arrQueries, objValues){

    let string = ` `
    let and = ` AND `
    let firstQueryDone = 0
    console.log(arrQueries, objValues);
    const arrValues = Object.keys(objValues);
   for(let i = 0; i < arrQueries.length; i++){
        if(objValues[arrValues[i]] == '' || objValues[arrValues[i]] == undefined){
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



module.exports = {stringAssembly};