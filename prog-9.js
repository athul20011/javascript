//write the progrm  'fizz' is the number is divisable by 3
//'buzz' if the number is divisable by 5
//'fizzbuzz' is the number is divisable by 15

num =30

if(num%15==0){
    console.log('fizzbuzz');
}
else if(num%5==0){
    console.log('fizz');
}
else if(num%3==0){
    console.log('nuzz');
}
else{
    console.log('this is number divisable by 3, 5, 15');
}


//write a program to finde the largest number

num1=10
num2=220
num3=30

if(num1>num2 && num2>num3){
    console.log(`${num1} is largest num`);
}
else if(num2>num1 && num2>num3){
    console.log(`${num2} is largest num`);
}
else{
    console.log(`${num3} is largest num`);
}

console.log(`----------------------------------------------------------------------------------------------`);

//write the program to input 3 numbers and print the second largest number and sort the three numbers is descening order
 
num1=10
num2=40
num3=30

if(num1>num2 && num1>num3){
    if(num2>num3){
        console.log(`second largest number is : ${num2}`);
        console.log(`decending ordr is : ${num1},${num2},${num3}`);

    }
    else{
        console.log(`second largest number is ${num3}`);
        console.log(`decending order is : ${num1},${num3},${num2}`);
    }
}

else if(num2>num1 && num2>num3){
if(num1>num3){
    console.log(`second largest number is : ${num1}`);
    console.log(`decending ordr is : ${num2},${num1},${num3}`);

}
else{
    console.log(`second largest number is ${num3}`);
    console.log(`decending order is : ${num1},${num3},${num2}`);
}
}

else if(num3>num1 && num3>num2){
    if(num1>num2){
        console.log(`second largest number is : ${num1}`);
        console.log(`decending ordr is : ${num3},${num1},${num2}`);
    
    }
    else{
        console.log(`second largest number is ${num2}`);
        console.log(`decending order is : ${num3},${num2},${num1}`);
    }
    }
    else {
        console.log(`all are equal`);
    }


