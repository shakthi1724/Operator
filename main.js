var a=parseInt(prompt("Enter the first number"));
var b=parseInt(prompt("Enter the second number"));
var c=prompt("Operator");
if(c=='+'){
    console.log("Addition:"+(a+b));
}
else if(c=='-'){
    console.log("Substraction:"+(a-b));
}
else if(c=='*'){
    console.log("Multiplication:"+(a*b));
}
else if(c=='/'){
    console.log("Divide:"+(a/b));
}
else{
    console.log("Invalid operator")
}
