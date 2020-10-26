var name = "hasan";

function add(num1, num2){
    var result = num1 + num2;
    //If variable is not defined then the variable is accissable from any where.
    // If "window" is declared before the variable then the variable becomes a global variable. 
    // example: window.result = num1 = num2;
    console.log("result inside", result);
    console.log("name inside", name);
    function double(num){
        return num * 2;
    }
    var total = double(result);
    return total;
}

// console.log("result outside", result); "This console will give an error"
// Where "var, let, const" is not declared before a variable inside any function and the variable becomes a global variable
// the variable can be accessible after calling the function. But if want to read before calling function give an error.
console.log("name outside", name);
var sum = add(13, 12);
// console.log("result outside", result); The variable result accessible from here where "var, let, const" is not declared.
console.log(sum);