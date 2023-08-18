//write a program to print the largest numbee among the given two numbers

num1 =500
num2 =500

if(num1>num2){
    console.log(`${num1} is greater than ${num2} `);
}
else if (num2>num1){
    console.log(`${num2} is greater than ${num1}`);
}
else{
    console.log(`both numbers are equal`);
}

console.log(num1>num2?`is grater than`: num2>num1?`is grater than` : ` both number are equal`);