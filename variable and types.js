// Question: Write a JavaScript function checkDataTypes that takes three parameters
//  and returns an array containing the data type of each parameter.



function checkDataTypes(x,y,z){
    return [typeof(x),typeof(y),typeof(z)];
}
console.log(checkDataTypes(1,true,"hello"));